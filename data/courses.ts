export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  techStack: string[];
  features: string[];
  curriculum: {
    week: string;
    topic: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const coursesData: Course[] = [
  {
    id: "full-stack-dev",
    title: "Full-Stack Development",
    category: "Full Stack Development",
    description: "Master both frontend and backend technologies to build complete web applications.",
    duration: "6 Months",
    price: "₹49,999",
    image: "https://picsum.photos/seed/fsd/800/600",
    techStack: ["react", "nodejs", "mongodb", "express", "typescript", "nextjs"],
    features: ["Live Classes", "Project-based Learning", "Placement Support", "Mentorship"],
    curriculum: [
      { week: "Week 1-4", topic: "Frontend Basics", description: "HTML, CSS, and JavaScript fundamentals." },
      { week: "Week 5-8", topic: "React.js", description: "Building modern UIs with React." },
      { week: "Week 9-12", topic: "Node.js & Express", description: "Backend development with Node.js." },
      { week: "Week 13-16", topic: "Databases", description: "SQL and NoSQL databases." },
    ],
    faqs: [
      { question: "What are the prerequisites?", answer: "No prior experience required." },
      { question: "Is there a certificate?", answer: "Yes, you get a certificate upon completion." },
    ],
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    category: "Data Science",
    description: "Learn to analyze data and build intelligent systems using Python and Machine Learning.",
    duration: "6 Months",
    price: "₹59,999",
    image: "https://picsum.photos/seed/ds/800/600",
    techStack: ["python", "pandas", "numpy", "tensorflow", "pytorch", "scikitlearn"],
    features: ["Python", "Machine Learning", "Deep Learning", "Real-world Projects"],
    curriculum: [
      { week: "Week 1-4", topic: "Python for Data Science", description: "Python basics and libraries like NumPy, Pandas." },
      { week: "Week 5-8", topic: "Statistics", description: "Foundational statistics for data analysis." },
      { week: "Week 9-12", topic: "Machine Learning", description: "Supervised and unsupervised learning." },
      { week: "Week 13-16", topic: "Deep Learning", description: "Neural networks and AI applications." },
    ],
    faqs: [
      { question: "Do I need to know math?", answer: "Basic high school math is sufficient." },
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "Data Analytics",
    description: "Learn to interpret complex data and turn it into actionable insights using Excel, SQL, and Tableau.",
    duration: "4 Months",
    price: "₹39,999",
    image: "https://picsum.photos/seed/da/800/600",
    techStack: ["excel", "mysql", "tableau", "powerbi"],
    features: ["Excel", "SQL", "Tableau", "Power BI", "Real-world Projects"],
    curriculum: [
      { week: "Week 1-4", topic: "Excel for Analytics", description: "Advanced Excel functions and data visualization." },
      { week: "Week 5-8", topic: "SQL Fundamentals", description: "Querying databases and data manipulation." },
      { week: "Week 9-12", topic: "Data Visualization", description: "Creating dashboards with Tableau and Power BI." },
      { week: "Week 13-16", topic: "Capstone Project", description: "End-to-end data analysis project." },
    ],
    faqs: [
      { question: "What tools will I learn?", answer: "Excel, SQL, Tableau, and Power BI." },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((course) => course.id === id);
}
