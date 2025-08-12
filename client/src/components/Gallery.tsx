import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Generate images dynamically from actual gallery folders
const generateGalleryImages = () => {
  const images = [];
  let id = 1;
  
  // Development images (8 images)
  for (let i = 1; i <= 8; i++) {
    images.push({
      id: id++,
      src: `/images/development/${i}.jpg`,
      alt: `Development process ${i}`,
      title: `Development Phase ${i}`,
      description: "Documentation of our development and transformation process.",
      category: "development"
    });
  }
  
  // Engineering images (4 images)
  for (let i = 1; i <= 4; i++) {
    images.push({
      id: id++,
      src: `/images/engineering/${i}.jpg`,
      alt: `Engineering work ${i}`,
      title: `Engineering Solution ${i}`,
      description: "Our engineering team working on innovative solutions.",
      category: "engineering"
    });
  }
  
  // Water Test images (13 images)
  for (let i = 1; i <= 13; i++) {
    images.push({
      id: id++,
      src: `/images/waterTest/${i}.jpg`,
      alt: `Water test ${i}`,
      title: `Water Testing ${i}`,
      description: "Real-world water testing and validation of our devices.",
      category: "waterTest"
    });
  }
  
  return images;
};

const galleryImages = generateGalleryImages();

const categories = [
  { id: "all", name: "All", icon: "fas fa-th" },
  { id: "development", name: "Development", icon: "fas fa-cogs" },
  { id: "engineering", name: "Engineering", icon: "fas fa-tools" },
  { id: "waterTest", name: "Water Test", icon: "fas fa-water" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  // Reset showAll when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowAll(false);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-deep-marine mb-6 tracking-tight">
            Innovation Gallery
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our cutting-edge autonomous water mobility solutions, from laboratory prototypes to real-world deployments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? "!bg-deep-marine !text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-800 hover:!bg-deep-marine hover:!text-white border-2 border-gray-300 hover:border-deep-marine shadow-md"
              }`}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-marine/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-heading font-bold text-white text-lg mb-1 truncate">
                      {image.title}
                    </h4>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-tech-blue rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand text-white"></i>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-heading font-semibold text-deep-marine mb-1 truncate">
                  {image.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && filteredImages.length > 4 && (
          <div className="text-center mb-16">
            <Button 
              onClick={() => setShowAll(true)}
              className="!bg-deep-marine !text-white px-8 py-3 rounded-xl font-semibold hover:!bg-gray-800 transition-all duration-300 shadow-xl border-2 border-deep-marine"
            >
              <i className="fas fa-plus mr-2"></i>
              Load More ({filteredImages.length - 4} more images)
            </Button>
          </div>
        )}


      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-2xl font-heading font-bold text-deep-marine">
                  {selectedImage.title}
                </DialogTitle>
              </DialogHeader>
              <div className="p-6">
                <div className="relative mb-6">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}