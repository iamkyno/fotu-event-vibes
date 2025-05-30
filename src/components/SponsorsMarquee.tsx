
import React from 'react';

const SponsorsMarquee = () => {
  // Sample sponsor data - you can replace these with actual sponsor logos
  const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: '/uploads/placeholder.svg' },
    { id: 2, name: 'Sponsor 2', logo: '/uploads/placeholder.svg' },
    { id: 3, name: 'Sponsor 3', logo: '/uploads/placeholder.svg' },
    { id: 4, name: 'Sponsor 4', logo: '/uploads/placeholder.svg' },
    { id: 5, name: 'Sponsor 5', logo: '/uploads/placeholder.svg' },
    { id: 6, name: 'Sponsor 6', logo: '/uploads/placeholder.svg' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          Our Sponsors
        </h2>
        <p className="text-gray-600 text-center">
          Proudly supported by amazing partners
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set of sponsors */}
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor) => (
            <div
              key={`duplicate-${sponsor.id}`}
              className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsMarquee;
