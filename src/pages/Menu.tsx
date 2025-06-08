
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const vegSidesRef = useRef<HTMLDivElement>(null);
  const sidesRef = useRef<HTMLDivElement>(null);
  const mainsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle scroll to sections based on URL
    const hash = location.hash;
    if (hash) {
      const targetSection = hash.substring(1); // Remove the # character
      if (targetSection === "veg-sides" && vegSidesRef.current) {
        vegSidesRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (targetSection === "sides" && sidesRef.current) {
        sidesRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (targetSection === "mains" && mainsRef.current) {
        mainsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Our <span className="text-kamalo-red">Menu</span>
        </h1>

        <div className="container mx-auto">
          {/* Quick Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            <a href="#veg-sides" className="px-4 py-2 bg-kamalo-red text-white rounded-md hover:bg-red-700 transition-colors">
              Veg Sides
            </a>
            <a href="#sides" className="px-4 py-2 bg-kamalo-red text-white rounded-md hover:bg-red-700 transition-colors">
              Sides
            </a>
            <a href="#mains" className="px-4 py-2 bg-kamalo-red text-white rounded-md hover:bg-red-700 transition-colors">
              Mains & Specials
            </a>
          </div>

          {/* Vegetable Sides Section */}
          <section id="veg-sides" ref={vegSidesRef} className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <span className="mr-2">🥬</span> Veg Sides
            </h2>
            <p className="text-gray-400 mb-6">Fresh, traditional vegetable sides</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Spinach</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A combination of fresh vegetables to bring maximum flavour to the dish.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ndunda (Lenga Lenga)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Traditional vegetables cultivated in South African soil.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Kasava Leaves</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Tender kasava leaves with a rich, savoury flavour — a go-to traditional favourite.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ngai Ngai (Oseille)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A delightfully sour leafy veg that complements almost any meal.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Matembele</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Nutritious sweet potato leaves.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Sides Section */}
          <section id="sides" ref={sidesRef} className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <span className="mr-2">🍚</span> Sides
            </h2>
            <p className="text-gray-400 mb-6">Perfect accompaniments to any meal</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Portion Pap</h3>
                  <p className="text-sm text-gray-400 mb-2">R 13.50</p>
                  <p className="text-sm text-gray-300">
                    A staple in every traditional African home — perfect with any dish.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Shikwanga (Sour Pap)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 45.00</p>
                  <p className="text-sm text-gray-300">
                    Fermented cassava pap — enjoy it with any main meal.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Portion Rice</h3>
                  <p className="text-sm text-gray-400 mb-2">R 34.00</p>
                  <p className="text-sm text-gray-300">
                    Fried rice — a favourite side to pair with meats, beans or leafy greens.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Mains & Daily Specials */}
          <section id="mains" ref={mainsRef} className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold mb-2 flex items-center">
              <span className="mr-2">🍖</span> Mains & Daily Specials
            </h2>
            <p className="text-gray-400 mb-6">Some dishes may only be available on certain days. Check availability when ordering.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Kapenta</h3>
                  <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                  <p className="text-sm text-gray-300">
                    Cooked in light tomato sauce. Comes with pap and a veg side.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">Ngolo (Cat Fish)</h3>
                    <Badge className="bg-kamalo-gold">Popular</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                  <p className="text-sm text-gray-300">
                    Simmered in green pepper sauce. Served with pap and veg of choice.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Beef Stew (355g)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 133.65</p>
                  <p className="text-sm text-gray-300">
                    Beef in a light tomato and brinjal sauce. Comes with pap or rice and veg.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Grilled Thomson</h3>
                  <p className="text-sm text-gray-400 mb-2">R 170.00</p>
                  <p className="text-sm text-gray-300">
                    Seasoned grilled fish. Served with pap or rice and traditional veg.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Fried Thomson</h3>
                  <p className="text-sm text-gray-400 mb-2">R 170.00</p>
                  <p className="text-sm text-gray-300">
                    Crispy, well-seasoned fried fish. Served with pap or rice and veg.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Grilled Pork (380g)</h3>
                  <p className="text-sm text-gray-400 mb-2">R 178.00</p>
                  <p className="text-sm text-gray-300">
                    Juicy grilled pork chops. Comes with pap or rice and traditional veg.
                  </p>
                </div>
              </Card>

              <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
                <div>
                  <h3 className="text-lg font-medium mb-2">Grilled Chicken Quarter Leg</h3>
                  <p className="text-sm text-gray-400 mb-2">R 155.00</p>
                  <p className="text-sm text-gray-300">
                    Tender grilled leg quarter. Served with pap or rice and veg.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
