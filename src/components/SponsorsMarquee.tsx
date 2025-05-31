
import React from 'react';

const SponsorsMarquee = () => {
  // Actual sponsor data with logos
  const sponsors = [
    { id: 1, name: 'Castle Double Malt', logo: '/lovable-uploads/5daa9102-8c84-4a7b-a1e4-ee68f01ba7b1.png' },
    { id: 2, name: 'Flying Fish', logo: '/lovable-uploads/00be16c5-0a18-4cb4-a365-75866d464f3e.png' },
    { id: 3, name: 'Savanna', logo: '/lovable-uploads/061009fa-1194-4bca-8ee8-faa7bf10c90e.png' },
    { id: 4, name: 'Heineken', logo: '/lovable-uploads/e6b3800e-fda0-4bcf-96eb-9912d7749620.png' },
    { id: 5, name: 'Jagermeister', logo: '/lovable-uploads/e6534d4e-8410-43f6-88b8-058e2df5bcf8.png' },
    { id: 6, name: 'Johnnie Walker Blonde', logo: '/lovable-uploads/7d4b4e0f-3424-441f-8b7e-abdcb6f9088d.png' },
    { id: 7, name: 'Pilot', logo: '/lovable-uploads/ed8cae4f-74e8-4415-9a63-dfb97a8652b4.png' },
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">
          Sponsors
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
              className="flex-shrink-0 mx-8 w-70 h-70 flex items-center justify-center"
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
              className="flex-shrink-0 mx-8 w-70 h-23 flex items-center justify-center"
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
