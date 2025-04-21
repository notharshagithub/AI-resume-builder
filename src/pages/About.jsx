"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Sparkles, Download, Github } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          About ResumeAI
        </h1>
        <p className="text-gray-600">
          Learn more about our project, technology, and mission.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Project Overview
        </h2>
        <p className="text-gray-700 mb-4">
          ResumeAI is an innovative resume builder that leverages artificial
          intelligence to help job seekers create tailored, professional resumes
          that stand out to employers and applicant tracking systems.
        </p>
        <p className="text-gray-700 mb-4">
          Our platform analyzes your experience and the job description to
          identify the most relevant skills and achievements, helping you
          present yourself in the best possible light for each application.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Easy Input</h3>
            <p className="text-gray-600 text-sm">
              Simple forms to enter your information without the hassle
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
            <p className="text-gray-600 text-sm">
              Advanced AI analyzes and optimizes your resume for each job
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Instant Download
            </h3>
            <p className="text-gray-600 text-sm">
              Get your professional resume as a PDF in seconds
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Technology Stack
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>React.js:</strong> For building the user interface
                  with functional components and hooks
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>React Router:</strong> For handling navigation between
                  pages
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Context API:</strong> For state management across
                  components
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Tailwind CSS:</strong> For responsive and modern
                  styling
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Lucide React:</strong> For beautiful icons
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">
              AI & Utilities
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Gemini API:</strong> For AI-powered resume analysis
                  and generation
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>html2pdf.js:</strong> For converting HTML to
                  downloadable PDF files
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>React Hot Toast:</strong> For user-friendly
                  notifications
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Vite:</strong> For fast development and optimized
                  builds
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                <span>
                  <strong>Git & GitHub:</strong> For version control and
                  collaboration
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Project Goals
        </h2>
        <p className="text-gray-700 mb-4">
          This project was developed as part of a college assignment to
          demonstrate understanding of modern frontend development using React.
          The key goals were:
        </p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
            <span>
              Create a meaningful React application with practical real-world
              use
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
            <span>
              Implement state management across components using Context API
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
            <span>
              Build a responsive, user-friendly interface with Tailwind CSS
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
            <span>
              Integrate with external APIs (Gemini AI) for enhanced
              functionality
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
            <span>
              Follow best practices for code organization, commenting, and
              reusable components
            </span>
          </li>
        </ul>
        <div className="flex justify-center">
          <a
            href="https://github.com/yourusername/prescribe-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center"
          >
            <Github className="h-5 w-5 mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Try It Out?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Create your AI-powered resume in minutes and increase your chances of
          landing that dream job.
        </p>
        <Link to="/builder" className="btn-primary inline-flex items-center">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default About;
