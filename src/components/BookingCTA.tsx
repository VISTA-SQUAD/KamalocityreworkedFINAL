
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone, MessageCircle, Utensils } from "lucide-react";

const BookingCTA = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-kamalo-dark">
      <div className="container mx-auto">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-kamalo-red/20 to-red-900/20 rounded-2xl p-12 border border-kamalo-red/30">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Right Here in <span className="text-kamalo-red">Goodwood</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Conveniently located in the heart of Goodwood with free parking, outdoor chill zones, and secure access. You're always welcome.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to taste authentic African cuisine? Join our community for exclusive updates on events, specials, and announcements. We're here to help with bookings and any questions you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-kamalo-red hover:bg-red-600 text-white px-10 py-6 text-lg rounded-full">
                <Link to="/reservations" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Make a Reservation
                </Link>
              </Button>
              
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg rounded-full">
                <a href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Group
                </a>
              </Button>
              
              <div className="flex items-center gap-2 text-white">
                <span className="text-gray-400">or call:</span>
                <a href="tel:+27731598909" className="flex items-center gap-2 text-kamalo-red hover:text-red-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +27 73 159 8909
                </a>
              </div>
            </div>
            
            <p className="mt-8 text-lg text-gray-300">
              <a 
                href="https://www.ubereats.com/za/store/kamalo-city-restaurant/srnMses4VESmEwzdo4gxrw?srsltid=AfmBOopLMQc596GPp0SY2aTtn6OyX-T8oxDd3GAVhDLwV2uekbbVmYzj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline text-kamalo-red hover:text-red-400 transition-colors"
              >
                Hungry already? Pre-order your meal online and skip the wait.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
