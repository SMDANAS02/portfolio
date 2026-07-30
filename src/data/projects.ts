export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  caseStudyUrl?: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: "vsb-apex",
    order: 1,
    title: "VSB-APEX",
    description:
      "Departmental analytics platform tracking academic data across 200+ student records, ~70% less manual sync work.",
    fullDescription:
      "An open-source departmental analytics platform that turns 200+ scattered student records into one live, queryable dashboard for the IT department.",
    image: "/assets/visual-1.svg",
    technologies: ["React 18", "FastAPI", "PostgreSQL", "Neon", "Alembic", "Render", "Vercel"],
    githubUrl: "https://github.com/VSBEC-IT-OSS/VSB-APEX",
    caseStudyUrl: "/project-1.html",
  },
  {
    id: "smart-meal",
    order: 2,
    title: "Smart Meal Notification",
    description:
      "A 'Calorie Debt' algorithm that adjusts daily targets from historical overages, with JWT auth and automated reminders.",
    fullDescription:
      "A nutrition-tracking API built around one idea: your calorie target shouldn't be static — it should adapt to what you actually ate yesterday.",
    image: "/assets/visual-2.svg",
    technologies: ["Node.js", "Express", "MySQL", "JWT", "bcrypt", "Nodemailer"],
    githubUrl: "https://github.com/SMDANAS02/A-Smart-Meal-Notification-Calorie-Overflow-Management-",
    caseStudyUrl: "/project-2.html",
  },
  {
    id: "volunteer-allocation",
    order: 3,
    title: "Smart Volunteer Allocation",
    description:
      "Rule-based system that matches volunteers to tasks by skills and availability, automating assignment end to end.",
    fullDescription:
      "A rule-based system that matches volunteers to tasks automatically, built for event teams that were assigning people manually.",
    image: "/assets/visual-3.svg",
    technologies: ["JavaScript", "Rule Engine", "Node.js"],
    githubUrl: "https://github.com/SMDANAS02/smart-vounteer-allocation-system-management",
    caseStudyUrl: "/project-3.html",
  },
  {
    id: "ecommerce-catalog",
    order: 4,
    title: "E-commerce Product Catalog",
    description:
      "Full-stack storefront with authentication, order management and a working payment gateway integration.",
    fullDescription:
      "A full-stack storefront covering the parts that actually matter in commerce: accounts, orders, and money moving safely.",
    image: "/assets/visual-4.svg",
    technologies: ["HTML", "CSS", "JavaScript", "Payment Gateway"],
    githubUrl: "https://github.com/SMDANAS02/E-commerce-product-catalog",
    caseStudyUrl: "/project-4.html",
  },
];
