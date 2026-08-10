// All data is fictional — for prototyping purposes only.

export const interestOptions = [
  {
    id: 'orbital',
    label: 'Orbital Flight',
    symbol: '◎',
    tagline: '90 minutes around the planet'
  },
  {
    id: 'lunar',
    label: 'Lunar Flyby',
    symbol: '◑',
    tagline: 'Three days to the Moon and back'
  },
  {
    id: 'station',
    label: 'Station Stay',
    symbol: '⊕',
    tagline: 'Up to two weeks in orbit'
  },
  {
    id: 'surprise',
    label: 'Surprise Me',
    symbol: '✦',
    tagline: 'Let our advisors curate your mission'
  }
];

export const timelineOptions = [
  { id: 'this-year', label: 'This Year', sub: "I'm ready to move fast" },
  { id: '1-2-years', label: 'Next 1–2 Years', sub: "I'm planning ahead" },
  { id: 'exploring', label: 'Just Exploring', sub: 'No rush, just curious' }
];

export const bestTimeOptions = [
  'Anytime',
  'Morning (8am–12pm)',
  'Afternoon (12pm–5pm)',
  'Evening (5pm–9pm)'
];

export const packages = {
  orbital: {
    name: 'Orbital Ascent Classic',
    tagline: 'A complete orbit. Earth from every angle.',
    duration: '90 minutes',
    altitude: '400 km',
    price: 'from $450,000',
    highlights: ['Weightlessness experience', 'Full 360° Earth view', 'Private pressurized cabin']
  },
  lunar: {
    name: 'Lunar Arc',
    tagline: 'The Moon close enough to touch. Almost.',
    duration: '3 days',
    altitude: '~384,000 km',
    price: 'from $2.8M',
    highlights: ['Lunar surface view at 100km', 'Deep space silence', 'Crew of four']
  },
  station: {
    name: 'Station Residency',
    tagline: 'Live, work, and drift in orbit.',
    duration: '7–14 days',
    altitude: '420 km',
    price: 'from $1.2M/week',
    highlights: ['Dedicated private quarters', 'EVA spacewalk option', 'Zero-g daily life']
  },
  surprise: {
    name: 'Advisor Curated',
    tagline: "We'll match you to the right mission.",
    duration: 'Custom',
    altitude: 'TBD',
    price: 'varies',
    highlights: ['Personal consultation', 'Custom mission itinerary', 'Priority access']
  }
};

export const agents = {
  orbital: {
    name: 'Solène Verne',
    title: 'Senior Space Advisor',
    region: 'Americas',
    responseTime: '4 hours'
  },
  lunar: {
    name: 'Kai Nakamura',
    title: 'Lunar Experience Specialist',
    region: 'Pacific',
    responseTime: '4 hours'
  },
  station: {
    name: 'Adriana Torres',
    title: 'Station Residency Lead',
    region: 'Global',
    responseTime: '4 hours'
  },
  surprise: {
    name: 'Marcus Webb',
    title: 'Mission Curator',
    region: 'Global',
    responseTime: '4 hours'
  }
};
