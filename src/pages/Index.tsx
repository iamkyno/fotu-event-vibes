
import { useState, useEffect } from 'react';
import { Music, Calendar, MapPin, Users, Play, Star, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProductCard from '@/components/ProductCard';
import EventPopup from '@/components/EventPopup';
import SponsorsMarquee from '@/components/SponsorsMarquee';
import TicketButton from '@/components/TicketButton';
import Logo from '@/components/Logo';
import { SHOW_CONFIG, getShowDisplayText } from '@/components/ShowInfo';
import { THEME_CONFIG, getGradientClasses, getTextGradientClasses } from '@/components/ThemeConfig';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/utils/scrollToTop';

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const showInfo = getShowDisplayText();

  const eventPopupConfig = {
    isEnabled: true,
    eventData: {
      title: "F.O.T.U 2025",
      date: SHOW_CONFIG.date,
      venue: SHOW_CONFIG.venue,
      location: SHOW_CONFIG.location,
      description: "Join us for an unforgettable night of music and creativity. Pushing Passion With Purpose."
    }
  };

  const features = [
    {
      icon: Music,
      title: "World-Class DJs",
      description: "International superstars and rising talent on one stage"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Anchoring the next generation of creatives"
    },
    {
      icon: Zap,
      title: "High Energy",
      description: "Unforgettable nights of pure musical energy"
    }
  ];

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      <Navigation />
      <EventPopup {...eventPopupConfig} />
      
      {/* Hero Section - Completely New Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">          
          <div className="mb-8 transform hover:scale-105 transition-all duration-500">
            <Logo size="xl" showText={false} className="mx-auto mb-6" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
            F.O.T.U
          </h1>
          
          <p className="text-2xl md:text-4xl bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-4 font-bold">
            Friends of the Unknown
          </p>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Where passion meets purpose. Experience the future of electronic music.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <TicketButton size="lg" className="px-12 py-4 text-xl rounded-full shadow-2xl" />
            <Button 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-4 text-xl rounded-full shadow-2xl"
            >
              <Play className="w-6 h-6 mr-3" />
              Experience F.O.T.U
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${activeFeature === index ? 'ring-2 ring-pink-400' : ''}`}>
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-100">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                THE F.O.T.U EXPERIENCE
              </div>
              
              <h2 className={`text-5xl md:text-6xl font-black mb-8 ${getTextGradientClasses()}`}>
                Beyond Music
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  From humble beginnings at Amsterdam bar to becoming a powerhouse in the electronic music scene, F.O.T.U has evolved into something extraordinary.
                </p>
                
                <p>
                  We've created a platform where international superstars like Da Capo, Enoo Napa, and Karyendasoul share the stage with emerging talent, fostering a community that pushes boundaries.
                </p>
                
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-black text-pink-600">4+</div>
                    <div className="text-sm text-gray-600">Years Strong</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Artists Featured</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-pink-600">∞</div>
                    <div className="text-sm text-gray-600">Memories Made</div>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <Button className={`${getGradientClasses()} hover:${getGradientClasses(true)} text-white font-bold mt-8 px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Discover Our Story
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-3xl blur-xl transform rotate-6" />
              <img 
                src="/uploads/c44b8635-f9e8-4729-bc63-dfaadcfd0e0c.png" 
                alt="F.O.T.U Experience" 
                className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Event - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NEXT EVENT
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Experience F.O.T.U?
          </h2>
          
          <Card className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-md border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-12 text-center">
              <Calendar className="w-20 h-20 text-pink-400 mx-auto mb-8" />
              <h3 className="text-4xl font-black text-white mb-6">{showInfo.fullDate}</h3>
              <div className="flex items-center justify-center text-pink-200 mb-4 text-xl">
                <MapPin className="w-6 h-6 mr-3" />
                <span>{showInfo.location}</span>
              </div>
              <p className="text-purple-200 mb-8 text-lg">{showInfo.venue}</p>
              <TicketButton size="lg" className="px-12 py-4 text-xl rounded-full shadow-2xl" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors */}
      <SponsorsMarquee />

      {/* Merch Section - Redesigned */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              OFFICIAL MERCHANDISE
            </div>
            
            <h2 className={`text-5xl md:text-6xl font-black mb-6 ${getTextGradientClasses()}`}>
              Wear the Movement
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Express your connection to the F.O.T.U community with our exclusive collection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="transform hover:scale-105 transition-all duration-300">
                <ProductCard product={product} onPurchase={() => {}} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/merch">
              <Button className={`${getGradientClasses()} hover:${getGradientClasses(true)} text-white font-bold px-12 py-4 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300`}>
                Shop Full Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="bg-gradient-to-r from-gray-900 to-black py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Logo size="lg" showText={false} className="mx-auto mb-8 transform hover:scale-110 transition-all duration-300" />
            
            <h3 className="text-3xl font-bold text-white mb-4">Friends of the Unknown</h3>
            <p className="text-xl text-pink-300 mb-8 font-semibold">{THEME_CONFIG.logo.tagline}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
                <p className="text-gray-400">084 748 2489</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <p className="text-gray-400">enquiries@fotu.co.za</p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500 text-lg">
                © {new Date().getFullYear()} F.O.T.U PTY LTD. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
