import { Button } from "@/components/ui/button";
import { LazyVideo } from "@/components/ui/LazyVideo";

export default function Hero() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <LazyVideo 
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/home.png"
          src="/videos/surfive_scene.mp4"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight text-white drop-shadow-lg tracking-tight">
            Meet <span className="text-electric-cyan">InnoNautics</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-white/90 max-w-5xl mx-auto leading-relaxed drop-shadow-md font-light">
            Autonomous water mobility.<br/>
            Portable. Affordable. Revolutionary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={scrollToAbout}
              className="!bg-deep-marine !text-white px-10 py-4 rounded-full text-lg font-medium hover:!bg-gray-800 transition-all duration-300 shadow-lg border border-white/20 min-w-[180px]"
            >
              Learn More
            </Button>
            <Button 
              onClick={scrollToFeatures}
              variant="outline"
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-deep-marine transition-all duration-300 bg-white/5 backdrop-blur-sm min-w-[180px]"
            >
              See Features
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-electric-cyan">100%</div>
              <div className="text-sm text-white">Autonomous</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-electric-cyan">Safe</div>
              <div className="text-sm text-white">& Efficient</div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-electric-cyan">Portable</div>
              <div className="text-sm text-white">& Affordable</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-electric-cyan transition-colors duration-300"
        onClick={scrollToFeatures}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-300">Scroll Down</span>
          <i className="fas fa-chevron-down text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
