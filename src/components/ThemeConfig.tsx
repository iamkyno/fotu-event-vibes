
export const THEME_CONFIG = {
  // Brand Colors
  primary: {
    from: 'from-yellow-400',
    to: 'to-orange-500',
    fromHover: 'from-yellow-500',
    toHover: 'to-orange-600',
    solid: 'yellow-400',
    solidHover: 'yellow-500',
    text: 'text-yellow-400',
    border: 'border-yellow-400',
    borderHover: 'border-yellow-500',
    bg: 'bg-yellow-400',
    bgHover: 'bg-yellow-500'
  },
  
  // Logo Configuration
  logo: {
    src: '/uploads/FOTU-Logo.webp',
    alt: 'F.O.T.U Logo',
    title: 'F.O.T.U',
    subtitle: 'Friends of the Unknown',
    tagline: 'Pushing Passion With Purpose'
  },
  
  // Event Specific Colors (can be switched based on event)
  accent: {
    light: 'orange-50',
    medium: 'orange-500',
    dark: 'orange-600'
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
    return `border-${config.solid} text-${config.solid} hover:${config.bg} hover:text-black`;
  }
  
  return `${getGradientClasses()} hover:${getGradientClasses(true)} text-black font-bold`;
};

export const getTextGradientClasses = () => {
  return `bg-gradient-to-r ${THEME_CONFIG.primary.from} ${THEME_CONFIG.primary.to} bg-clip-text text-transparent`;
};
