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
    module: string;
    topics: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const coursesData: Course[] = [
  {
    id: "fsd-java",
    title: "Full Stack Development (Java)",
    category: "Full Stack Development",
    duration: "6 Months",
    description:
      "Learn end-to-end full stack development using Java, Spring Boot, React, and real-world project architecture.",
    techStack: ["java", "spring", "mysql", "html5", "css3", "javascript", "react"],
    price: "₹49,999",
    image: "/images/fullstack-java.jpg",
    features: [
      "Live classes with mentor support",
      "Real-world capstone projects",
      "Interview and placement preparation"
    ],
    curriculum: [
      {
        module: "Programming Fundamentals",
        topics: ["Java Basics", "OOP Concepts", "Data Structures"]
      },
      {
        module: "Backend Development",
        topics: ["Spring Boot", "REST APIs", "Authentication", "Microservices"]
      },
      {
        module: "Frontend Development",
        topics: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        module: "Database",
        topics: ["MySQL", "JPA", "Database Design"]
      },
      {
        module: "Projects",
        topics: ["Full Stack Projects", "Deployment", "System Design Basics"]
      }
    ],
    faqs: [
      {
        question: "Do I need prior Java experience?",
        answer: "No. The course starts with fundamentals and gradually moves to advanced full-stack concepts."
      },
      {
        question: "Will I build production-ready projects?",
        answer: "Yes. You will build multiple projects with backend, frontend, and deployment workflows."
      },
      {
        question: "Is placement support included?",
        answer: "Yes. Resume reviews, mock interviews, and placement guidance are part of the program."
      }
    ]
  },

  {
    id: "fsd-mern",
    title: "Full Stack Development (MERN)",
    category: "Full Stack Development",
    duration: "6 Months",
    description:
      "Build scalable web apps using MongoDB, Express, React, and Node.js with production-grade practices.",
    techStack: ["mongodb", "express", "react", "nodejs", "javascript"],
    price: "₹49,999",
    image: "/images/fullstack-mern.jpg",
    features: [
      "Hands-on MERN architecture training",
      "API-first development approach",
      "Portfolio-ready deployment projects"
    ],
    curriculum: [
      {
        module: "Frontend Core",
        topics: ["HTML", "CSS", "JavaScript", "React"]
      },
      {
        module: "Backend Core",
        topics: ["Node.js", "Express.js", "REST APIs"]
      },
      {
        module: "Database",
        topics: ["MongoDB", "Mongoose", "Schema Design"]
      },
      {
        module: "Advanced",
        topics: ["Authentication", "JWT", "Performance Optimization"]
      },
      {
        module: "Projects",
        topics: ["Real-world Apps", "Deployment", "System Design"]
      }
    ],
    faqs: [
      {
        question: "Is this course beginner friendly?",
        answer: "Yes. It begins with frontend and JavaScript foundations before moving to full MERN development."
      },
      {
        question: "Do I learn authentication and security?",
        answer: "Yes. The course includes JWT authentication, secure API practices, and session handling."
      },
      {
        question: "Will I get project feedback?",
        answer: "Yes. Mentors review assignments and projects with actionable feedback."
      }
    ]
  },

  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "Data Analytics",
    duration: "4 Months",
    description:
      "Master Excel, SQL, Power BI, and Tableau to analyze data and drive business decisions.",
    techStack: ["excel", "mysql", "tableau", "powerbi"],
    price: "₹39,999",
    image: "/images/data-analytics.jpg",
    features: [
      "Business-focused analytics training",
      "Dashboard and reporting projects",
      "Case-study based learning"
    ],
    curriculum: [
      {
        module: "Excel & Basics",
        topics: ["Excel Functions", "Data Cleaning", "Pivot Tables"]
      },
      {
        module: "SQL",
        topics: ["Queries", "Joins", "Aggregation", "Optimization"]
      },
      {
        module: "Visualization",
        topics: ["Tableau", "Power BI", "Dashboards"]
      },
      {
        module: "Business Analytics",
        topics: ["Case Studies", "KPIs", "Decision Making"]
      }
    ],
    faqs: [
      {
        question: "Do I need coding knowledge for this course?",
        answer: "No prior coding background is required. The curriculum is designed for beginners."
      },
      {
        question: "Which tools are covered in depth?",
        answer: "You will work extensively with Excel, SQL, Tableau, and Power BI."
      },
      {
        question: "Will I work on real datasets?",
        answer: "Yes. You will analyze practical datasets and build decision-ready dashboards."
      }
    ]
  },

  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    category: "Data Science",
    duration: "6 Months",
    description:
      "Learn Python, ML, deep learning, and AI concepts with hands-on real-world datasets.",
    techStack: ["python", "numpy", "pandas", "tensorflow", "pytorch"],
    price: "₹59,999",
    image: "/images/data-science.jpg",
    features: [
      "End-to-end machine learning workflow",
      "Deep learning with modern frameworks",
      "Model deployment and evaluation"
    ],
    curriculum: [
      {
        module: "Python & Math",
        topics: ["Python Basics", "NumPy", "Pandas", "Statistics"]
      },
      {
        module: "Machine Learning",
        topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"]
      },
      {
        module: "Deep Learning",
        topics: ["Neural Networks", "TensorFlow", "PyTorch"]
      },
      {
        module: "Projects",
        topics: ["Real-world ML Projects", "Model Deployment"]
      }
    ],
    faqs: [
      {
        question: "Is mathematics mandatory before joining?",
        answer: "Basic school-level math is enough to start. Required concepts are taught during the course."
      },
      {
        question: "Which ML and DL libraries are taught?",
        answer: "The curriculum covers NumPy, Pandas, TensorFlow, and PyTorch with practical use cases."
      },
      {
        question: "Will this include deployment skills?",
        answer: "Yes. You will learn model packaging, serving basics, and deployment-oriented best practices."
      }
    ]
  }
];

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((course) => course.id === id);
}
