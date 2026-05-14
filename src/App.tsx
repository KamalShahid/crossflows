import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SmartTalk from "./pages/products/SmartTalk";
import DriveFlow from "./pages/products/DriveFlow";
import LearnMate from "./pages/products/LearnMate";
import WorkSync from "./pages/products/WorkSync";
import Industries from "./pages/Industries";
import UseCases from "./pages/UseCases";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/smarttalk" element={<SmartTalk />} />
        <Route path="/products/driveflow" element={<DriveFlow />} />
        <Route path="/products/learnmate" element={<LearnMate />} />
        <Route path="/products/worksync" element={<WorkSync />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
