export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export const skills: Skill[] = [
  // Languages & Databases
  { name: "Java", level: 90, category: "Languages & DB" },
  { name: "JavaScript", level: 85, category: "Languages & DB" },
  { name: "SQL", level: 85, category: "Languages & DB" },
  { name: "HTML/CSS", level: 85, category: "Languages & DB" },
  { name: "MySQL", level: 85, category: "Languages & DB" },
  { name: "PostgreSQL", level: 80, category: "Languages & DB" },
  { name: "MongoDB", level: 75, category: "Languages & DB" },

  // Frameworks & Tools
  { name: "Node.js", level: 85, category: "Frameworks & Tools" },
  { name: "Express", level: 85, category: "Frameworks & Tools" },
  { name: "React", level: 85, category: "Frameworks & Tools" },
  { name: "FastAPI", level: 80, category: "Frameworks & Tools" },
  { name: "Git & GitHub", level: 90, category: "Frameworks & Tools" },
  { name: "REST API Design", level: 85, category: "Frameworks & Tools" },
  { name: "JWT/bcrypt", level: 85, category: "Frameworks & Tools" },

  // Currently Learning
  { name: "Advanced DSA", level: 70, category: "Currently Learning" },
  { name: "Backend System Design", level: 65, category: "Currently Learning" },
  { name: "Cloud Computing", level: 60, category: "Currently Learning" },
  { name: "Blockchain & Web3", level: 55, category: "Currently Learning" },
];

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>
);
