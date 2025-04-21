# 🧠 Resume AI – AI-Powered Resume Builder

Resume AI is a smart and modern web application that leverages AI to help users create personalized, professional resumes tailored to specific job descriptions. Built using React + Vite, it features a beautiful UI, form validation, PDF generation, and seamless AI integration using Google’s Gemini API.

## 🚀 Live Demo

🔗 [View Live App](https://ai-resume-builder-seven-delta.vercel.app/)

---

## 📸 Screenshots

| Landing Page | Resume Builder | AI Generation | PDF Output |
|--------------|----------------|----------------|------------|
| ![Landing](./screenshots/landing.png) | ![Builder](./screenshots/builder.png) | ![AI](./screenshots/ai-gen.png) | ![PDF](./screenshots/pdf.png) |

---

## ✨ Features

- 🧭 Multi-page navigation with **React Router**
- 🧠 **AI-generated** resume content using **Gemini API**
- ⚙️ **Context API** for global state management
- 📋 Form with **validation**
- 🎨 **Tailwind CSS** for beautiful, responsive UI
- 📄 Export resume as **PDF** via `@react-pdf/renderer`
- 🔄 Reset/start-over functionality
- 📱 Fully **responsive** (Mobile & Desktop)
- ♻️ Modular, reusable components
- 🌐 **Deployed** and version controlled with GitHub

---

## 🛠 Tech Stack

- **React.js** (with Hooks + Vite)
- **React Router DOM**
- **React Context API**
- **Tailwind CSS**
- **@react-pdf/renderer**
- **Gemini API (Generative AI by Google)**
- **React Hot Toast**
- **Vercel / Netlify (for deployment)**

---

## 📁 Pages / Routes

- `/` – Landing Page
- `/builder` – Resume Builder
- `/ai-generation` – AI Suggestions Page
- `/preview` – Resume Preview + PDF Download

---

## 📝 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/notharshagithub/resume-ai.git
   cd resume-ai
   

Paste your rich text content here. You can paste directly from Word or other rich text sources.

🔑 Add your Gemini API key  
Create a `.env` file in the root of the project:

env change to be made for this key



`VITE_GEMINI_API_KEY=your_gemini_api_key_here`





`npm run dev`

Visit: [http://localhost:5173](http://localhost:5173)

* * *

## 🧪 Form Validation

Mandatory fields: Name, Email, Experience, Job Description

* *   Users are redirected if form is incomplete
*     
* *   Dynamic error messages with toasts
*     

## 📄 Resume PDF Export

Uses `@react-pdf/renderer` for clean PDF format

* *   No pixelation (unlike HTML to canvas methods)
*     
* *   Fully formatted and AI-enhanced content
*     
* *   Professionally styled PDF layout
*     

## 🧱 Folder Structure

plaintext

CopyEdit

`src/ ├── assets/ ├── components/ ├── context/ ├── pages/ ├── styles/ ├── utils/ ├── App.jsx ├── main.jsx └── index.css`

## 🧠 AI Integration (Gemini)

Generates:

* *   Professional Summary
*     
* *   Tailored Work Experience
*     
* *   Recommended Skills
*     
* *   Improvements/Recommendations
*     

Response formatted and used across pages


Ensure you do not commit `.env` to GitHub.

* * *

## ✅ Good Practices Followed

* *   🔁 Reusable components
*     
* *   🧹 Clean, well-commented code
*     
* *   📦 Modular folder structure
*     
* *   💬 Meaningful commit messages (20+ commits)
*     
* *   🔐 Secure API integration via `.env`
*     

* * *

## 📤 Deployment

Deployed using Vercel 

🔗 [View Live App](https://ai-resume-builder-seven-delta.vercel.app/)

📜 Commit History (20+ meaningful commits)

Example:


`🎉 Initial Vite + React setup ✅ Added Resume Form and Context logic ✨ Integrated Gemini API 📝 Implemented PDF export using @react-pdf/renderer 🎨 Styled resume preview with Tailwind 🚀 Deployment setup and README added`

* * *

## 📘 Project Summary
Prescribe AI is an intelligent resume-building web application designed using React + Vite. It streamlines the process of creating tailored, job-ready resumes with the help of Google's Gemini AI. Users input basic details like name, education, work experience, and a job description, and the app uses AI to generate a professional summary, skills, and experience content that aligns with the job role.
* * *

## 👨‍💻 Author

Harsha  
📬 notharshagithub  
Built with 💙 as part of my college final project.

* * *

## 📃 License

This project is open-source under the MIT License.
