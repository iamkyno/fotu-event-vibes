
import { THEME_CONFIG } from './ThemeConfig';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/fd97e490-b0fa-4c18-918e-9c8368340ba2.png" 
        alt="F.O.T.U - Friends of the Unknown" 
        className={`${sizeClasses[size]} transform group-hover:scale-110 transition-transform duration-300 object-contain mx-auto`} 
      />
      {showText && (
        <div className="ml-3">
          <div className={`font-bold ${textSizeClasses[size]} text-gray-800`}>
            {THEME_CONFIG.logo.title}
          </div>
          <div className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-gray-600`}>
            {THEME_CONFIG.logo.subtitle}
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
