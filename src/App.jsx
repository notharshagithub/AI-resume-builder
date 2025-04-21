import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { ResumeProvider } from "./context/ResumeContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage";
import ResumeBuilder from "./pages/ResumeBuilder"
import AIGeneration from "./pages/AIGeneration"
import PreviewResume from "./pages/PreviewResume"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <ResumeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Toaster position="top-center" />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/builder" element={<ResumeBuilder />} />
              <Route path="/ai-generation" element={<AIGeneration />} />
              <Route path="/preview" element={<PreviewResume />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ResumeProvider>
  )
}

export default App
