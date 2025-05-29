
import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EventPopupProps {
  isEnabled: boolean;
  eventData: {
    title: string;
    date: string;
    venue: string;
    location: string;
    description: string;
  };
}

const EventPopup = ({ isEnabled, eventData }: EventPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('fotu-popup-shown');
    if (isEnabled && !popupShown && !hasBeenShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasBeenShown(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isEnabled, hasBeenShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('fotu-popup-shown', 'true');
  };

  const handleTicketPurchase = () => {
    const message = `Hi! I'm interested in purchasing tickets for the upcoming F.O.T.U event on ${eventData.date} at ${eventData.venue}, ${eventData.location}. Please send me more details.`;
    const whatsappUrl = `https://wa.me/27847482489?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    handleClose();
  };

  if (!isEnabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="bg-white border-yellow-500/20 max-w-md w-full transform animate-scale-in">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {eventData.title}
            </h3>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-yellow-500" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2 text-yellow-500" />
              <span>{eventData.venue}, {eventData.location}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{eventData.description}</p>
          
          <div className="flex space-x-3">
            <Button 
              onClick={handleTicketPurchase}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold flex-1"
            >
              <Ticket className="w-4 h-4 mr-2" />
              Get Tickets
            </Button>
            <Button 
              onClick={handleClose}
              variant="outline"
              className="border-gray-300 text-gray-600 hover:bg-gray-50"
            >
              Later
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPopup;
