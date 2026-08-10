// All data is fictional — for prototyping purposes only.

export const offerings = [
  {
    id: 'orbital',
    symbol: '◎',
    name: 'Orbital Flight',
    tagline: 'The whole planet, in one orbit.',
    feel: "You leave Earth strapped into 3 million pounds of thrust. Ninety minutes later, you've watched a full sunrise from 400 kilometers up, drifted through absolute silence, and felt your perspective rearrange itself permanently. The Overview Effect — the cognitive shift reported by every astronaut who's seen Earth from outside — isn't a metaphor here. It's the whole point.",
    duration: '90 min',
    altitude: '400 km',
    price: 'from $450,000',
    video: null,
    included: [
      'Pre-flight medical clearance and physical training',
      'Private pressurized cabin with panoramic viewport',
      'Full Earth orbit — every continent, every ocean',
      'Three minutes of weightlessness at apogee',
      'Post-flight debrief and mission certificate'
    ]
  },
  {
    id: 'lunar',
    symbol: '◑',
    name: 'Lunar Flyby',
    tagline: 'Close enough to see the craters.',
    feel: "The Moon has been a fixed point in every human sky since before recorded history. You will be one of a handful of people alive who have seen its surface not as a bright disk, but as a world — craters, ridges, and regolith plains stretching out beyond the window at 100 kilometers altitude. The return journey takes three days. You will spend most of it looking at Earth from a distance nobody else in your life has experienced.",
    duration: '3 days',
    altitude: '384,000 km',
    price: 'from $2.8M',
    video: null,
    included: [
      'Private berthing module aboard the transit vehicle',
      'Lunar flyby at 100 km — unobstructed surface views',
      'Onboard mission specialist for guided commentary',
      'Real-time comms link to family on Earth',
      'Post-mission documentary produced by Orbital Ascent'
    ]
  },
  {
    id: 'station',
    symbol: '⊕',
    name: 'Station Residency',
    tagline: 'Live in orbit. Work, sleep, float.',
    feel: "This is not a visit. For seven to fourteen days, the station is your home — a pressurized ring of modules at 420 kilometers, moving at 7.66 km/s. You will eat in zero gravity, sleep strapped loosely to a wall, and watch sixteen sunrises every day. Optional: a 90-minute spacewalk that puts nothing between you and open space except a suit. Most guests describe it as the longest and shortest two weeks of their lives.",
    duration: '7–14 days',
    altitude: '420 km',
    price: 'from $1.2M/wk',
    video: null,
    included: [
      'Private quarters module with viewport',
      'Full zero-g orientation training (2-day pre-mission)',
      'Daily mission specialist support',
      'Optional EVA spacewalk (qualification required)',
      'Full media archive and personal mission patch'
    ]
  }
];

export const stats = [
  { value: '47',    label: 'Missions completed' },
  { value: '0',     label: 'Passenger injuries' },
  { value: '112',   label: 'Civilians flown' },
  { value: '99.6%', label: 'Launch success rate' }
];

export const testimonials = [
  {
    quote: "I've summited Everest. I've crossed the Atlantic solo. Nothing prepares you for seeing the whole planet from outside it.",
    name: 'R. Vanderberg',
    mission: 'Orbital Flight, 2024'
  },
  {
    quote: "I kept waiting for the awe to fade. It didn't. Not in ninety minutes, not in the weeks since.",
    name: 'M. Okonkwo',
    mission: 'Orbital Flight, 2025'
  },
  {
    quote: "Three days to the Moon and back. I came home a different person. I'm not being dramatic.",
    name: 'S. Hartmann',
    mission: 'Lunar Flyby, 2025'
  }
];

export const interestOptions = [
  { id: 'orbital',  label: 'Orbital Flight', symbol: '◎', tagline: '90 minutes around the planet' },
  { id: 'lunar',    label: 'Lunar Flyby',    symbol: '◑', tagline: 'Three days to the Moon and back' },
  { id: 'station',  label: 'Station Stay',   symbol: '⊕', tagline: 'Up to two weeks in orbit' },
  { id: 'surprise', label: 'Surprise Me',    symbol: '✦', tagline: 'Let our advisors curate your mission' }
];

export const timelineOptions = [
  { id: 'this-year', label: 'This Year',      sub: "I'm ready to move fast" },
  { id: '1-2-years', label: 'Next 1–2 Years', sub: "I'm planning ahead" },
  { id: 'exploring', label: 'Just Exploring', sub: 'No rush, just curious' }
];

export const bestTimeOptions = [
  'Anytime',
  'Morning (8am–12pm)',
  'Afternoon (12pm–5pm)',
  'Evening (5pm–9pm)'
];

export const agents = {
  orbital:  { name: 'Solène Verne',   title: 'Senior Space Advisor',        responseTime: '4 hours' },
  lunar:    { name: 'Kai Nakamura',   title: 'Lunar Experience Specialist',  responseTime: '4 hours' },
  station:  { name: 'Adriana Torres', title: 'Station Residency Lead',       responseTime: '4 hours' },
  surprise: { name: 'Marcus Webb',    title: 'Mission Curator',              responseTime: '4 hours' }
};

export const packages = {
  orbital:  { name: 'Orbital Ascent Classic', tagline: 'A complete orbit. Earth from every angle.' },
  lunar:    { name: 'Lunar Arc',              tagline: 'The Moon close enough to touch. Almost.' },
  station:  { name: 'Station Residency',      tagline: 'Live, work, and drift in orbit.' },
  surprise: { name: 'Advisor Curated',        tagline: "We'll match you to the right mission." }
};
