export const categories = [
  "Development",
  "Data",
  "Design",
  "Career",
  "Entrance",
] as const;

export type Category = (typeof categories)[number];
export type Level = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  slug: string;
  title: string;
  category: Category;
  level: Level;
  duration: string;
  weeks: number;
  price: number;
  rating: number;
  students: number;
  short: string;
  image: string;
  imageAlt: string;
  instructor: string;
  syllabus: { title: string; items: string[] }[];
  reviews: { name: string; city: string; text: string; rating: number }[];
};

export const courses: Course[] = [
  {
    slug: "full-stack-web",
    title: "Full Stack Web Development",
    category: "Development",
    level: "Intermediate",
    duration: "16 weeks",
    weeks: 16,
    price: 12999,
    rating: 4.8,
    students: 2140,
    short:
      "HTML to React to a small Node API. You ship three projects, including a campus events site.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students collaborating around laptops in a bright classroom",
    instructor: "Ananya Iyer",
    syllabus: [
      {
        title: "Weeks 1–4 · Front-end basics",
        items: [
          "Semantic HTML and accessible forms",
          "CSS layout with Flexbox and Grid",
          "JavaScript: arrays, fetch, and DOM",
        ],
      },
      {
        title: "Weeks 5–10 · React",
        items: [
          "Components, props and state",
          "React Router and simple data fetching",
          "Project: course catalogue UI",
        ],
      },
      {
        title: "Weeks 11–16 · Backend and deploy",
        items: [
          "Express routes and JSON APIs",
          "Auth with sessions (overview)",
          "Deploy on Vercel / Render",
        ],
      },
    ],
    reviews: [
      {
        name: "Rohit Kulkarni",
        city: "Pune",
        text: "The weekend builds were messy in a good way. I finally understood how a form talks to a server.",
        rating: 5,
      },
      {
        name: "Meera Joseph",
        city: "Kochi",
        text: "Ananya does not skip the boring bits. Accessibility and git were part of every project.",
        rating: 5,
      },
    ],
  },
  {
    slug: "data-analytics-python",
    title: "Data Analytics with Python",
    category: "Data",
    level: "Beginner",
    duration: "12 weeks",
    weeks: 12,
    price: 9499,
    rating: 4.7,
    students: 1860,
    short:
      "Spreadsheets to pandas. You clean a real sales sheet and present one dashboard to the class.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Laptop showing charts and graphs on a wooden desk",
    instructor: "Kabir Sen",
    syllabus: [
      {
        title: "Weeks 1–3 · Thinking in tables",
        items: ["Excel / Google Sheets refresh", "What a tidy dataset looks like"],
      },
      {
        title: "Weeks 4–8 · Python and pandas",
        items: ["Notebooks, filters, groupby", "Joins without panicking"],
      },
      {
        title: "Weeks 9–12 · Tell the story",
        items: ["Simple charts", "A 5-slide readout your manager can follow"],
      },
    ],
    reviews: [
      {
        name: "Sana Qureshi",
        city: "Hyderabad",
        text: "I came from commerce. Kabir never assumed I had coded before.",
        rating: 5,
      },
    ],
  },
  {
    slug: "ui-ux-studio",
    title: "UI / UX Design Studio",
    category: "Design",
    level: "Beginner",
    duration: "10 weeks",
    weeks: 10,
    price: 8999,
    rating: 4.9,
    students: 1320,
    short:
      "Figma, user interviews, and one case study you can actually put in a portfolio.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Designer working on a tablet with colour swatches nearby",
    instructor: "Niharika Rao",
    syllabus: [
      {
        title: "Weeks 1–3 · Research",
        items: ["Talking to five users", "Problem statements that are not vague"],
      },
      {
        title: "Weeks 4–7 · Interface",
        items: ["Type, colour, spacing", "Figma components that stay consistent"],
      },
      {
        title: "Weeks 8–10 · Case study",
        items: ["Prototype and critique", "Write up the before / after"],
      },
    ],
    reviews: [
      {
        name: "Aditya Menon",
        city: "Bengaluru",
        text: "We redesigned a local clinic’s booking flow. The mentor made us defend every screen.",
        rating: 5,
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing for Small Brands",
    category: "Career",
    level: "Beginner",
    duration: "8 weeks",
    weeks: 8,
    price: 6499,
    rating: 4.6,
    students: 980,
    short:
      "Search, social and a tiny ad budget. Built around shops and coaching centres, not giant brands.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Notebook with marketing notes next to a laptop",
    instructor: "Farhan Ali",
    syllabus: [
      {
        title: "Weeks 1–2 · Offer and audience",
        items: ["Who is this for, really?", "Landing page copy that is specific"],
      },
      {
        title: "Weeks 3–6 · Channels",
        items: ["Search basics", "Instagram / WhatsApp for local businesses"],
      },
      {
        title: "Weeks 7–8 · Measure",
        items: ["UTMs without the jargon", "A two-week campaign plan"],
      },
    ],
    reviews: [
      {
        name: "Pooja Shah",
        city: "Ahmedabad",
        text: "I used the assignments on my parents’ store. We got our first 20 map reviews.",
        rating: 4,
      },
    ],
  },
  {
    slug: "cat-quant",
    title: "CAT Quant Bootcamp",
    category: "Entrance",
    level: "Advanced",
    duration: "14 weeks",
    weeks: 14,
    price: 11499,
    rating: 4.8,
    students: 740,
    short:
      "Arithmetic, algebra and DI sets at CAT pace. Two timed mocks every weekend from week 6.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Student writing notes while studying at a desk",
    instructor: "Vikram Desai",
    syllabus: [
      {
        title: "Weeks 1–5 · Number sense",
        items: ["Percentages, ratios, averages", "Speed without skipping steps"],
      },
      {
        title: "Weeks 6–10 · Algebra and geometry",
        items: ["Equations you actually see in CAT", "Geometry shortcuts with proof"],
      },
      {
        title: "Weeks 11–14 · Mocks",
        items: ["Sectional tests", "Error log reviews with Vikram"],
      },
    ],
    reviews: [
      {
        name: "Ishita Bansal",
        city: "Delhi",
        text: "The error log was more useful than any formula sheet I had bought.",
        rating: 5,
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English for Interviews",
    category: "Career",
    level: "Beginner",
    duration: "6 weeks",
    weeks: 6,
    price: 4999,
    rating: 4.7,
    students: 2210,
    short:
      "Small batches. You record answers, get notes back, and try again the next day.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Group of students talking together on campus steps",
    instructor: "Priya Thomas",
    syllabus: [
      {
        title: "Weeks 1–2 · Clarity",
        items: ["Pace and filler words", "Introduce yourself in 45 seconds"],
      },
      {
        title: "Weeks 3–4 · Stories",
        items: ["STAR answers", "Talking about a project without rambling"],
      },
      {
        title: "Weeks 5–6 · Mock interviews",
        items: ["HR round", "A short technical / role round"],
      },
    ],
    reviews: [
      {
        name: "Arjun Nair",
        city: "Chennai",
        text: "I stopped translating from Malayalam in my head. That was the whole shift.",
        rating: 5,
      },
    ],
  },
];

export const mentors = [
  {
    name: "Ananya Iyer",
    role: "Engineering mentor",
    bio: "Six years as a frontend engineer. Teaches the web course and reviews student PRs on Sundays.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kabir Sen",
    role: "Data mentor",
    bio: "Worked in a product analytics team. Cares more about clean sheets than fancy models.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Niharika Rao",
    role: "Design mentor",
    bio: "Independent designer. Will send you back if your type scale is random.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vikram Desai",
    role: "Entrance mentor",
    bio: "99 percentile CAT Quant. Runs the bootcamp like a sports practice, not a lecture.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export const testimonials = [
  {
    name: "Diya Kapoor",
    course: "UI / UX Design Studio",
    text: "I had a Behance page with no story. After the studio I had one case study that interviewers actually opened.",
  },
  {
    name: "Harsh Patel",
    course: "Full Stack Web Development",
    text: "We shipped a timetable app for our college fest. It broke on day one. Fixing that taught me more than the slides.",
  },
  {
    name: "Aisha Rahman",
    course: "Data Analytics with Python",
    text: "I still use the same checklist Kabir gave us when a manager dumps a CSV on me at 6 pm.",
  },
];

export const faqs = [
  {
    q: "Are the classes live or recorded?",
    a: "Live on weekday evenings (IST) plus recordings. Mentors keep a 48-hour window for doubt messages on the batch group.",
  },
  {
    q: "Do I need to already know coding?",
    a: "Only the Full Stack and CAT courses assume some prior work. Everything else starts from zero. Each course page lists the level.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes, within 7 days of the first live class if you have attended at least one session. Write to hello@raivatedu.in.",
  },
  {
    q: "Is there a certificate?",
    a: "You get a completion certificate after the final project. It is not a university degree. We say that on every enrol screen.",
  },
  {
    q: "Do you help with internships?",
    a: "We share openings from alumni teams and run a small mock-interview week. We do not promise a job.",
  },
];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}
