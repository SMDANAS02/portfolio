export interface Achievement {
  id: string;
  title: string;
  value: number;
  label: string;
  icon: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    id: "projects-shipped",
    title: "Projects Shipped",
    value: 4,
    label: "Production Ready",
    icon: "◆",
    description: "Full-stack applications and systems in production",
  },
  {
    id: "gpa",
    title: "GPA",
    value: 8.02,
    label: "/ 10",
    icon: "★",
    description: "IT undergrad at VSB Engineering College",
  },
  {
    id: "students-trained",
    title: "Students Trained",
    value: 100,
    label: "+ through workshops",
    icon: "▲",
    description: "Technical workshops and hackathons organized",
  },
  {
    id: "leetcode-problems",
    title: "LeetCode Problems",
    value: 200,
    label: "+ solved",
    icon: "◊",
    description: "Data structures & algorithms mastery",
  },
];
