import React from 'react';
import {
  Building2,
  MapPin,
  Medal,
  Users,
  Landmark,
  BadgeIndianRupee,
  Construction,
  Home,
  ShoppingBag,
  Smile
} from 'lucide-react';

const features = [
  { icon: Building2, label: '3 Side Open Corner Plot' },
  { icon: MapPin, label: 'Unique Location' },
  { icon: Medal, label: 'Renowned Developer' },
  { icon: Users, label: 'Renowned Professional' },
  { icon: Landmark, label: 'Unbeatable Amenities' },
  { icon: BadgeIndianRupee, label: 'Upmarket Yet Affordable' }
];

const whyBrook = [
  {
    icon: Construction,
    title: 'Mivan Construction',
    desc: 'Elevating the project with Efficiency and Durability'
  },
  {
    icon: Home,
    title: 'Luxury Clubhouses',
    desc: 'Enhancing project’s Exclusivity & Indulgence, Creating Memories'
  },
  {
    icon: ShoppingBag,
    title: 'Exclusive Plazas',
    desc: 'Touch of Elegance to your daily shopping experience'
  },
  {
    icon: Smile,
    title: 'Peace of Mind',
    desc: 'A seamless move awaits you'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl space-y-20">

        {/* Mission */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Mission</h2>
          <p>
            To strive to exceed our customer’s expectations by delivering supreme quality constructions that stand the test of time – all through timely delivery, complete transparency, and professionalism of the utmost degree.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Vision</h2>
          <p>
            To be a reliable and dependable real estate entity by benchmarking global standards in different types of real-estate products, and new-age constructional concepts.
          </p>
        </div>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          <p>
            To create and deliver palatial residential marvels, we are unwaveringly committed to the highest ethical standards with a zero compromise on quality, and attention to detail. Delivering on our mission with utmost degree of honesty and transparency, we practise fairness in all our actions, and always endeavor to execute a win-win for all involved in the transactions that we do. We consider customers our real assets, and therefore strive to deliver an always-wow experience to them. We always embrace forward thinking and thus create practical and futuristic abodes for our customers.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Value Proposition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div key={index} className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                <item.icon className="mx-auto mb-3 text-yellow-600" size={36} />
                <p className="font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why The Brook & Rivulet */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Why The Brook & Rivulet?</h2>
          <h3 className="text-xl text-yellow-600 mb-4">Where the best of both worlds meet</h3>
          <p className="italic mb-10">
            Beyond the concrete, we offer the gift of tranquility – a home, and a sanctuary
          </p>

          <div className="max-w-3xl mx-auto text-left text-sm space-y-4 mb-12">
            <ul className="space-y-4 list-disc list-inside">
              <li>
                Our projects delivered in past have been delivered before the promised possession dates and that is the biggest win we have achieved. <strong>Despite facing odd of severe Real Estate slump.</strong>
              </li>
              <li>
                As a company policy & legally too, we haven't allowed possession of flats without registry in favour of the client.
              </li>
              <li>
                All land dues including one time lease rent for The Brook & Rivulet being fully paid, you can breathe easy knowing that there won’t be any delays in the delivery process.
              </li>
              <li>
                Where every amenity you can imagine is at your fingertips. From the moment you step inside, you’ll be greeted by stunning design and impeccable attention to detail.
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyBrook.map((item, index) => (
              <div key={index} className="border rounded-lg p-5 text-center shadow-sm hover:shadow-md transition">
                <item.icon className="mx-auto mb-3 text-yellow-600" size={36} />
                <div className="font-semibold text-sm mb-1">{item.title}</div>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
