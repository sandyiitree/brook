import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import locationImage from '../assets/fusion-location.png';
import {
  GraduationCap,
  Film,
  Stethoscope,
  TrainTrack,
  Route,
  Plane
} from 'lucide-react';

const locationInfo = [
  {
    icon: GraduationCap,
    title: 'Educational Hubs',
    description: 'G.D. Goenka School, Jaipuria School, Ramagya School, IGNOU Centre & more'
  },
  {
    icon: Film,
    title: 'Entertainment',
    description: 'U:Fairia, Gaur City Mall, Upcoming Film City (Sector-21, YEIDA)'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Numed Hospital, Yatharth Hospital, Kailash Hospital, Fortis Hospital & more'
  },
  {
    icon: TrainTrack,
    title: 'Metro Connectivity',
    description: 'Just 600 m away from proposed Sector 12 Metro Station (Aqua Line)'
  },
  {
    icon: Route,
    title: 'Road Connectivity',
    description: 'Noida-Gr. Noida West Link Road, Close proximity to NH-9 (NH-24), Yamuna Expressway'
  },
  {
    icon: Plane,
    title: 'Airports',
    description: 'Indira Gandhi International Airport (Delhi), Jewar International Airport'
  }
];

const Location: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Location{' '}
            <span
              className="font-bold"
              style={{
                background:
                  'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Where Exclusivity Meets Accessibility
            </span>
          </h2>
          <div className="w-20 h-1 bg-[#c46a32] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Excellent location, bang in the heart of Sector 12 of Greater Noida West with superb connectivity to Delhi, Ghaziabad and other parts of NCR. The project is within easy reach of government institutions, reputed educational institutions, state-of-the-art healthcare, multiplexes and malls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Image */}
          <div
            className={`relative rounded-lg overflow-hidden transition-opacity duration-1000 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={locationImage} // Assuming it's placed in public or served statically
              alt="Project Location Map"
              className="w-full h-auto object-contain border rounded-lg shadow"
            />
          </div>

          {/* Location Highlights */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                >
                  <item.icon className="text-yellow-600 mb-3" size={36} />
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
