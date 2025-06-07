
import { Gamepad2, Users, Trophy, Clock, Calendar, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GameNights = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Coming Soon Banner */}
          <div className="text-center mb-8">
            <div className="inline-block bg-kamalo-red text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
              🎲 COMING SOON
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-kamalo-red">Game Nights</span> at Kamalo City
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get ready for exciting gaming tournaments and casual game nights. Pool, Uno, chess, dominoes — with prizes, drinks, and late-night eats. Kamalo's game nights will bring community energy back to Goodwood.
            </p>
          </div>

          {/* What's Coming */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Game Night Setup"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">What's Coming to Game Night</h2>
              <p className="text-gray-300 mb-6">
                We're setting up the ultimate gaming experience with tournaments, casual play, and community competitions. Food, drinks, and good vibes included.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-6 h-6 text-kamalo-red" />
                  <span>Pool Tables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Card Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-kamalo-red" />
                  <span>Tournaments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Prizes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Games We'll Feature */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Games We'll Feature</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gamepad2 className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Pool</h3>
                <p className="text-gray-300">Professional tables with tournaments</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Uno</h3>
                <p className="text-gray-300">Classic card game competitions</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Chess</h3>
                <p className="text-gray-300">Strategic battles and tournaments</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Star className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Dominoes</h3>
                <p className="text-gray-300">Traditional games with prizes</p>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="text-center bg-black/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Stay Updated on <span className="text-kamalo-red">Game Nights</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Join our WhatsApp group to be the first to know when Game Nights launch, plus get updates on tournaments and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://chat.whatsapp.com/D8ZGSstifLe0eWYs3GJ5Im"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-semibold"
              >
                Join WhatsApp Group
              </a>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-full hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameNights;
