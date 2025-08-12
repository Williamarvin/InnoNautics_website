import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LazyVideo } from "@/components/ui/LazyVideo";

const objectives = [
  {
    title: "Deliver users to designated locations (e.g. dive sites) with minimal exertion and in the shortest time",
    image: "/images/objective_image1.png",
    align: "left"
  },
  {
    title: "Replace boats that operate near users especially in wavy conditions",
    image: "/images/objective_image2.png",
    align: "right"
  }
];

const interviews = [
  {
    quote: "When I finish diving, waiting for the pickup boat takes over 20min.",
    author: "Experienced diver",
    image: "/images/diver.jpg",
    icon: "fas fa-swimmer"
  },
  {
    quote: "Fireboats cannot enter shallow water and not every boat has speedboats or jetskis.",
    author: "Fire service department",
    image: "/images/firefighter.jpg",
    icon: "fas fa-fire"
  },
  {
    quote: "It's tiring to paddle out to the site before you get to surf.",
    author: "Experienced surfer",
    image: "/images/surfer.jpg",
    icon: "fas fa-water"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-deep-marine mb-6 tracking-tight">
            What We Do
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Innovative autonomous solutions for water sports and aquatic activities.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20 text-center">
          <div className="relative max-w-4xl mx-auto">
            <LazyVideo
              className="w-full rounded-2xl shadow-2xl"
              controls
              muted
              autoPlay
              poster="/images/home.png"
              src="/videos/aboutUs.mp4"
            />
          </div>
        </div>

        {/* Objectives Section - Modern Cards Design */}
        <div id="objectives" className="mb-20">
          <div className="text-center mb-20">
            <h3 className="font-heading font-bold text-5xl md:text-6xl text-deep-marine mb-8 tracking-tight">
              Our Mission
            </h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionizing aquatic transportation with innovative autonomous solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={objective.image} 
                      alt={`Mission ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-tech-blue/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex-1 h-1 bg-gradient-to-r from-tech-blue to-electric-cyan rounded-full"></div>
                      <div className="w-3 h-3 bg-tech-blue rounded-full mx-3"></div>
                      <div className="flex-1 h-1 bg-gradient-to-r from-electric-cyan to-tech-blue rounded-full"></div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed font-medium text-center">
                      {objective.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div id="team" className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-deep-marine mb-4">
              Our Team
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team includes mechanical, software, and electronics engineers, with a track record of winning international competitions in this field.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/william.jpg" 
                  alt="William Arvin Fisillo" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-deep-marine mb-1">William Arvin Fisillo</h4>
              <p className="text-gray-600 text-sm">Software</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/howard.jpg" 
                  alt="Howard Ho Yin Lee" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-deep-marine mb-1">Howard Ho Yin Lee</h4>
              <p className="text-gray-600 text-sm">Electronic</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/images/echo.jpg" 
                  alt="Echo Chan Ho" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <h4 className="font-heading font-semibold text-lg text-deep-marine mb-1">Echo Chan Ho</h4>
              <p className="text-gray-600 text-sm">Mechanical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
