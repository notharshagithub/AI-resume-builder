"use client";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Download, ArrowLeft, RefreshCw, Printer } from "lucide-react";
import toast from "react-hot-toast";
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

// --- PDF Styles & Decorative Layout ---
const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 0,
    fontFamily: "Helvetica",
  },
  header: {
    backgroundColor: "#1F2937",
    padding: 16,
  },
  headerName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerContact: {
    color: "#D1D5DB",
    fontSize: 10,
    marginTop: 4,
  },
  contentWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  sidebar: {
    width: "30%",
    backgroundColor: "#F3F4F6",
    padding: 12,
  },
  main: {
    width: "70%",
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E40AF",
    marginBottom: 6,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 10,
    marginBottom: 4,
  },
  skillTag: {
    fontSize: 8,
    backgroundColor: "#E0E7FF",
    padding: 2,
    marginRight: 4,
    marginBottom: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    marginVertical: 8,
  },
});

const ResumePDFDocument = ({ personalInfo, aiGeneratedContent, education }) => (
  <Document>
    <Page size="LETTER" style={pdfStyles.page}>
      {/* HEADER BAR */}
      <View style={pdfStyles.header}>
        <Text style={pdfStyles.headerName}>{personalInfo.name}</Text>
        <Text style={pdfStyles.headerContact}>
          {personalInfo.location} · {personalInfo.phone} · {personalInfo.email}
        </Text>
      </View>

      {/* BODY: SIDEBAR + MAIN */}
      <View style={pdfStyles.contentWrapper}>
        {/* SIDEBAR */}
        <View style={pdfStyles.sidebar}>
          {/* Skills */}
          <Text style={pdfStyles.sectionTitle}>Skills</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {aiGeneratedContent.skills.map((skill, i) => (
              <Text key={i} style={pdfStyles.skillTag}>
                {skill}
              </Text>
            ))}
          </View>

          <View style={pdfStyles.separator} />

          {/* Education */}
          <Text style={pdfStyles.sectionTitle}>Education</Text>
          {education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 6 }}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>
                {edu.degree}, {edu.field}
              </Text>
              <Text style={pdfStyles.text}>
                {edu.institution} ({edu.graduationYear})
              </Text>
            </View>
          ))}

          <View style={pdfStyles.separator} />

          {/* Recommendations */}
          <Text style={pdfStyles.sectionTitle}>Recommendations</Text>
          {aiGeneratedContent.recommendations.map((rec, i) => (
            <Text key={i} style={pdfStyles.text}>
              • {rec}
            </Text>
          ))}
        </View>

        {/* MAIN CONTENT */}
        <View style={pdfStyles.main}>
          {/* Professional Summary */}
          <Text style={pdfStyles.sectionTitle}>Professional Summary</Text>
          <Text style={pdfStyles.text}>{aiGeneratedContent.summary}</Text>

          <View style={pdfStyles.separator} />

          {/* Experience */}
          <Text style={pdfStyles.sectionTitle}>Experience</Text>
          {aiGeneratedContent.tailoredExperience.map((exp, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                {exp.position} @ {exp.company}
              </Text>
              <Text style={pdfStyles.text}>
                {exp.startDate} – {exp.endDate || "Present"}
              </Text>
              <Text style={pdfStyles.text}>{exp.description}</Text>
              {exp.highlights.map((hl, j) => (
                <Text key={j} style={{ marginLeft: 8, fontSize: 10 }}>
                  • {hl}
                </Text>
              ))}
              <View style={pdfStyles.separator} />
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const PreviewResume = () => {
  const navigate = useNavigate();
  const resumeRef = useRef(null);
  const { personalInfo, experience, education, aiGeneratedContent, resetForm } =
    useResumeContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!personalInfo.name || aiGeneratedContent.skills.length === 0) {
      toast.error("Please complete all previous steps first");
      navigate("/builder");
    }
  }, [navigate, personalInfo.name, aiGeneratedContent.skills.length]);

  const handleBack = () => navigate("/ai-generation");
  const handlePrint = () => window.print();
  const handleStartOver = () => {
    resetForm();
    navigate("/builder");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Live Preview Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Preview Your Resume
        </h1>
        <p className="text-gray-600">
          Review your AI‑enhanced resume and download it as a PDF.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* ON‑SCREEN PREVIEW */}
        <div className="lg:w-2/3">
          <div
            ref={resumeRef}
            className="bg-white p-8 rounded-2xl shadow-xl ring-1 ring-gray-200 max-w-3xl mx-auto"
          >
            {/* … your decorative live markup (as before) … */}
          </div>
        </div>

        {/* SIDEBAR ACTIONS & DOWNLOAD */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Actions
            </h2>
            <PDFDownloadLink
              document={
                <ResumePDFDocument
                  personalInfo={personalInfo}
                  aiGeneratedContent={aiGeneratedContent}
                  education={education}
                />
              }
              fileName={`${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`}
            >
              {({ loading, error }) =>
                loading ? (
                  <button className="btn-primary w-full flex items-center justify-center mb-3">
                    <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Generating…
                  </button>
                ) : error ? (
                  <button
                    onClick={() => toast.error("Failed to generate resume PDF")}
                    className="btn-primary w-full flex items-center justify-center mb-3"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Retry Download
                  </button>
                ) : (
                  <button className="btn-primary w-full flex items-center justify-center mb-3">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </button>
                )
              }
            </PDFDownloadLink>
            <button
              onClick={handlePrint}
              className="btn-outline w-full flex items-center justify-center"
            >
              <Printer className="h-5 w-5 mr-2" />
              Print Resume
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              AI Recommendations
            </h2>
            <ul className="space-y-2">
              {aiGeneratedContent.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2" />
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-700 hover:text-indigo-600"
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>
        <button
          onClick={handleStartOver}
          className="flex items-center text-gray-700 hover:text-indigo-600"
        >
          <RefreshCw className="h-5 w-5 mr-1" />
          Start Over
        </button>
      </div>
    </div>
  );
};

export default PreviewResume;
