import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 !bg-deep-marine !text-white p-4 rounded-full shadow-lg hover:!bg-gray-800 transition-all duration-300 transform hover:scale-110"
          style={{backgroundColor: '#1e3a8a', color: '#ffffff'}}
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up text-xl"></i>
        </button>
      )}
    </div>
  );
}
