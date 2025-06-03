
export const THEME_CONFIG = {
  // Brand Colors - Updated to match new vibrant theme
  primary: {
    from: 'from-pink-400',
    to: 'to-purple-600',
    fromHover: 'from-pink-500',
    toHover: 'to-purple-700',
    solid: 'pink-400',
    solidHover: 'pink-500',
    text: 'text-pink-400',
    border: 'border-pink-400',
    borderHover: 'border-pink-500',
    bg: 'bg-pink-400',
    bgHover: 'bg-pink-500'
  },
  
  // Secondary accent colors from the new theme
  secondary: {
    green: 'bg-green-500',
    greenText: 'text-green-500',
    yellow: 'bg-yellow-400',
    yellowText: 'text-yellow-400',
    purple: 'bg-purple-600',
    purpleText: 'text-purple-600'
  },
  
  // Logo Configuration
  logo: {
    src: '/uploads/FOTU-Logo.webp',
    alt: 'F.O.T.U Logo',
    title: 'F.O.T.U',
    subtitle: 'Friends of the Unknown',
    tagline: 'Pushing Passion With Purpose'
  },
  
  // Event Specific Colors (vibrant theme)
  accent: {
    light: 'purple-50',
    medium: 'purple-500',
    dark: 'purple-600'
  }
};

export const getGradientClasses = (hover = false) => {
  const config = THEME_CONFIG.primary;
  return hover 
    ? `bg-gradient-to-r ${config.fromHover} ${config.toHover}`
    : `bg-gradient-to-r ${config.from} ${config.to}`;
};

export const getButtonClasses = (variant: 'primary' | 'outline' = 'primary') => {
  const config = THEME_CONFIG.primary;
  
  if (variant === 'outline') {
    return `border-${config.solid} text-${config.solid} hover:${config.bg} hover:text-white`;
  }
  
  return `${getGradientClasses()} hover:${getGradientClasses(true)} text-white font-bold`;
};

export const getTextGradientClasses = () => {
  return `bg-gradient-to-r ${THEME_CONFIG.primary.from} ${THEME_CONFIG.primary.to} bg-clip-text text-transparent`;
};
