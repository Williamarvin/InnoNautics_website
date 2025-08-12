import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="/images/logo2.png" alt="InnoNautics Logo" className="h-12 w-auto" />
            <span className="font-heading font-bold text-2xl text-deep-marine">InnoNautics</span>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('objectives')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              Objectives
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-tech-blue transition-colors font-medium py-2 px-3 rounded-lg hover:bg-neutral-light"
            >
              Gallery
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-neutral-light transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-4 pt-4">
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('objectives')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                Objectives
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left py-3 px-4 text-gray-700 hover:text-tech-blue hover:bg-neutral-light transition-colors font-medium rounded-lg"
              >
                Gallery
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
