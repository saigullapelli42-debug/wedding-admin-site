// All wedding content lives here so it can be swapped without touching UI.
export const settings = {
  brideName: "Priya",
  groomName: "Sai",
  tagline: "We're Getting Married",
  weddingDate: "2026-12-15T18:30:00+05:30",
  weddingDateLabel: "15 December 2026",
  hashtag: "#SaiWedsPriya",
  rsvpDeadline: "15 November 2026",
};

export const couple = {
  intro: "Together with their families",
  story:
    "Two souls, one story. Join us as we begin the greatest chapter of our lives.",
};

export const timeline = [
  {
    date: "September 2021",
    title: "The First Meeting",
    icon: "💕",
    body:
      "A shared coffee at a rain-washed café in Bangalore. One conversation that lasted until the shutters came down.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
  },
  {
    date: "April 2022",
    title: "Our First Trip",
    icon: "📸",
    body:
      "Backpacks, borrowed maps and a sunrise in Hampi. We knew then that every adventure would be better together.",
    img: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    date: "June 2024",
    title: "The Proposal",
    icon: "💍",
    body:
      "Under the starlit sky of the Amalfi Coast, surrounded by lemon blossoms, a ring and a very easy 'yes'.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&auto=format&fit=crop",
  },
  {
    date: "December 2026",
    title: "Forever Together",
    icon: "❤️",
    body:
      "Now, surrounded by everyone we love, we promise the rest of our lives to each other.",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200&q=80&auto=format&fit=crop",
  },
];

export const galleryCategories = [
  "All",
  "Engagement",
  "Pre Wedding",
  "Family",
  "Friends",
  "Wedding",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const gallery: { src: string; category: Exclude<GalleryCategory, "All">; alt: string }[] = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop", category: "Engagement", alt: "Engagement portrait" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80&auto=format&fit=crop", category: "Pre Wedding", alt: "Pre wedding shoot" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80&auto=format&fit=crop", category: "Engagement", alt: "Ring closeup" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80&auto=format&fit=crop", category: "Wedding", alt: "Couple on wedding day" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=900&q=80&auto=format&fit=crop", category: "Wedding", alt: "Wedding ceremony" },
  { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80&auto=format&fit=crop", category: "Friends", alt: "Friends celebrating" },
  { src: "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?w=900&q=80&auto=format&fit=crop", category: "Family", alt: "Family portrait" },
  { src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=900&q=80&auto=format&fit=crop", category: "Pre Wedding", alt: "Couple travel" },
  { src: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=900&q=80&auto=format&fit=crop", category: "Wedding", alt: "Bride portrait" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80&auto=format&fit=crop", category: "Friends", alt: "Reception dance" },
  { src: "https://images.unsplash.com/photo-1508435234994-67cfd7ef4bb1?w=900&q=80&auto=format&fit=crop", category: "Pre Wedding", alt: "Golden hour couple" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=80&auto=format&fit=crop", category: "Family", alt: "Extended family" },
  { src: "/Photo.jpg", category: "Family", alt: "Extended family" },
];

export const events = [
  {
    name: "Haldi",
    date: "13 Dec 2026",
    time: "10:00 AM",
    venue: "The Heritage Gardens, Bengaluru",
    icon: "🌼",
    map: "https://maps.google.com/?q=Bengaluru",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Mehendi",
    date: "13 Dec 2026",
    time: "04:00 PM",
    venue: "Terrace Lawns, ITC Gardenia",
    icon: "🌿",
    map: "https://maps.google.com/?q=ITC+Gardenia+Bengaluru",
    img: "https://images.unsplash.com/photo-1610123361437-de2b3d4b3d1b?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Sangeet",
    date: "14 Dec 2026",
    time: "07:00 PM",
    venue: "Grand Ballroom, The Ritz-Carlton",
    icon: "🎶",
    map: "https://maps.google.com/?q=Ritz+Carlton+Bengaluru",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Wedding Ceremony",
    date: "15 Dec 2026",
    time: "06:30 PM",
    venue: "The Royal Palace Grounds",
    icon: "💍",
    map: "https://maps.google.com/?q=Palace+Grounds+Bengaluru",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&q=80&auto=format&fit=crop",
  },
  {
    name: "Reception",
    date: "16 Dec 2026",
    time: "07:30 PM",
    venue: "The Leela Palace, Bengaluru",
    icon: "🥂",
    map: "https://maps.google.com/?q=Leela+Palace+Bengaluru",
    img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80&auto=format&fit=crop",
  },
];

export const family = {
  bride: {
    title: "Bride's Family",
    members: [
      { name: "Mr. Mohan P.", relation: "Father", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
      { name: "Mrs. Anita M.", relation: "Mother", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop" },
      { name: "Rohan P.", relation: "Brother", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop" },
    ],
  },
  groom: {
    title: "Groom's Family",
    members: [
      { name: "Mr. Rajan K.", relation: "Father", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop" },
      { name: "Mrs. Sumathi R.", relation: "Mother", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
      { name: "Aditi K.", relation: "Sister", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&auto=format&fit=crop" },
    ],
  },
};

export const venue = {
  name: "The Royal Palace Grounds",
  address: "Palace Rd, Sadashiva Nagar, Bengaluru, Karnataka 560080",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0912812043!2d77.5834!3d13.0056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzIwLjIiTiA3N8KwMzUnMDAuMiJF!5e0!3m2!1sen!2sin!4v0000000000000",
  directions: "https://maps.google.com/?q=Palace+Grounds+Bengaluru",
  img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&auto=format&fit=crop",
};

export const gift = {
  enabled: true,
  upiId: "sai.priya@upi",
  bankName: "HDFC Bank",
  accountName: "Sai & Priya",
  qrImage:
    "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=sai.priya@upi&pn=Sai%20and%20Priya",
};
