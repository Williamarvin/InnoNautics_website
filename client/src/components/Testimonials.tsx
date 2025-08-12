import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Huntington Beach, CA",
    avatar: "SM",
    review: "My OceanRider Pro has completely transformed my surfing. The responsiveness and speed are incredible. I've never felt more connected to the wave.",
    color: "bg-ocean-blue"
  },
  {
    name: "Mike Johnson",
    location: "Santa Monica, CA",
    avatar: "MJ",
    review: "As a beginner, the Wave Cruiser gave me the confidence I needed. It's stable, forgiving, and absolutely beautiful. Couldn't ask for more!",
    color: "bg-wave-teal"
  },
  {
    name: "Lisa Thompson",
    location: "Pipeline, HI",
    avatar: "LT",
    review: "I've been shaping for 20 years, and OceanRider boards are exceptional. The attention to detail and quality of craftsmanship is unmatched.",
    color: "bg-coral"
  }
];

const trustStats = [
  { value: "4.9/5", label: "Average Rating" },
  { value: "2.1K", label: "Reviews" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "5★", label: "Shop Rating" }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">
            What Riders Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied surfers who trust OceanRider for their next session
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-deep-navy mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
