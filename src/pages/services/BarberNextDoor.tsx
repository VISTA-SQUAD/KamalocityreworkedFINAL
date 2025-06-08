import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scissors, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BarberNextDoor = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-kamalo-red">Barber</span> Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional hair cutting and styling services for all hair types at the Kamalo City barber shop.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-kamalo-red/50 transition-colors hover:shadow-lg hover:shadow-kamalo-red/20">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Scissors className="mr-2 text-kamalo-red" />
              Our Barbershop
            </h2>
            <p className="text-gray-300 mb-6">
              Located right next to our restaurant, our skilled barbers specialize in all hair types with particular expertise in African and textured hair. Whether you're looking for a clean fade, a creative design, or beard grooming, our team delivers professional results every time.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-kamalo-red mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Opening Hours</h3>
                  <p className="text-gray-400">Monday - Sunday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-kamalo-red mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Book an Appointment</h3>
                  <p className="text-gray-400">+27 73 159 8909</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-kamalo-red hover:bg-red-600">
              <a href="tel:+27731598909">Call to Book</a>
            </Button>
          </div>

          <div>
            <div className="h-64 md:h-80 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <img 
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png" 
                alt="Barber Station" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c5fbfe29-4798-4b3f-8f4a-026e7de67497.png" 
                  alt="Barber Products" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
                [Barbershop Interior - Placeholder]
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 p-8 rounded-lg max-w-4xl mx-auto mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our <span className="text-kamalo-red">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Haircut</h3>
                <p className="text-gray-400 mb-2">Clean cut with shape-up</p>
                <p className="text-kamalo-red font-semibold">R 120.00</p>
              </div>
            </Card>
            
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Fade</h3>
                <p className="text-gray-400 mb-2">Precision fade with styling</p>
                <p className="text-kamalo-red font-semibold">R 150.00</p>
              </div>
            </Card>
            
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Beard Trim</h3>
                <p className="text-gray-400 mb-2">Shape and line up</p>
                <p className="text-kamalo-red font-semibold">R 80.00</p>
              </div>
            </Card>
            
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Full Service</h3>
                <p className="text-gray-400 mb-2">Haircut, beard, and styling</p>
                <p className="text-kamalo-red font-semibold">R 200.00</p>
              </div>
            </Card>
            
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Design</h3>
                <p className="text-gray-400 mb-2">Custom hair design/art</p>
                <p className="text-kamalo-red font-semibold">From R 180.00</p>
              </div>
            </Card>
            
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Kids Cut</h3>
                <p className="text-gray-400 mb-2">For children under 12</p>
                <p className="text-kamalo-red font-semibold">R 90.00</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Get a Fresh Cut <span className="text-kamalo-red">Today</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Walk-ins are welcome, but appointments are recommended to avoid waiting. Enjoy a complimentary beverage while you wait for your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-kamalo-red hover:bg-red-600">
              <a href="tel:+27731598909">Call for Appointment</a>
            </Button>
            <Button asChild variant="outline" className="border-kamalo-red text-kamalo-red hover:bg-kamalo-red/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BarberNextDoor;
