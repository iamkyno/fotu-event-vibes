
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Ticket, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const handleTicketPurchase = () => {
    const message = "Hi! I'm interested in purchasing tickets for the upcoming F.O.T.U event. Please send me more details.";
    const whatsappUrl = `https://wa.me/27847482489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 animate-pulse" />
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/3c4d7105-4957-413f-afe9-d3803057dd4d.png" 
            alt="F.O.T.U Event" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b398b06d-500d-4e2e-bab2-a1f4ed0e96e9.png" 
              alt="F.O.T.U Logo" 
              className="w-32 h-auto mx-auto mb-4 animate-scale-in"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-fade-in">
            F.O.T.U
          </h1>
          
          <p className="text-2xl md:text-3xl text-yellow-400 mb-4 font-bold animate-fade-in delay-300">
            Friends of the Unknown
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            "Pushing Passion With Purpose" - An immersive event centered around anchoring the next generation of creatives & DJ/producers into the spotlight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button 
              onClick={handleTicketPurchase}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Get Tickets
            </Button>
            
            <Button 
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Recap
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About F.O.T.U
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Thami Nyawo, formally known as Thami the Unknown, is a professional DJ/Producer. When he is not gigging, he also plans and coordinates events under his company FOTU PTY LTD.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                The FOTU brand as an event has seen incredible growth in the last couple of years. From what started as an event at the backyard of Amsterdam bar to now being a stand-alone independent event working with world-renowned brands.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                We've hosted international superstars like Da Capo, Enoo Napa, Karyendasoul, Que DJ, Kususa & many more.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/5b229133-3069-4d1e-968b-02f2dce6df72.png" 
                alt="Event crowd" 
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/c44b8635-f9e8-4729-bc63-dfaadcfd0e0c.png" 
                alt="DJ setup" 
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Merch Slider Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Official Merch
              </h2>
              <p className="text-gray-400 text-lg">
                Rep the F.O.T.U brand with our exclusive merchandise
              </p>
            </div>
            <Link to="/merch">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                View All
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProducts.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-2">
                    <ProductCard 
                      product={product} 
                      onPurchase={() => {}}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center space-x-2 mt-6">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Upcoming Shows 2025
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: '2 August 2025', location: 'Durban', venue: 'The BoneShed' },
              { date: '6 September 2025', location: 'Johannesburg', venue: 'TBA' },
              { date: '1 November 2025', location: 'Durban', venue: 'The BoneShed' },
            ].map((event, index) => (
              <Card key={index} className="bg-gray-900/50 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{event.date}</h3>
                  <div className="flex items-center justify-center text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{event.venue}</p>
                  <Button 
                    onClick={handleTicketPurchase}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold w-full"
                  >
                    Get Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400/10 to-orange-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '350-500', label: 'Event Capacity' },
              { number: '4', label: 'Years Running' },
              { number: '2025', label: 'Shows Planned' },
              { number: '100%', label: 'Energy Level' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/b398b06d-500d-4e2e-bab2-a1f4ed0e96e9.png" 
              alt="F.O.T.U Logo" 
              className="w-16 h-auto mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              F.O.T.U
            </h3>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Contact: 084 748 2489</p>
            <p className="text-gray-400">Email: Thaminyawo11@gmail.com</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 F.O.T.U PTY LTD. All rights reserved. "Pushing Passion With Purpose."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
