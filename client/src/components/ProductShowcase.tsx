import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const productCategories = [
  {
    title: "Performance Shortboards",
    description: "High-performance boards designed for experienced surfers. Perfect for critical waves and progressive surfing.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    specs: {
      length: "5'8\" - 6'6\"",
      volume: "26L - 35L",
      skillLevel: "Advanced",
      waveSize: "2-12ft"
    },
    badge: "Popular"
  },
  {
    title: "All-Around Fun Boards",
    description: "Versatile boards perfect for intermediate surfers. Great stability and wave-catching ability for endless fun.",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    specs: {
      length: "7'0\" - 8'6\"",
      volume: "45L - 55L",
      skillLevel: "Intermediate",
      waveSize: "1-8ft"
    }
  },
  {
    title: "Beginner Longboards",
    description: "Stable, forgiving boards perfect for learning. Extra volume and length provide excellent stability and paddle power.",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    specs: {
      length: "8'6\" - 10'0\"",
      volume: "55L - 75L",
      skillLevel: "Beginner",
      waveSize: "1-6ft"
    }
  }
];

const featuredProducts = [
  {
    name: "Ocean Rider Pro",
    type: "6'2\" Performance Shortboard",
    price: 849,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Wave Cruiser",
    type: "9'0\" Longboard Classic",
    price: 695,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Reef Break",
    type: "7'6\" Fun Board",
    price: 749,
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    name: "Grom Special",
    type: "6'8\" Youth Board",
    price: 545,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-navy mb-4">
            Our Surfboard Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly longboards to high-performance shortboards, find your perfect wave companion.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-2xl text-deep-navy">{category.title}</h3>
                  {category.badge && (
                    <span className="bg-coral text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div><strong>Length:</strong> {category.specs.length}</div>
                  <div><strong>Volume:</strong> {category.specs.volume}</div>
                  <div><strong>Skill Level:</strong> {category.specs.skillLevel}</div>
                  <div><strong>Wave Size:</strong> {category.specs.waveSize}</div>
                </div>
                <Button className="w-full bg-ocean-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                  View Models
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-deep-navy mb-4">Featured Models</h3>
          <p className="text-lg text-gray-600">Hand-picked boards representing the best of our craftsmanship</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h4 className="font-heading font-semibold text-lg mb-2">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{product.type}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-coral text-xl">${product.price}</span>
                  <Button 
                    size="sm"
                    className="bg-ocean-blue text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                  >
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
