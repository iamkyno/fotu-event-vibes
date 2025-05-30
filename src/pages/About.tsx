
import { useEffect } from 'react';
import { Music, Users, Star, Award, Calendar, MapPin, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { scrollToTop } from '@/utils/scrollToTop';

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleTicketPurchase = () => {
    const message = "Hi! I'm interested in purchasing tickets for the upcoming F.O.T.U event. Please send me more details.";
    const whatsappUrl = `https://wa.me/27847482489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const featuredArtists = [
    'Da Capo', 'Enoo Napa', 'Karyendasoul', 'Que DJ', 'Kususa'
  ];

  const sponsors = [
    'Castle Double Malt', 'Flying Fish', 'Savanna', 'Heineken',
    'Jagermeister', 'Johnnie Walker Blonde', 'PowerPlay'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About F.O.T.U
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Friends of the Unknown - An immersive event centered around anchoring the next generation of creatives & DJ/producers into the spotlight.
            </p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Mission Column */}
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mb-8" />
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "Pushing Passion With Purpose" - We believe in creating opportunities for emerging talent while providing a first-class experiential experience to our patrons.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    F.O.T.U is more than just an event - it's a family. A family that intends to create opportunities and focuses on opening the industry for female and male creatives, providing a place where their talents are appreciated.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We also focus on job creation within the youth sector, ensuring our team consists of young adults across various departments.
                  </p>
                </div>
              </div>

              {/* Images Grid Column */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/uploads/60d06c75-3c99-40fa-b0d7-dfa7a7abdd14.png" 
                  alt="Event atmosphere" 
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="/uploads/6ba36210-1e45-4de8-9047-aff722cb01e0.png" 
                  alt="DJ performance" 
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section - Grid Layout */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet the Founder</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
              <div className="md:col-span-1">
                <img 
                  src="/uploads/ThamiTheUnknown.webp" 
                  alt="Thami Nyawo" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thami The Unknown</h3>
                <p className="text-lg text-yellow-500 font-semibold mb-4">Formally known as Thami Nyawo</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A professional DJ/Producer who, when not gigging, plans and coordinates events under his company F.O.T.U PTY LTD.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Under his leadership, the F.O.T.U brand has seen incredible growth, evolving from a backyard event at Amsterdam bar to a standalone independent event working with world-renowned brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">December 2021</h3>
                  <p className="text-gray-600">F.O.T.U launched as a backyard event at Amsterdam bar, with a vision to spotlight emerging talent.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Growth Phase</h3>
                  <p className="text-gray-600">Evolved into a standalone event, partnering with world-renowned brands and expanding our reach.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-0 hover:transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Today</h3>
                  <p className="text-gray-600">Hosting international superstars while maintaining our core mission of supporting emerging artists.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Artists Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Artists</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {featuredArtists.map((artist, index) => (
                <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Music className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">{artist}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sponsors.map((sponsor, index) => (
                <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Handshake className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">{sponsor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on creating opportunities and opening the industry for emerging creatives, fostering a supportive community.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We provide first-class experiential experiences while maintaining the highest standards in event production.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Youth Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize job creation within the youth sector, ensuring our team represents the next generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Join the F.O.T.U Family</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of something bigger. Experience the energy, support emerging artists, and help us push passion with purpose.
            </p>
            <Button 
              onClick={handleTicketPurchase}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Your Tickets Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
