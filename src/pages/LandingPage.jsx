"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Download,
  CheckCircle,
} from "lucide-react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                <span className="block">Create the Perfect Resume</span>
                <span className="block text-indigo-600">Powered by AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                PrescribeAI analyzes your experience and job descriptions to
                generate tailored resumes that highlight your most relevant
                skills and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/builder"
                  className="btn-primary flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="btn-outline flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 transform rotate-1 transition-all duration-300 hover:rotate-0">
                <div className="bg-indigo-50 p-4 rounded-md mb-4">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                    AI-Generated Resume
                  </h3>
                  <div className="space-y-2">
                    <div className="h-4 bg-indigo-200 rounded w-3/4"></div>
                    <div className="h-4 bg-indigo-200 rounded w-1/2"></div>
                    <div className="h-4 bg-indigo-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        React.js
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        UI/UX
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">
                      Experience
                    </h4>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform simplifies the resume creation process,
              helping you stand out to employers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Input Your Details
              </h3>
              <p className="text-gray-600">
                Enter your personal information, work experience, education, and
                the job description you're applying for.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your experience and the job requirements to
                identify the most relevant skills and achievements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download Resume
              </h3>
              <p className="text-gray-600">
                Preview your tailored resume and download it as a PDF, ready to
                submit to potential employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose PrescribeAI?
              </h2>

              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="font-medium">
                      AI-Powered Insights:
                    </strong>{" "}
                    Our AI identifies the most relevant skills and experiences
                    for your target job.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="font-medium">Time-Saving:</strong> Create
                    a tailored resume in minutes, not hours.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="font-medium">ATS-Friendly:</strong> Our
                    resumes are optimized to pass through Applicant Tracking
                    Systems.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="font-medium">
                      Professional Templates:
                    </strong>{" "}
                    Choose from a variety of clean, professional designs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">PrescribeAI</h3>
                    <p className="text-sm text-gray-600">Resume Analysis</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                    <p className="text-sm text-green-800">
                      <span className="font-medium">Match Rate:</span> 92%
                      alignment with job requirements
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Recommended Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        React.js
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        TypeScript
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        UI/UX
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                        API Design
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Improvement Suggestions
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                        Highlight your experience with state management
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-1.5 mr-2"></span>
                        Add metrics to quantify your achievements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Perfect Resume?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of job seekers who have used PrescribeAI to land
            their dream jobs.
          </p>
          <Link
            to="/builder"
            className="btn-primary inline-flex items-center justify-center"
          >
            Start Building Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
