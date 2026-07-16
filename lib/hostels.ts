/**
 * Static hostel data, ported verbatim from the original oz-landing
 * static page (index.html `renderVals` `base` array). Image paths,
 * copy, and URLs are unchanged — including the Jerusalem hostel's
 * gallery pointing at the `tel-aviv` asset folder, which matches the
 * source as-is.
 */

export type Amenity = {
  label: string;
  ok: boolean;
};

export type Hostel = {
  slug: string;
  name: string;
  city: string;
  address: string;
  isNorth?: boolean;
  img: string;
  gallery?: string[];
  desc?: string;
  descShort?: string;
  available?: string;
  amenities?: Amenity[];
  mapSrc?: string;
  bookUrl?: string;
};

export const HOSTELS: Hostel[] = [
  {
    slug: 'tel-aviv',
    name: 'עוז תל אביב',
    city: 'תל אביב',
    address: 'שארית ישראל 31, תל אביב',
    img: '/assets/tlv/dorm.png',
    gallery: [
      '/assets/tlv/dorm.png',
      '/assets/tlv/shower.png',
      '/assets/tlv/kitchen-roof.png',
      '/assets/tlv/kitchen-fridge.png',
      '/assets/tlv/toilet.png',
    ],
    desc: 'מלונית מגורים לעובדים זרים עד 40 איש, המתאימה לשהות לטווח קצר או ארוך. קרובה לתחבורה ציבורית ולאתרי בנייה מרכזיים.',
    descShort: 'גג משופץ, מרכז העיר.',
    available: 'כניסה מיידית · 4 מיטות פנויות',
    amenities: [
      { label: 'אינטרנט (Wi-Fi)', ok: true },
      { label: 'חדרים ממוזגים', ok: true },
      { label: 'ארונית לכל עובד', ok: true },
      { label: 'חדר אוכל', ok: true },
      { label: 'מטבח מאובזר', ok: true },
    ],
    mapSrc: `https://maps.google.com/maps?q=${encodeURIComponent('שארית ישראל 31, תל אביב')}&z=15&hl=he&output=embed`,
    bookUrl: 'https://new-booking.frontdeskmaster.com/?hostelId=425%2FWwTApVaGVvkYaj%2BapF5OpUXMY4Rv&lang=he',
  },
  {
    slug: 'jerusalem',
    name: 'עוז ירושלים',
    city: 'ירושלים',
    address: 'שמאי 4, ירושלים',
    img: '/assets/tel-aviv/ta-dorm-mural.jpg',
    gallery: [
      '/assets/tel-aviv/ta-dorm-mural.jpg',
      '/assets/tel-aviv/ta-bunks.jpg',
      '/assets/tel-aviv/ta-dorm-people.png',
      '/assets/tel-aviv/ta-bathroom.jpg',
      '/assets/tel-aviv/ta-kitchen.png',
    ],
    desc: 'מלונית מגורים לעובדים זרים עד 70 איש, המתאימה לשהות לטווח קצר או ארוך. קרובה לתחבורה ציבורית ולאתרי בנייה מרכזיים.',
    descShort: 'מרווחת, לב ירושלים.',
    available: 'פנוי מ-15 ביולי · 10 מיטות',
    amenities: [
      { label: 'אינטרנט (Wi-Fi)', ok: true },
      { label: 'חדרים ממוזגים', ok: true },
      { label: 'ארונית לכל עובד', ok: true },
      { label: 'חדר אוכל', ok: true },
      { label: 'מטבח מאובזר', ok: true },
    ],
    mapSrc: `https://maps.google.com/maps?q=${encodeURIComponent('שמאי 4, ירושלים')}&z=15&hl=he&output=embed`,
    bookUrl: 'https://new-booking.frontdeskmaster.com/?hostelId=5lxa4kHS3EpMW1E2oRD0fmQhjQNW10W6&lang=he',
  },
  {
    slug: 'north',
    name: 'עוז צפון',
    city: 'צפון',
    address: 'אזור הצפון',
    isNorth: true,
    img: '/assets/north/oz-north.png',
  },
];

export const DEFAULT_BOOKING_URL =
  'https://new-booking.frontdeskmaster.com/?hostelId=425%2FWwTApVaGVvkYaj%2BapF5OpUXMY4Rv&lang=he';
