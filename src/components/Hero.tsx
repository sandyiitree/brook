import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        // Create a parallax effect by moving the background slower than scroll
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<section 
  id="home"
  ref={heroRef}
  className="relative h-screen flex items-center 
             bg-no-repeat bg-center 
             md:bg-contain bg-contain
             bg-[url('https://waitwhiz.s3.ap-south-1.amazonaws.com/digital/WhatsApp+Image+2025-08-13+at+13.03.04.jpg')] 
             md:bg-[url('https://waitwhiz.s3.ap-south-1.amazonaws.com/digital/brook+square+banner+laptop+(1200+x+500+px).jpg')]"
>


      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          
         
          
          
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;