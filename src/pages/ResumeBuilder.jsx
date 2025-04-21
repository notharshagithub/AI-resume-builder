"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../context/ResumeContext";
import { ArrowLeft, ArrowRight, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const {
    personalInfo,
    setPersonalInfo,
    experience,
    addExperience,
    updateExperience,
    removeExperience,
    education,
    addEducation,
    updateEducation,
    removeEducation,
    jobDescription,
    setJobDescription,
    currentStep,
    setCurrentStep,
  } = useResumeContext();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const validatePersonalInfo = () => {
    const errors = {};
    if (!personalInfo.name.trim()) errors.name = "Name is required";
    if (!personalInfo.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(personalInfo.email))
      errors.email = "Email is invalid";
    if (!personalInfo.phone.trim()) errors.phone = "Phone number is required";
    if (!personalInfo.location.trim()) errors.location = "Location is required";
    return errors;
  };

  const validateExperience = () => {
    const errors = {};
    experience.forEach((exp, index) => {
      if (!exp.company.trim())
        errors[`company_${index}`] = "Company name is required";
      if (!exp.position.trim())
        errors[`position_${index}`] = "Position is required";
      if (!exp.startDate.trim())
        errors[`startDate_${index}`] = "Start date is required";
      if (!exp.description.trim())
        errors[`description_${index}`] = "Description is required";
    });
    return errors;
  };

  const validateEducation = () => {
    const errors = {};
    education.forEach((edu, index) => {
      if (!edu.institution.trim())
        errors[`institution_${index}`] = "Institution name is required";
      if (!edu.degree.trim()) errors[`degree_${index}`] = "Degree is required";
      if (!edu.field.trim())
        errors[`field_${index}`] = "Field of study is required";
      if (!edu.graduationYear.trim())
        errors[`graduationYear_${index}`] = "Graduation year is required";
    });
    return errors;
  };

  const validateJobDescription = () => {
    const errors = {};
    if (!jobDescription.trim())
      errors.jobDescription = "Job description is required";
    else if (jobDescription.trim().length < 50)
      errors.jobDescription = "Please provide a more detailed job description";
    return errors;
  };

  const handleNext = () => {
    let currentErrors = {};

    switch (currentStep) {
      case 1:
        currentErrors = validatePersonalInfo();
        break;
      case 2:
        currentErrors = validateExperience();
        break;
      case 3:
        currentErrors = validateEducation();
        break;
      case 4:
        currentErrors = validateJobDescription();
        break;
      default:
        break;
    }

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate("/ai-generation");
      }
    } else {
      toast.error("Please fix the errors before proceeding");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Resume Builder
        </h1>
        <p className="text-gray-600">
          Fill in your details below to create a personalized resume.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === currentStep
                    ? "bg-indigo-600 text-white"
                    : step < currentStep
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
              <span className="text-xs mt-2 text-gray-600">
                {step === 1 && "Personal Info"}
                {step === 2 && "Experience"}
                {step === 3 && "Education"}
                {step === 4 && "Job Description"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200"></div>
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-indigo-600 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Personal Information */}
      {currentStep === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                className={`input-field ${errors.name ? "border-red-500" : ""}`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                className={`input-field ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                className={`input-field ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="(123) 456-7890"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={personalInfo.location}
                onChange={handlePersonalInfoChange}
                className={`input-field ${
                  errors.location ? "border-red-500" : ""
                }`}
                placeholder="City, State"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="linkedIn"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                LinkedIn Profile (Optional)
              </label>
              <input
                type="text"
                id="linkedIn"
                name="linkedIn"
                value={personalInfo.linkedIn}
                onChange={handlePersonalInfoChange}
                className="input-field"
                placeholder="linkedin.com/in/johndoe"
              />
            </div>

            <div>
              <label
                htmlFor="portfolio"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Portfolio Website (Optional)
              </label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                value={personalInfo.portfolio}
                onChange={handlePersonalInfoChange}
                className="input-field"
                placeholder="johndoe.com"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Work Experience */}
      {currentStep === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Work Experience
            </h2>
            <button
              type="button"
              onClick={addExperience}
              className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Experience
            </button>
          </div>

          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Experience {index + 1}
                </h3>
                {experience.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExperience(exp.id)}
                    className="flex items-center text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`company_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id={`company_${index}`}
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(exp.id, "company", e.target.value)
                    }
                    className={`input-field ${
                      errors[`company_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Acme Inc."
                  />
                  {errors[`company_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`company_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`position_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Position *
                  </label>
                  <input
                    type="text"
                    id={`position_${index}`}
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(exp.id, "position", e.target.value)
                    }
                    className={`input-field ${
                      errors[`position_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Software Developer"
                  />
                  {errors[`position_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`position_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`startDate_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Start Date *
                  </label>
                  <input
                    type="text"
                    id={`startDate_${index}`}
                    value={exp.startDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "startDate", e.target.value)
                    }
                    className={`input-field ${
                      errors[`startDate_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Jan 2020"
                  />
                  {errors[`startDate_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`startDate_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`endDate_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    End Date (or "Present")
                  </label>
                  <input
                    type="text"
                    id={`endDate_${index}`}
                    value={exp.endDate}
                    onChange={(e) =>
                      updateExperience(exp.id, "endDate", e.target.value)
                    }
                    className="input-field"
                    placeholder="Present"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor={`description_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Description *
                  </label>
                  <textarea
                    id={`description_${index}`}
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(exp.id, "description", e.target.value)
                    }
                    rows={4}
                    className={`input-field ${
                      errors[`description_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Describe your responsibilities and achievements..."
                  ></textarea>
                  {errors[`description_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`description_${index}`]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Step 3: Education */}
      {currentStep === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Education</h2>
            <button
              type="button"
              onClick={addEducation}
              className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Education
            </button>
          </div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Education {index + 1}
                </h3>
                {education.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                    className="flex items-center text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`institution_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Institution *
                  </label>
                  <input
                    type="text"
                    id={`institution_${index}`}
                    value={edu.institution}
                    onChange={(e) =>
                      updateEducation(edu.id, "institution", e.target.value)
                    }
                    className={`input-field ${
                      errors[`institution_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="University of Example"
                  />
                  {errors[`institution_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`institution_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`degree_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Degree *
                  </label>
                  <input
                    type="text"
                    id={`degree_${index}`}
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(edu.id, "degree", e.target.value)
                    }
                    className={`input-field ${
                      errors[`degree_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Bachelor of Science"
                  />
                  {errors[`degree_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`degree_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`field_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Field of Study *
                  </label>
                  <input
                    type="text"
                    id={`field_${index}`}
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(edu.id, "field", e.target.value)
                    }
                    className={`input-field ${
                      errors[`field_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="Computer Science"
                  />
                  {errors[`field_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`field_${index}`]}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`graduationYear_${index}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Graduation Year *
                  </label>
                  <input
                    type="text"
                    id={`graduationYear_${index}`}
                    value={edu.graduationYear}
                    onChange={(e) =>
                      updateEducation(edu.id, "graduationYear", e.target.value)
                    }
                    className={`input-field ${
                      errors[`graduationYear_${index}`] ? "border-red-500" : ""
                    }`}
                    placeholder="2022"
                  />
                  {errors[`graduationYear_${index}`] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[`graduationYear_${index}`]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Step 4: Job Description */}
      {currentStep === 4 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Job Description
          </h2>
          <p className="text-gray-600 mb-4">
            Paste the job description you're applying for. Our AI will analyze
            it to tailor your resume.
          </p>

          <div>
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Description *
            </label>
            <textarea
              id="jobDescription"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={10}
              className={`input-field ${
                errors.jobDescription ? "border-red-500" : ""
              }`}
              placeholder="Paste the full job description here..."
            ></textarea>
            {errors.jobDescription && (
              <p className="mt-1 text-sm text-red-600">
                {errors.jobDescription}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className={`flex items-center ${
            currentStep === 1 ? "invisible" : ""
          }`}
        >
          <ArrowLeft className="h-5 w-5 mr-1" />
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="btn-primary flex items-center"
        >
          {currentStep < 4 ? "Next" : "Generate Resume"}
          <ArrowRight className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ResumeBuilder;
