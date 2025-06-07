
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen bg-kamalo-dark">
      <div className="absolute inset-0 bg-black/50">
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">
            Welcome to <span className="text-kamalo-red">Kamalo City</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
