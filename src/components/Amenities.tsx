import React, { useRef, useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface AmenityItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Amenities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (amenitiesRef.current) {
      amenitiesRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const checkScrollPosition = () => {
    if (amenitiesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = amenitiesRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = amenitiesRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const amenities: AmenityItem[] = [
    {
      title: "Clubhouse",
      description: "A central space to relax, socialize, and host gatherings.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-2m-4 0v-6H9v6m-4 0a2 2 0 01-2-2V10z" />
        </svg>
      )
    },
    {
      title: "Swimming Pool",
      description: "Refresh and unwind in a crystal-clear pool.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15s1 0 2-.5 2-.5 3 0 2 .5 3 0 2-.5 3 0 2 .5 3 0 2-.5 3 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" />
        </svg>
      )
    },
    {
      title: "Table Tennis",
      description: "Indoor fun with a fast-paced table tennis zone.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14 14l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Pool Table",
      description: "Chill and play a game of billiards with friends.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="8" cy="8" r="1.5" />
          <circle cx="16" cy="8" r="1.5" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      )
    },
    {
      title: "Gymnasium",
      description: "State-of-the-art fitness center to keep you healthy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 3v3m12-3v3M3 9h18M6 21v-6m12 6v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Banquet Hall",
      description: "Host grand celebrations in an elegant setting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 20h18M4 4h16v12H4z" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Cricket Turf",
      description: "Enjoy a match on our well-maintained cricket turf.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 20l8-16m0 16L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Basketball Court",
      description: "Full-size court for casual games and serious play.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Jogging Track",
      description: "A dedicated path to keep your fitness journey on track.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 17h7m-7 0l-4-8m4 8l-5-2m5 2l1.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Open Gym",
      description: "Work out in the fresh air with open-air equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 6v12M18 6v12M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Yoga Area",
      description: "Peaceful space for yoga and mindfulness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6v3m0 0c-4 0-4 6 0 6m0-6c4 0 4 6 0 6M5 19h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Kids' Play Area",
      description: "Safe and fun zone designed especially for children.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="6" r="2" />
          <path d="M4 20l4-8m0 0l4 8m-4-8l-4 8M20 20l-4-8m0 0l-4 8m4-8l4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const specifications = [
    { label: "Structure", value: "RCC framed structure with shear walls" },
    { label: "Walls", value: "Brick/Concrete block masonry" },
    { label: "Flooring", value: "Imported marble in living/dining and bedrooms" },
    { label: "Doors", value: "Solid core flush doors with premium hardware" },
    { label: "Windows", value: "Double glazed UPVC/aluminum windows" },
    { label: "Kitchen", value: "Modular kitchen with premium appliances" },
    { label: "Bathroom", value: "Designer tiles and premium fittings" },
    { label: "Electrical", value: "Concealed copper wiring with smart controls" }
  ];

  return (
    <section id="amenities" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 shadow-lg" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lifestyle <span className="font-extrabold" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Amenities</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 rounded-full shadow-lg" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Experience a life of luxury with our exclusive world-class amenities designed to elevate your everyday living and create unforgettable moments.
          </p>
        </div>

        {/* Amenities Grid with Enhanced Scroll Indicators */}
        <div className="relative mb-20">
          {/* Left Arrow */}
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 ${showLeftArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            <button 
              onClick={scrollLeft}
              className="group bg-white p-4 rounded-full shadow-xl border border-gray-200 hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Right Arrow */}
          <div className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 transition-all duration-300 ${showRightArrow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
            <button 
              onClick={scrollRight}
              className="group bg-white p-4 rounded-full shadow-xl border border-gray-200 hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-amber-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scrollable Container */}
          <div 
            ref={amenitiesRef} 
            className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {amenities.map((item, index) => (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  minWidth: '280px', 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', opacity: 0.2}}></div>
                  <div className="relative p-4 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="w-0 h-0.5 mt-4 group-hover:w-full transition-all duration-500" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}></div>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(amenities.length / 3) }, (_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-amber-400 cursor-pointer"
              ></div>
            ))}
          </div>
        </div>

        {/* Call to action */}

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Amenities;