"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { Loader2, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

const AIGeneration = () => {
  const navigate = useNavigate();
  const {
    personalInfo,
    experience,
    education,
    jobDescription,
    setAiGeneratedContent,
    isLoading,
    setIsLoading,
  } = useResumeContext();

  const [generationSteps, setGenerationSteps] = useState({
    analyzing: {
      status: "pending",
      message: "Analyzing your profile and job description...",
    },
    skills: { status: "pending", message: "Identifying relevant skills..." },
    summary: { status: "pending", message: "Crafting professional summary..." },
    experience: {
      status: "pending",
      message: "Tailoring experience descriptions...",
    },
    finalizing: { status: "pending", message: "Finalizing your resume..." },
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if we have the necessary data
    if (
      !personalInfo.name ||
      experience.length === 0 ||
      education.length === 0 ||
      !jobDescription
    ) {
      toast.error("Please complete all previous steps first");
      navigate("/builder");
      return;
    }

    // Start the AI generation process
    generateResume();
  }, []);

  const simulateStepCompletion = (step, nextStep, delay) => {
    setTimeout(() => {
      setGenerationSteps((prev) => ({
        ...prev,
        [step]: { ...prev[step], status: "completed" },
      }));

      if (nextStep) {
        setGenerationSteps((prev) => ({
          ...prev,
          [nextStep]: { ...prev[nextStep], status: "in-progress" },
        }));
      }
    }, delay);
  };

  const generateResume = async () => {
    setIsLoading(true);

    // Start the first step
    setGenerationSteps((prev) => ({
      ...prev,
      analyzing: { ...prev.analyzing, status: "in-progress" },
    }));

    // Simulate API calls with delays for demonstration
    // In a real implementation, you would make actual API calls to the Gemini API

    try {
      // Step 1: Analyzing
      simulateStepCompletion("analyzing", "skills", 2000);

      // Step 2: Skills identification
      simulateStepCompletion("skills", "summary", 3000);

      // Step 3: Summary creation
      simulateStepCompletion("summary", "experience", 4000);

      // Step 4: Experience tailoring
      simulateStepCompletion("experience", "finalizing", 5000);

      // Step 5: Finalizing
      setTimeout(() => {
        setGenerationSteps((prev) => ({
          ...prev,
          finalizing: { ...prev.finalizing, status: "completed" },
        }));

        // Set the AI generated content
        setAiGeneratedContent({
          skills: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "HTML/CSS",
            "Node.js",
            "RESTful APIs",
            "Git",
            "Agile Methodologies",
            "UI/UX Design",
            "Problem Solving",
            "Team Collaboration",
          ],
          summary: `Dedicated and innovative software developer with ${experience.length} years of experience in building responsive web applications. Proficient in modern JavaScript frameworks with a strong focus on React.js. Passionate about creating intuitive user interfaces and solving complex problems through clean, efficient code.`,
          tailoredExperience: experience.map((exp) => ({
            ...exp,
            highlights: [
              "Developed and maintained responsive web applications using React.js, resulting in a 30% improvement in user engagement.",
              "Collaborated with cross-functional teams to implement new features and optimize existing functionality.",
              "Utilized modern JavaScript practices and state management solutions to create scalable application architecture.",
            ],
          })),
          recommendations: [
            "Quantify your achievements with metrics where possible",
            "Highlight your experience with state management libraries",
            "Emphasize your collaborative work style and team contributions",
          ],
        });

        setIsLoading(false);
      }, 6000);
    } catch (error) {
      console.error("Error generating resume:", error);
      toast.error(
        "An error occurred while generating your resume. Please try again."
      );
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/builder");
  };

  const handleContinue = () => {
    navigate("/preview");
  };

  const renderStepStatus = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "in-progress":
        return <Loader2 className="h-5 w-5 text-indigo-600 animate-spin" />;
      default:
        return (
          <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          AI Resume Generation
        </h1>
        <p className="text-gray-600">
          Our AI is analyzing your information to create a tailored resume.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="space-y-6">
          {Object.entries(generationSteps).map(([key, { status, message }]) => (
            <div key={key} className="flex items-center">
              <div className="mr-4">{renderStepStatus(status)}</div>
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    status === "completed"
                      ? "text-green-700"
                      : status === "in-progress"
                      ? "text-indigo-700"
                      : "text-gray-500"
                  }`}
                >
                  {message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!isLoading && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
              <div className="flex">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-green-800 font-medium">
                    Resume generation complete!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Your resume has been tailored to match the job description.
                    Continue to preview and download.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center text-gray-700 hover:text-indigo-600"
          disabled={isLoading}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back to Editor
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="btn-primary flex items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Preview Resume
              <ArrowRight className="h-5 w-5 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIGeneration;
