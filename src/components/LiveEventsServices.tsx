
import { useEffect, useRef, useState } from "react";
import { Music, Scissors, Wind, Users, Calendar, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const LiveEventsServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "hookah",
      icon: Wind,
      title: "Hookah Lounge Vibes — Daily from 6 PM",
      description: "Chill with friends in our ambient indoor lounge or spark up in the outdoor patio. R150 per session with mint, apple, and fruity blends always on deck. No ID needed — just 18+ and ready to vibe.",
      highlights: "🎶 Live DJs. 🪩 Low lights. 🍹 Drinks flowing.",
      link: "/services/hookah-lounge"
    },
    {
      id: "barber",
      icon: Scissors,
      title: "Get Faded, Stay Fresh – In-House Barbershop",
      description: "Fade, lineup, full cut — all just R60. No bookings needed. Walk in, walk out sharp. And yes, food and drink right after your trim? Always.",
      link: "/services/barber-next-door"
    },
    {
      id: "games",
      icon: Calendar,
      title: "Game Nights Are Coming Soon",
      description: "Think pool, Uno, chess, dominoes — with prizes, drinks, and late-night eats. Kamalo's casual game nights will bring community energy back to Goodwood. Stay tuned.",
      link: "/services/game-nights"
    },
    {
      id: "private-events",
      icon: Users,
      title: "Host Your Next Private Event at Kamalo",
      description: "Birthdays, pop-ups, or just an all-out party — Kamalo is available for full venue hire. Seats up to 80 guests, sound system included, and outside décor welcome. Let's make your next event unforgettable.",
      link: "/services/private-bookings"
    },
    {
      id: "live-music",
      icon: Music,
      title: "Live Music & Dancefloor Fridays",
      description: "Every weekend, the beats drop and the vibe lifts. From old-school Congolese to Afro throwbacks, we're where Goodwood comes to move. Reserve your VIP table early — they go fast.",
      link: "/services/live-entertainment"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More Than Just <span className="text-kamalo-red">Dining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete entertainment and service experience that makes Kamalo City a destination, not just a meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className={`bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-all duration-500 block ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <IconComponent className="w-12 h-12 text-kamalo-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-3">{service.description}</p>
                {service.highlights && (
                  <p className="text-kamalo-red text-sm">{service.highlights}</p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveEventsServices;
