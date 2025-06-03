
import { Calendar, MapPin, Clock, Users, Star, Ticket as TicketIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { SHOW_CONFIG, getShowDisplayText } from '@/components/ShowInfo';
import { THEME_CONFIG, getGradientClasses } from '@/components/ThemeConfig';

const Tickets = () => {
  const showInfo = getShowDisplayText();

  const handleTicketPurchase = (ticketType: string, price: string) => {
    const message = `Hi! I would like to purchase ${ticketType} tickets for the F.O.T.U event. Price: ${price}. Please send me payment details and confirmation.`;
    const whatsappUrl = `https://www.webtickets.co.za/v2/Event.aspx?itemid=1554659074`;
    window.open(whatsappUrl, '_blank');
  };

  const events = [
    {
      id: 1,
      date: showInfo.dateOnly,
      day: SHOW_CONFIG.day,
      time: SHOW_CONFIG.time,
      venue: SHOW_CONFIG.venue,
      location: SHOW_CONFIG.location,
      headliner: SHOW_CONFIG.headliner,
      supporting: ['TBA', 'TBA'],
      ticketTypes: [
        { name: 'Early Bird', price: 'TBA', available: true, description: 'Limited time offer' },
        { name: 'General Admission', price: 'TBA', available: true, description: 'Standard entry' },
        { name: 'VIP Experience', price: 'TBA', available: true, description: 'Includes drinks & backstage access' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-12">
        {/* Header */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className={`text-5xl md:text-6xl font-black mb-4 ${getGradientClasses()} bg-clip-text text-transparent`}>
              Get Your Tickets
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us for unforgettable nights of music, energy, and connection. 
              Secure your spot at the next F.O.T.U experience.
            </p>
          </div>

          {/* Events */}
          <div className="space-y-12">
            {events.map((event) => (
              <Card key={event.id} className={`bg-gray-900/50 ${THEME_CONFIG.primary.border}/20 overflow-hidden`}>
                <CardContent className="p-0">
                  <div className="md:flex">
                    {/* Event Info */}
                    <div className="md:w-1/2 p-8 space-y-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge className={`${getGradientClasses()} text-white font-semibold`}>
                          UPCOMING
                        </Badge>
                        <Badge variant="outline" className={`${THEME_CONFIG.primary.border} ${THEME_CONFIG.primary.text}`}>
                          {event.location}
                        </Badge>
                      </div>

                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                          F.O.T.U {event.location}
                        </h2>
                        <p className={`${THEME_CONFIG.primary.text} text-lg font-semibold mb-4`}>
                          Featuring {event.headliner}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Calendar className={`w-5 h-5 ${THEME_CONFIG.primary.text}`} />
                          <span>{event.day}, {event.date}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-gray-300">
                          <Clock className={`w-5 h-5 ${THEME_CONFIG.primary.text}`} />
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-gray-300">
                          <MapPin className={`w-5 h-5 ${THEME_CONFIG.primary.text}`} />
                          <span>{event.venue}, {event.location}</span>
                        </div>

                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Supporting Artists:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.supporting.map((artist, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300">
                              {artist}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Ticket Options */}
                    <div className="md:w-1/2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <TicketIcon className={`w-6 h-6 mr-2 ${THEME_CONFIG.primary.text}`} />
                        Ticket Options
                      </h3>
                      
                      <div className="space-y-4">
                        {event.ticketTypes.map((ticket, index) => (
                          <div 
                            key={index}
                            className={`bg-gray-900/50 rounded-lg p-4 border border-gray-700 hover:${THEME_CONFIG.primary.border}/50 transition-all duration-300`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h4 className="text-lg font-semibold text-white">{ticket.name}</h4>
                                <p className="text-gray-400 text-sm">{ticket.description}</p>
                              </div>
                              <div className="text-right">
                                <div className={`text-2xl font-bold ${THEME_CONFIG.primary.text}`}>{ticket.price}</div>
                                {index === 0 && (
                                  <Badge className="bg-red-500 text-xs mt-1">
                                    LIMITED
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <Button 
                              onClick={() => handleTicketPurchase(ticket.name, ticket.price)}
                              className={`w-full ${getGradientClasses()} hover:${getGradientClasses(true)} text-white font-semibold mt-3`}
                              disabled={!ticket.available}
                            >
                              {ticket.available ? 'Purchase Tickets' : 'Sold Out'}
                            </Button>
                          </div>
                        ))}
                      </div>

                      <div className={`mt-6 p-4 ${THEME_CONFIG.primary.bg}/10 rounded-lg ${THEME_CONFIG.primary.border}/20 border`}>
                        <h4 className={`${THEME_CONFIG.primary.text} font-semibold mb-2 flex items-center`}>
                          <Star className="w-4 h-4 mr-1" />
                          VIP Experience Includes:
                        </h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          <li>• Fast-track entry</li>
                          <li>• Complimentary drinks</li>
                          <li>• Backstage access</li>
                          <li>• Meet & greet with artists</li>
                          <li>• VIP viewing area</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className={`bg-gray-900/50 ${THEME_CONFIG.primary.border}/20`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Important Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• All tickets are non-refundable</li>
                  <li>• ID required for entry (18+ events)</li>
                  <li>• Tickets will be confirmed via WhatsApp</li>
                  <li>• Gates open 1 hour before event start</li>
                  <li>• Dress code: Smart casual</li>
                  <li>• No outside food or drinks allowed</li>
                </ul>
              </CardContent>
            </Card>

            <Card className={`bg-gray-900/50 ${THEME_CONFIG.primary.border}/20`}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Payment Methods</h3>
                <div className="space-y-4 text-gray-300">
                  <p>Contact us via WhatsApp for secure payment options:</p>
                  <ul className="space-y-2">
                    <li>• Bank transfer (EFT)</li>
                    <li>• Cash on collection</li>
                    <li>• Mobile payments</li>
                  </ul>
                  <div className={`mt-4 p-3 ${THEME_CONFIG.primary.bg}/10 rounded ${THEME_CONFIG.primary.border}/20 border`}>
                    <p className={`${THEME_CONFIG.primary.text} font-semibold`}>
                      📱 WhatsApp: 084 748 2489
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
