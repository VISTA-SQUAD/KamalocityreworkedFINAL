
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LiveEntertainment = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Live Music & <span className="text-kamalo-red">Entertainment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the vibrant sounds and rhythms of authentic African music at Kamalo City.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-kamalo-red/50 transition-colors hover:shadow-lg hover:shadow-kamalo-red/20">
            <div className="flex justify-center mb-6">
              <Music className="w-16 h-16 text-kamalo-red" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Live Music Nights</h2>
            <p className="text-gray-300 mb-6">
              Our regular live music sessions feature talented African artists playing a mix of traditional and contemporary sounds. From soulful Congolese rumba to energetic Afrobeats, experience authentic African rhythms in a welcoming atmosphere.
            </p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Live bands every Friday & Saturday
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Traditional African instruments
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Modern fusion performances
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Space for dancing and socializing
              </p>
            </div>
            <Button asChild className="w-full bg-kamalo-red hover:bg-red-600">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-kamalo-red/50 transition-colors hover:shadow-lg hover:shadow-kamalo-red/20">
            <div className="flex justify-center mb-6">
              <CalendarDays className="w-16 h-16 text-kamalo-red" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Special Events</h2>
            <p className="text-gray-300 mb-6">
              Beyond our regular live music, we host special events that celebrate African culture in all its richness. From themed nights to album launches, poetry readings to cultural celebrations, there's always something exciting happening at Kamalo City.
            </p>
            <div className="space-y-2 text-gray-300 mb-6">
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                African cultural celebrations
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Album & EP launch events
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Guest DJ performances
              </p>
              <p className="flex items-center">
                <span className="text-kamalo-red mr-2">•</span>
                Poetry & spoken word nights
              </p>
            </div>
            <Button asChild className="w-full bg-kamalo-red hover:bg-red-600">
              <Link to="/contact">Inquire About Events</Link>
            </Button>
          </div>
        </div>

        <div className="bg-black/30 p-8 rounded-lg max-w-4xl mx-auto border border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Upcoming <span className="text-kamalo-red">Performances</span>
          </h2>
          <div className="space-y-6">
            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">African Jazz Night</h3>
                    <p className="text-gray-400">The Kamalo City Band</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Friday, June 7th</p>
                    <p className="text-gray-400">8:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Saturday Night Rumba</h3>
                    <p className="text-gray-400">DJ Babu & Friends</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Saturday, June 8th</p>
                    <p className="text-gray-400">9:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-black/50 border-gray-800">
              <div className="p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Acoustic Soul Session</h3>
                    <p className="text-gray-400">Featuring Tasha & The Echoes</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-kamalo-red font-medium">Friday, June 14th</p>
                    <p className="text-gray-400">8:30 PM - 11:30 PM</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-kamalo-red hover:bg-red-600">
              <Link to="/reservations">Book a Table for a Show</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LiveEntertainment;
