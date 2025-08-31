import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import BlogPage from "./pages/BlogPage";
import ReadingPage from "./pages/ReadingPage";
import MentoringPage from "./pages/MentoringPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/mentoring" element={<MentoringPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
}
