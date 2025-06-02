
import { Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getButtonClasses } from './ThemeConfig';

interface TicketButtonProps {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
  className?: string;
}

const TicketButton = ({ variant = 'default', size = 'default', className = '' }: TicketButtonProps) => {
  const handleTicketPurchase = () => {
    const message = "Hi! I'm interested in purchasing tickets for the upcoming F.O.T.U event. Please send me more details.";
    const whatsappUrl = `https://www.webtickets.co.za/v2/Event.aspx?itemid=1554659074`;
    window.open(whatsappUrl, '_blank');
  };

  const buttonVariant = variant === 'default' ? 'primary' : 'outline';
  const themeClasses = getButtonClasses(buttonVariant);

  return (
    <Button 
      onClick={handleTicketPurchase} 
      variant={variant}
      size={size}
      className={`${themeClasses} transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <Ticket className="w-5 h-5 mr-2" />
      Get Tickets
    </Button>
  );
};

export default TicketButton;
