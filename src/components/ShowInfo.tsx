
export const SHOW_CONFIG = {
  date: '2 August 2025',
  day: 'Saturday',
  time: 'TBA',
  venue: 'Onomo Hotel',
  location: 'Durban',
  headliner: 'TBA'
};

export const getShowDisplayText = () => ({
  fullDate: `${SHOW_CONFIG.day}, ${SHOW_CONFIG.date}`,
  dateOnly: SHOW_CONFIG.date,
  venue: `${SHOW_CONFIG.venue}, ${SHOW_CONFIG.location}`,
  location: SHOW_CONFIG.location,
  time: SHOW_CONFIG.time,
  headliner: SHOW_CONFIG.headliner
});
