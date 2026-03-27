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
    subTopics?: string[];
    tools?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const coursesData: Course[] = [
  {
    id: "dsa-mastery",
    title: "Data Structures & Algorithms",
    category: "Computer Science",
    description: "Master the foundations of computer science and ace your technical interviews with deep dives into complex algorithms.",
    duration: "4 Months",
    price: "₹29,999",
    image: "https://picsum.photos/seed/dsa/800/600",
    techStack: ["java", "python", "javascript", "typescript"],
    features: ["4 Core Modules", "Capstone Project", "Interview Mastery", "Live Mentorship"],
    curriculum: [
      { 
        week: "Module 1", 
        topic: "Foundations & Complexity", 
        description: "Foundations of Programming, Complexity & Core Problem Solving",
        subTopics: [
          "Programming Basics Refresher",
          "Introduction to DSA",
          "Complexity Analysis (Big-O, Space/Time)",
          "Mathematical & Logical Foundations",
          "Bit Manipulation & Applications",
          "Recursion Fundamentals",
          "Backtracking Basics",
          "Problem Solving Methodology"
        ]
      },
      { 
        week: "Module 2", 
        topic: "Arrays, Strings & Hashing", 
        description: "Arrays, Strings, Searching, Sorting, Hashing & Patterns",
        subTopics: [
          "Arrays and Their Applications",
          "Searching Techniques (Linear, Binary)",
          "Sorting Techniques",
          "Hashing: Implementation & Library Usage",
          "Strings and String Processing",
          "Subarrays and Subsequences",
          "Two Pointers & Sliding Window",
          "Rolling Hash & String Pattern Concepts"
        ]
      },
      { 
        week: "Module 3", 
        topic: "Linear & Tree Structures", 
        description: "Linear and Tree-Based Data Structures",
        subTopics: [
          "Linked Lists (Singly, Doubly, Circular)",
          "Stacks (Array & LL based)",
          "Queues and Deques",
          "Priority Queues / Heaps",
          "LRU Cache Design",
          "Trees: Fundamentals",
          "Binary Search Trees",
          "Advanced Tree Applications (AVL, Segment Trees)",
          "Trie Data Structure and Applications"
        ]
      },
      { 
        week: "Module 4", 
        topic: "DP, Graphs & Interviews", 
        description: "Dynamic Programming, Graphs, Greedy & Interview Mastery",
        subTopics: [
          "Dynamic Programming Foundations",
          "Core DP Patterns (Knapsack, LCS, LIS)",
          "Graph Basics & Representation",
          "Graph Traversals (BFS, DFS)",
          "Graph Algorithms (Dijkstra, Kruskal)",
          "Greedy Algorithms",
          "Advanced Backtracking & Combinatorial Problems",
          "Mock Interviews & Competitive Coding Practice"
        ]
      },
    ],
    faqs: [
      { question: "Is this suitable for beginners?", answer: "Basic programming knowledge is recommended." },
    ],
  },
  {
    id: "mern-genai",
    title: "MERN Stack + GenAI + No-Code",
    category: "Full Stack Development",
    description: "The ultimate modern web development track. Build full-stack apps and supercharge your workflow with AI tools.",
    duration: "8 Months",
    price: "₹59,999",
    image: "https://picsum.photos/seed/mern/800/600",
    techStack: ["react", "nodejs", "mongodb", "express", "javascript", "nextjs"],
    features: ["8 Comprehensive Modules", "AI Tools Integration", "No-Code Mastery", "Real-world Deployment"],
    curriculum: [
      { 
        week: "Module 1 (Month 1)", 
        topic: "Intro to HTML & CSS", 
        description: "Master the building blocks of the web with modern HTML5 and CSS3 techniques.",
        subTopics: [
          "Core HTML Concepts (Semantic HTML5)",
          "Style with CSS (Flexbox, Grid)",
          "Enhance & Animate (CSS Transitions, Keyframes)",
          "Building Real Projects",
          "Version Control (Git & GitHub)"
        ],
        tools: ["Git/GitHub", "VS Code", "Cursor AI"]
      },
      { 
        week: "Module 2 (Month 2)", 
        topic: "Programming Fundamentals in JavaScript", 
        description: "Deep dive into JavaScript logic, control flow, and data manipulation.",
        subTopics: [
          "Fundamentals & Control Flow",
          "Functions & Arrays",
          "Strings & Manipulation",
          "Sorting & Complexity",
          "Recursion Essentials"
        ],
        tools: ["Chrome DevTools", "GitHub Copilot"]
      },
      { 
        week: "Module 3 (Month 3)", 
        topic: "Prominent Algorithms & Data Structures", 
        description: "Essential DSA concepts for building efficient and scalable applications.",
        subTopics: [
          "Stacks",
          "Queues",
          "Hashing",
          "Trees",
          "Binary Search"
        ],
        tools: ["LeetCode", "GitHub Copilot"]
      },
      { 
        week: "Module 4 (Month 4)", 
        topic: "Basic JavaScript", 
        description: "Core JavaScript concepts, DOM manipulation, and the event loop.",
        subTopics: [
          "Core Concepts",
          "Data Structures & OOP",
          "Strings & Debugging",
          "DOM & Events",
          "Execution in JavaScript (Event Loop)"
        ],
        tools: ["Browser APIs", "Cursor AI"]
      },
      { 
        week: "Module 5 (Month 5)", 
        topic: "Advanced JavaScript", 
        description: "Master asynchronous programming, APIs, and advanced OOP concepts.",
        subTopics: [
          "Async JavaScript (Promises, async/await)",
          "APIs & Fetch",
          "Advanced Concepts (Closures, Generators)",
          "Prototypes & OOP",
          "Web Storage & Cookies"
        ],
        tools: ["REST APIs", "Postman", "Claude AI"]
      },
      { 
        week: "Module 6 (Month 6)", 
        topic: "Advanced Spring & Backend Implementation", 
        description: "Enterprise-grade backend development using Spring Boot and JPA.",
        subTopics: [
          "JPA Deep Dive",
          "Data Transfer Objects (DTOs)",
          "Advanced JPA",
          "Integration with Java EE",
          "Advanced API Development"
        ],
        tools: ["Spring Boot", "Postman", "Swagger"]
      },
      { 
        week: "Module 7 (Month 7)", 
        topic: "React & Redux", 
        description: "Build dynamic user interfaces and manage complex state with React and Redux.",
        subTopics: [
          "React & Components Essentials",
          "State, Props & Conditional UI",
          "Routing, Refs & Performance",
          "Redux & State Management",
          "Styling, Node & Deployment"
        ],
        tools: ["React DevTools", "Vercel", "Cursor AI"]
      },
      { 
        week: "Module 8 (Month 8)", 
        topic: "Backend Development in Node.js", 
        description: "Scalable backend architecture with Node.js, Express, and MongoDB.",
        subTopics: [
          "Intro to Node.js",
          "Asynchronous Programming",
          "Middlewares & Express.js",
          "Data Validation & MongoDB",
          "Auth & Advanced MongoDB"
        ],
        tools: ["MongoDB Atlas", "Express", "AgenticAI"]
      },
    ],
    faqs: [
      { question: "What AI tools will I learn?", answer: "Cursor, Claude, and GitHub Copilot." },
    ],
  },
  {
    id: "testing-automation",
    title: "Software Testing & Automation",
    category: "Quality Assurance",
    description: "Become a complete QA engineer. From manual testing to advanced automation with Python and Selenium.",
    duration: "6 Courses",
    price: "₹34,999",
    image: "https://picsum.photos/seed/testing/800/600",
    techStack: ["python", "java", "selenium", "mysql"],
    features: ["6 Specialized Courses", "Mid-term Viva", "API Testing", "SQL for Testers"],
    curriculum: [
      { 
        week: "Course 1", 
        topic: "Unlocking the Power of Manual Testing", 
        description: "Master the Software Testing Life Cycle and advanced test design techniques.",
        subTopics: [
          "Software Testing Life Cycle (STLC)",
          "Test Case Design Techniques",
          "Requirement Analysis & Traceability",
          "Bug Lifecycle & Defect Reporting",
          "Test Plan & Test Strategy",
          "Exploratory & Regression Testing",
          "Agile Testing Fundamentals"
        ],
        tools: ["JIRA", "TestRail", "Zephyr"]
      },
      { 
        week: "Course 2", 
        topic: "Fueling Test Automation with Python", 
        description: "Build robust automation scripts using Python and the pytest framework.",
        subTopics: [
          "Python Basics for Testers",
          "Functions, Modules & OOP",
          "File Handling & Exceptions",
          "pytest Framework",
          "Page Object Model (POM)",
          "Test Reports & CI Integration",
          "Intro to Selenium with Python"
        ],
        tools: ["Python", "pytest", "Selenium", "GitHub Actions"]
      },
      { 
        week: "Course 3", 
        topic: "Your Journey into Core Java Expertise", 
        description: "Deep dive into Java fundamentals tailored for enterprise automation.",
        subTopics: [
          "Java Fundamentals & OOP",
          "Collections Framework",
          "Exception Handling",
          "Multithreading Basics",
          "File I/O & Streams",
          "Java for Test Automation",
          "Build Tools (Maven/Gradle)"
        ],
        tools: ["Java 17+", "IntelliJ IDEA", "Maven"]
      },
      { 
        week: "Assessment", 
        topic: "🎓 MID-TERM VIVA", 
        description: "Comprehensive assessment of Manual Testing, Python, and Java modules.",
        subTopics: [
          "C1: Manual Testing Review",
          "C2: Python Automation Review",
          "C3: Core Java Review",
          "Live Q&A & Problem Solving"
        ]
      },
      { 
        week: "Course 4", 
        topic: "Powering Selenium with Java for Test Automation", 
        description: "Advanced web automation using Selenium 4 and TestNG.",
        subTopics: [
          "Selenium WebDriver Fundamentals",
          "Locators & XPath",
          "TestNG Framework",
          "Data-Driven Testing",
          "Page Object Model with Java",
          "Cross-Browser Testing",
          "Selenium Grid & Parallel Execution"
        ],
        tools: ["Selenium 4", "TestNG", "Jenkins", "BrowserStack"]
      },
      { 
        week: "Course 5", 
        topic: "A Practical Guide to API Testing with Postman", 
        description: "Validate RESTful services and microservices with Postman and REST-assured.",
        subTopics: [
          "REST API Fundamentals",
          "Postman Collections & Environments",
          "Writing Test Scripts in Postman (JS)",
          "API Chaining & Dynamic Data",
          "Newman CLI & CI Integration",
          "GraphQL API Testing Basics",
          "API Security Testing Overview"
        ],
        tools: ["Postman", "Newman", "REST-assured", "Swagger"]
      },
      { 
        week: "Course 6", 
        topic: "Developing Proficiency in SQL", 
        description: "Master database concepts and SQL for backend validation.",
        subTopics: [
          "Database Concepts & SQL Basics",
          "DDL, DML, DCL Commands",
          "Joins, Subqueries & Views",
          "Stored Procedures & Functions",
          "Indexes & Query Optimization",
          "SQL for Testers (DB Validation)",
          "Introduction to NoSQL Concepts"
        ],
        tools: ["MySQL", "PostgreSQL", "DBeaver"]
      },
    ],
    faqs: [
      { question: "Is there a mid-term assessment?", answer: "Yes, a mid-term Viva is included to track progress." },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((course) => course.id === id);
}
