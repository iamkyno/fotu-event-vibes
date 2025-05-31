import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Ticket, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import EventPopup from '@/components/EventPopup';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/scrollToTop';
const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 4);

  // Event popup configuration - this would come from your backend
  const eventPopupConfig = {
    isEnabled: true,
    // Toggle this in your backend
    eventData: {
      title: "F.O.T.U 2025",
      date: "5 July 2025",
      venue: "The Werehouse",
      location: "Durban",
      description: "Join us for an unforgettable night of music and creativity. Pushing Passion With Purpose."
    }
  };

  // Current active show
  const currentShow = {
    date: '5 July 2025',
    location: 'Durban',
    venue: 'The Werehouse'
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredProducts.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };
  const handleTicketPurchase = () => {
    const message = "Hi! I'm interested in purchasing tickets for the upcoming F.O.T.U event. Please send me more details.";
    const whatsappUrl = `https://www.webtickets.co.za/v2/Event.aspx?itemid=1554659074`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="min-h-screen bg-white">
      <Navigation />
      <EventPopup {...eventPopupConfig} />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/uploads/3c4d7105-4957-413f-afe9-d3803057dd4d.png')`
      }} />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">          
          <img src="/uploads/FOTU-Logo.webp" alt="DJ setup" className="max-w-sm mx-auto hover:scale-102 transition-transform duration-300 shadow-lg object-fill" />
          
          <p className="text-2xl md:text-3xl text-yellow-400 mb-4 font-bold animate-fade-in delay-300">
            Friends of the Unknown
          </p>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
          An immersive event centered around anchoring the next generation of creatives & DJ/producers into the spotlight.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button onClick={handleTicketPurchase} className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
              <Ticket className="w-5 h-5 mr-2" />
              Get Tickets
            </Button>
            
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300">
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About F.O.T.U
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Thami The Unknown, formally known as Thami Nyawo, is a professional DJ/Producer. When he is not gigging, he also plans and coordinates events under his company FOTU PTY LTD.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                The FOTU brand as an event has seen incredible growth in the last couple of years. From what started as an event at the backyard of Amsterdam bar to now being a stand-alone independent event working with world-renowned brands.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We've hosted international superstars like Da Capo, Enoo Napa, Karyendasoul, Que DJ, Kususa & many more.
              </p>
              
              <Link to="/about">
                <Button className="bg-gradient-to-r mt-6 from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              
              <img src="/uploads/c44b8635-f9e8-4729-bc63-dfaadcfd0e0c.png" alt="DJ setup" className="rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg object-fill" />
            </div>
          </div>
        </div>
      </section>

      {/* Merch Slider Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Official Merch
              </h2>
              <p className="text-gray-600 text-lg">
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
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * (100 / 3)}%)`
            }}>
                {featuredProducts.concat(featuredProducts).map((product, index) => <div key={`${product.id}-${index}`} className="w-full md:w-1/3 flex-shrink-0 px-2">
                    <ProductCard product={product} onPurchase={() => {}} />
                  </div>)}
              </div>
            </div>
            
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-300 shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="flex justify-center space-x-2 mt-6">
              {featuredProducts.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-yellow-400' : 'bg-gray-300'}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Current Show */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Next Show
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-12" />
          
          <Card className="bg-white border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
            <CardContent className="p-8 text-center">
              <Calendar className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentShow.date}</h3>
              <div className="flex items-center justify-center text-gray-600 mb-2 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{currentShow.location}</span>
              </div>
              <p className="text-gray-500 mb-6 text-lg">{currentShow.venue}</p>
              <Button onClick={handleTicketPurchase} className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-3 text-lg">
                Get Tickets Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[ {
            number: '4',
            label: 'Years Running'
          }, {
            number: '2025',
            label: 'Shows Planned'
          }, {
            number: '100%',
            label: 'Energy Level'
          }].map((stat, index) => <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-semibold">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <img src="/uploads/FOTU-Logo.webp" alt="F.O.T.U Logo" className="w-20 h-auto mx-auto mb-4" />
          </div>
          
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Contact: 084 748 2489</p>
            <p className="text-gray-400">Email: enquiries@fotu.co.za</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © {new Date().getFullYear()} F.O.T.U PTY LTD. All rights reserved. "Pushing Passion With Purpose."
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;