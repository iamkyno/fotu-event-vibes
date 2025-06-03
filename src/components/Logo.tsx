
import { THEME_CONFIG } from './ThemeConfig';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={THEME_CONFIG.logo.src} 
        alt={THEME_CONFIG.logo.alt} 
        className={`${sizeClasses[size]} transform group-hover:scale-110 transition-transform duration-300`} 
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
