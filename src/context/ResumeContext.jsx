"use client";

import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const useResumeContext = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedIn: "",
    portfolio: "",
  });

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [education, setEducation] = useState([
    { id: 1, institution: "", degree: "", field: "", graduationYear: "" },
  ]);

  const [jobDescription, setJobDescription] = useState("");

  const [aiGeneratedContent, setAiGeneratedContent] = useState({
    skills: [],
    summary: "",
    tailoredExperience: [],
    recommendations: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const addExperience = () => {
    const newId =
      experience.length > 0
        ? Math.max(...experience.map((exp) => exp.id)) + 1
        : 1;
    setExperience([
      ...experience,
      {
        id: newId,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const updateExperience = (id, field, value) => {
    setExperience(
      experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const removeExperience = (id) => {
    setExperience(experience.filter((exp) => exp.id !== id));
  };

  const addEducation = () => {
    const newId =
      education.length > 0
        ? Math.max(...education.map((edu) => edu.id)) + 1
        : 1;
    setEducation([
      ...education,
      {
        id: newId,
        institution: "",
        degree: "",
        field: "",
        graduationYear: "",
      },
    ]);
  };

  const updateEducation = (id, field, value) => {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const removeEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const resetForm = () => {
    setPersonalInfo({
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      portfolio: "",
    });
    setExperience([
      {
        id: 1,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
    setEducation([
      { id: 1, institution: "", degree: "", field: "", graduationYear: "" },
    ]);
    setJobDescription("");
    setAiGeneratedContent({
      skills: [],
      summary: "",
      tailoredExperience: [],
      recommendations: [],
    });
    setCurrentStep(1);
  };

  return (
    <ResumeContext.Provider
      value={{
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
        aiGeneratedContent,
        setAiGeneratedContent,
        isLoading,
        setIsLoading,
        currentStep,
        setCurrentStep,
        resetForm,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
