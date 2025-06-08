
import { Card } from "@/components/ui/card";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface GalleryImage {
  id: number;
  category: "restaurant" | "barbershop" | "perfumes" | "food-drinks" | "events" | "hookah" | "private-events" | "game-nights";
  url: string;
  alt: string;
}

const Gallery = () => {
  const [images] = useState<GalleryImage[]>([
    // Restaurant images
    {
      id: 1,
      category: "restaurant",
      url: "/lovable-uploads/50ec3f05-adf6-4898-b1ff-af96cbdd2693.png",
      alt: "Restaurant Booth Seating Area",
    },
    {
      id: 2,
      category: "restaurant",
      url: "/lovable-uploads/114bb11f-b243-4b83-a56f-d7c3c1a697f4.png",
      alt: "Restaurant Main Dining Area",
    },
    {
      id: 3,
      category: "restaurant",
      url: "/lovable-uploads/a887ebf3-f8dd-4bfe-a106-1d39d95c4fca.png",
      alt: "Restaurant Booth and Bar Area",
    },
    {
      id: 4,
      category: "restaurant",
      url: "/lovable-uploads/73fe2d00-a4e1-4f8b-a2a2-6cc18672976b.png",
      alt: "Restaurant Lounge Area with TV",
    },
    // Barbershop images
    {
      id: 9,
      category: "barbershop",
      url: "/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png",
      alt: "Barbershop Interior",
    },
    {
      id: 10,
      category: "barbershop",
      url: "/lovable-uploads/c5fbfe29-4798-4b3f-8f4a-026e7de67497.png",
      alt: "Barbershop Products",
    },
    // Perfumes & Shisha images
    {
      id: 11,
      category: "perfumes",
      url: "/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png",
      alt: "Perfume Display",
    },
    {
      id: 12,
      category: "hookah",
      url: "/lovable-uploads/ffad6fca-7d8f-47fc-9f1a-fd9afbc2885b.png",
      alt: "Shisha Collection",
    },
    {
      id: 13,
      category: "hookah",
      url: "/lovable-uploads/ad681f73-a6fa-48ca-90ac-12c051f1ba0a.png",
      alt: "Shisha Display",
    },
    // Food & Drinks placeholders
    {
      id: 14,
      category: "food-drinks",
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
      alt: "Grilled Pork Dish",
    },
    {
      id: 15,
      category: "food-drinks",
      url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      alt: "African Cuisine Spread",
    },
    // Events placeholders
    {
      id: 16,
      category: "events",
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
      alt: "Live Music Event",
    },
    {
      id: 17,
      category: "private-events",
      url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=300&fit=crop",
      alt: "Private Event Setup",
    },
    // Game Nights placeholder
    {
      id: 18,
      category: "game-nights",
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      alt: "Game Night Setup",
    },
  ]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { id: "hookah", label: "Hookah Lounge" },
    { id: "private-events", label: "Private Events" },
    { id: "events", label: "Live Music & Entertainment" },
    { id: "food-drinks", label: "Food & Pre-Orders" },
    { id: "perfumes", label: "Perfumes" },
    { id: "barbershop", label: "Barber Services" },
    { id: "game-nights", label: "Game Nights" },
    { id: null, label: "All Images" },
  ];

  const filteredImages = activeCategory 
    ? images.filter(image => image.category === activeCategory)
    : images;

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Our <span className="text-kamalo-red">Gallery</span>
          </h1>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id || 'all'}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-kamalo-red text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group hover:shadow-lg hover:shadow-kamalo-red/20 transition-all duration-300">
                <div className="relative">
                  <ImageModal
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
