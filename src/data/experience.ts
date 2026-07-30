export interface Experience {
  id: string;
  title: string;
  description: string;
  year: number;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: "first-year-it",
    title: "First year, IT department",
    year: 2023,
    description:
      "Started my B.Tech in Information Technology at VSB Engineering College. Spent the year on fundamentals — Java, OOP, and getting comfortable with the idea that code has to actually be correct, not just compile.",
    highlights: [
      "B.Tech in Information Technology at VSB Engineering College",
      "Fundamentals: Java, OOP",
    ],
  },
  {
    id: "data-science-nptel",
    title: "NPTEL: Data Science for Engineers",
    year: 2024,
    description:
      "Completed an 8-week IIT Kharagpur course on data analysis and visualization with Python. First real exposure to thinking about data as something you shape, not just store.",
    highlights: [
      "IIT Kharagpur 8-week course",
      "Data analysis and visualization with Python",
    ],
  },
  {
    id: "java-programming-nptel",
    title: "NPTEL: Programming in Java",
    year: 2025,
    description:
      "12 weeks with IIT Kharagpur going deep on OOP and core Java. This is the year Java stopped being 'a subject' and became the language I reach for by default.",
    highlights: [
      "IIT Kharagpur 12-week course",
      "OOP and core Java principles",
    ],
  },
  {
    id: "vsb-apex-build",
    title: "Building VSB-APEX",
    year: 2025,
    description:
      "Started building and maintaining an open-source analytics dashboard for the IT department, tracking academic data across 200+ student records with React, FastAPI and PostgreSQL. Fixed a production-blocking auth bug in under 2 hours by rewriting the auth layer myself.",
    highlights: [
      "Built open-source analytics dashboard",
      "200+ student records tracked",
      "React, FastAPI, PostgreSQL stack",
      "Fixed production auth bug in 2 hours",
    ],
  },
  {
    id: "infosys-internship",
    title: "Angular Internship, Infosys Springboard",
    year: 2025,
    description:
      "Joined remotely as an Angular intern, building a MERN-stack civic issue reporting app with geolocation-based tracking and an admin dashboard — my first taste of component-driven architecture at a larger scale.",
    highlights: [
      "Angular internship at Infosys Springboard",
      "MERN-stack civic issue reporting app",
      "Geolocation-based tracking",
      "Admin dashboard implementation",
    ],
  },
  {
    id: "now-dsa",
    title: "Now — deep in DSA",
    year: 2026,
    description:
      "Still building, still on LeetCode most nights. Exploring cloud computing and blockchain on the side. Next stop: graduation in 2027, and a backend role where I can keep doing exactly this.",
    highlights: [
      "LeetCode DSA practice",
      "Cloud computing exploration",
      "Blockchain interest",
      "Graduating 2027",
    ],
  },
];
