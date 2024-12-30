import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for data science.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring with new Python and JS libraries.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    pid: "Project_1",
    title: "Car Sales Analyzing Dashboard",
    des: "An interactive dashboard displaying key sales metrics, growth trends, and budget insights with clean visualizations for easy analysis.",
    img: "/w1.jpg",
    iconLists: ["/powerbi.png", "/excel.png", "Git-hub.png", "mysql2.svg"],
    link: "https://github.com/Ahamed-Safnas/Car-Analyzing-Dashboard",
  },
  {
    id: 2,
    pid: "Project_2",
    title: "Churn Analysis Dashboard",
    des: "Dashboard analyzing customer churn with insights on top reasons (competitor deals, dissatisfaction), contract types, and churn trends by state and category.",
    img: "/w2.jpg",
    iconLists: ["/tableau.png", "/excel.png", "Git-hub.png", "postgresql.png"],
    link: "https://public.tableau.com/shared/N3CXBY4CF?:display_count=n&:origin=viz_share_link",
  },
  {
    id: 3,
    pid: "Project_3",
    title: "Loan Approval Prediction Model",
    des: "Machine learning solution to automate loan eligibility checks, utilizing Logistic Regression, Decision Tree, and Random Forest models to analyze customer details.",
    img: "/w3.jpg",
    iconLists: [
      "/python.png",
      "/javascript.png",
      "/vscode.png",
      "/fastapi.svg",
      "/llm.svg",
    ],
    link: "https://github.com/Ahamed-Safnas?tab=repositories",
  },
  {
    id: 4,
    pid: "Project_4",
    title: "Employee Overview Dashboard",
    des: "A comprehensive dashboard showcasing workforce metrics: total employees, active/inactive counts, attrition rate, hiring trends, departmental distribution, and job role insights for strategic analysis.",
    img: "/w4.jpg",
    iconLists: ["/powerbi.png", "/excel.png", "Git-hub.png"],
    link: "https://github.com/Ahamed-Safnas/HR-Analytics",
  },
];

export const testimonials = [
  {
    quote:
      "A data enthusiast driven by curiosity, I thrive on solving complex problems with innovative, data-driven solutions. From optimizing algorithms to crafting user-friendly web experiences, I’m passionate about creating impactful, intelligent systems that make a difference.",
    name: "Ahamed Safnas",
    title: "Data Scientist",
    img: "/picofme.png",
  },
  {
    quote:
      " I developed a strong foundation in computer systems engineering. I honed my skills in problem-solving, algorithm optimization, and system design, while fostering a passion for creating innovative, user-centric solutions that address real-world challenges.",
    name: "NED University of Engineering & Technology",
    title: "BE.Computer System Engineer",
    img: "/ned1.png",
  },
  {
    quote:
      "At D.S. Senanayake College, I built a strong academic foundation through my Ordinary and Advanced Level studies. This experience shaped my analytical thinking, discipline, and commitment to excellence, preparing me for future challenges and achievements.",
    name: "D.S Senanayake College",
    title: "Ordinary and Advanced Level",
    img: "/ds.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Tableau",
    img: "/tableau.png",
  },
  {
    id: 2,
    name: "PowerBI",
    img: "/powerbi.png",
  },
  {
    id: 3,
    name: "OpenAI",
    img: "/openai.svg",
  },
  {
    id: 4,
    name: "Python",
    img: "/python.png",
  },
  {
    id: 5,
    name: "JavaScript",
    img: "/javascript.png",
  },
  {
    id: 6,
    name: "HuggingFace",
    img: "/hf1.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python Developer Intern",
    desc: "Developed a Flask API to extract text from images, offering a user-friendly interface.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Power BI Dashboard Project",
    desc: "Developed an interactive Power BI dashboard for data visualization and reporting.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Portfolio Web App Project",
    desc: "Developed a portfolio website using Next.js, Node.js, and npm, from design to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Air Quality Prediction System",
    desc: "Researched and developed a linear regression model to predict PM2.5 and PM10 levels",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Ahamed-Safnas",
  },
  {
    id: 2,
    img: "/x.svg",
    link: "https://x.com/Ahmd_Safnas",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/ahamed-safnas-8a968723b",
  },
  {
    id: 4,
    img: "/wa.svg",
    link: "https://wa.me/qr/YK64YNNDKLN6M1",
  },
];
