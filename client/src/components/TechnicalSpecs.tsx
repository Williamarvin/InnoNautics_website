const materials = [
  {
    icon: "fas fa-tree",
    title: "Premium EPS Core",
    description: "Lightweight, responsive foam core provides exceptional buoyancy and performance.",
    color: "bg-ocean-blue"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Epoxy Resin System",
    description: "Superior strength-to-weight ratio with enhanced durability and impact resistance.",
    color: "bg-wave-teal"
  },
  {
    icon: "fas fa-cut",
    title: "Hand-Shaped Rails",
    description: "Each board is meticulously shaped by our master craftsmen for optimal performance.",
    color: "bg-coral"
  }
];

const performance = [
  {
    icon: "fas fa-tachometer-alt",
    title: "Speed & Acceleration",
    description: "Hydrodynamic design principles ensure maximum speed generation and wave catching ability.",
    color: "bg-ocean-blue"
  },
  {
    icon: "fas fa-balance-scale",
    title: "Stability & Control",
    description: "Carefully calculated volume distribution provides the perfect balance of stability and maneuverability.",
    color: "bg-wave-teal"
  },
  {
    icon: "fas fa-water",
    title: "Wave Connection",
    description: "Responsive flex patterns and rocker profiles create an intuitive connection with the wave.",
    color: "bg-coral"
  }
];

export default function TechnicalSpecs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">
            Craftsmanship & Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every OceanRider board combines traditional shaping techniques with modern materials and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Surfboard construction workshop" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="font-heading font-bold text-3xl text-deep-navy mb-6">Materials & Construction</h3>
            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${material.color} rounded-full flex items-center justify-center`}>
                    <i className={`${material.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{material.title}</h4>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Characteristics */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-3xl text-center text-deep-navy mb-12">Performance Characteristics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {performance.map((perf, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${perf.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${perf.icon} text-white text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-xl mb-3">{perf.title}</h4>
                <p className="text-gray-600">{perf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
