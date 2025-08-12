import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LazyVideo } from "@/components/ui/LazyVideo";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Automation",
    description: "Autonomous Navigation to Way Points",
    videoSrc: "/videos/Automation.mp4",
    icon: "fas fa-robot",
    color: "bg-tech-blue",
    fullDescription: "Advanced AI-powered autonomous navigation system that safely transports users to designated locations with minimal exertion and optimal efficiency."
  },
  {
    title: "On Board",
    description: "Controlled by users via a remote interface",
    videoSrc: "/videos/On_Board_Control.mp4", 
    icon: "fas fa-gamepad",
    color: "bg-innovation-teal",
    fullDescription: "Intuitive onboard control system allowing users to directly manage the device while maintaining full situational awareness and control."
  },
  {
    title: "Remote",
    description: "Direct user control for manual navigation",
    videoSrc: "/videos/Remote_Control.mp4",
    icon: "fas fa-satellite-dish",
    color: "bg-electric-cyan",
    fullDescription: "Comprehensive remote control functionality enabling precise manual navigation and operation from a distance for enhanced safety and flexibility."
  }
];

export default function Features() {
  const [enlargedVideo, setEnlargedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoSrc: string) => {
    setEnlargedVideo(videoSrc);
  };

  const closeEnlargedVideo = () => {
    setEnlargedVideo(null);
  };

  return (
    <section id="features" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-deep-marine mb-6 tracking-tight">
            Main Features
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Controls Incorporated with Overriding Advanced Mechanism
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Video Container with proper spacing */}
                <div 
                  className="relative video-container cursor-pointer group mb-6 rounded-xl overflow-hidden"
                  onClick={() => handleVideoClick(feature.videoSrc)}
                >
                  <LazyVideo
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/home.png"
                    src={feature.videoSrc}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4">
                      <i className="fas fa-expand text-deep-marine text-xl"></i>
                    </div>
                  </div>
                </div>

                {/* Content - Centered heading */}
                <div className="text-center">
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-3`}>
                      <i className={`${feature.icon} text-white text-lg`}></i>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-deep-marine">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <Button 
                    className="w-full !bg-deep-marine !text-white py-4 rounded-xl hover:!bg-gray-800 transition-all duration-300 font-medium shadow-lg border border-white/10 text-lg"
                    onClick={() => handleVideoClick(feature.videoSrc)}
                  >
                    View Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Demo Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-deep-marine mb-6 tracking-tight">
              User Journey Demo Simulation
            </h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              See how our autonomous water mobility system works in real-world scenarios
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <LazyVideo
                className="w-full rounded-2xl shadow-2xl"
                controls
                muted
                autoPlay
                poster="/images/home.png"
                src="/videos/Software_Demo.mp4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Overlay Modal */}
      {enlargedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4" 
          onClick={closeEnlargedVideo}
          style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999}}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button 
              onClick={closeEnlargedVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-3xl"
              style={{color: 'white', fontSize: '24px'}}
            >
              ✕
            </button>
            <LazyVideo
              className="w-full rounded-2xl shadow-2xl"
              autoPlay 
              muted 
              loop
              controls
              onClick={(e) => e.stopPropagation()}
              style={{maxHeight: '80vh'}}
              src={enlargedVideo}
            />
          </div>
        </div>
      )}
    </section>
  );
}