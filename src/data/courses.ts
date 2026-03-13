export interface Course {
  id: string;
  title: string;
  duration: string;
  image: string;
  techStack: string[];
  color: string;
  description: string;
  curriculum: string[];
  highlights: string[];
}

export const coursesData: Record<string, Course[]> = {
  'Full Stack Development': [
    {
      id: 'java-fs',
      title: 'JAVA- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      image: 'https://picsum.photos/seed/java/800/500',
      techStack: ['java', 'mysql', 'spring', 'python'],
      color: 'bg-[#9370DB]',
      description: 'Master Java Full Stack development with a focus on modern Generative AI integration. This comprehensive program covers everything from core Java to advanced microservices and AI-driven development.',
      curriculum: [
        'Core Java & Advanced Java',
        'Spring Boot & Microservices',
        'Database Management with MySQL',
        'Frontend with React & Tailwind',
        'Generative AI for Developers',
        'System Design & Architecture'
      ],
      highlights: [
        '100% Placement Assistance',
        'Real-world Capstone Projects',
        'Mentorship from IIT Alumni',
        'AI-Powered Coding Assistants'
      ]
    },
    {
      id: 'mern-fs',
      title: 'MERN- Full Stack Development With Gen AI',
      duration: '8 MONTHS',
      image: 'https://picsum.photos/seed/mern/800/500',
      techStack: ['html5', 'css3', 'react', 'nodejs', 'javascript', 'mongodb'],
      color: 'bg-[#008B45]',
      description: 'Become a pro MERN stack developer. Learn to build scalable web applications using MongoDB, Express, React, and Node.js, enhanced with the latest Gen AI tools for faster development.',
      curriculum: [
        'Advanced JavaScript & ES6+',
        'React.js & State Management',
        'Node.js & Express Backend',
        'MongoDB Database Design',
        'Gen AI Integration in MERN',
        'Deployment & Cloud Basics'
      ],
      highlights: [
        'Hands-on MERN Projects',
        'Industry-Ready Portfolio',
        'Mock Interviews & Soft Skills',
        'Access to Hiring Network'
      ]
    }
  ],
  'Data Analytics': [
    {
      id: 'data-analytics',
      title: 'Data Analytics Certification',
      duration: '6 MONTHS',
      image: 'https://picsum.photos/seed/analytics/800/500',
      techStack: ['mysql', 'python', 'excel', 'powerbi'],
      color: 'bg-[#4682B4]',
      description: 'Master the art of data storytelling. Learn to analyze complex datasets and create impactful visualizations using industry-standard tools like Python, SQL, and Power BI.',
      curriculum: [
        'Advanced Excel for Analytics',
        'SQL for Data Science',
        'Python for Data Analysis',
        'Data Visualization with Power BI',
        'Statistical Analysis',
        'Business Intelligence Fundamentals'
      ],
      highlights: [
        'Case Studies from Real Data',
        'Power BI Certification Prep',
        'SQL Mastery for Interviews',
        'Business Communication Training'
      ]
    }
  ]
};

export const getAllCourses = () => {
  return Object.values(coursesData).flat();
};

export const getCourseById = (id: string) => {
  return getAllCourses().find(course => course.id === id);
};
