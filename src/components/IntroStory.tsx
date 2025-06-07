
import { useEffect, useRef, useState } from "react";

const IntroStory = () => {
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
    <section ref={sectionRef} className="py-20 px-6 bg-black">
      <div className="container mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Welcome to the Heart of <span className="text-kamalo-red">African Culture</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Congolese cuisine and vibrant African culture at Kamalo City. Located in Cape Town's Goodwood area, our restaurant offers traditional flavors, entertainment, and a warm community atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;
