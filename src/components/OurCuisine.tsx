
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurCuisine = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cuisine" ref={sectionRef} className="py-20 px-6 bg-kamalo-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Afro-Centric <span className="text-kamalo-red">Cuisine That Hits the Soul</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Crafted with heritage, served with love. From Fumbwa with Dry Fish to Grilled Thomson and Makayabu, our menu brings the bold flavors of Central Africa to your plate — hot, hearty, and unforgettable.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Popular dishes:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Grilled Pork (380g)</li>
                <li>• Fried Thomson</li>
                <li>• Beef Stew (355g)</li>
                <li>• Fried Makayabu</li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Hungry already? <Link to="/services/pre-order-food" className="text-kamalo-red hover:text-red-400 underline">Pre-order your meal online</Link> and skip the wait.
            </p>
            
            <Button asChild className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Placeholder for cuisine image */}
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-400 text-xl">[ Cuisine Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCuisine;
