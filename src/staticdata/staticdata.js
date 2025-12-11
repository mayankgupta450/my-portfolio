// Skills Section Logo's
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import angularLogo from "../assets/tech_logo/angular.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import materialuiLogo from "../assets/tech_logo/materialui.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import springbootLogo from "../assets/tech_logo/springboot.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import javaLogo from "../assets/tech_logo/java.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";

// Experience Section Logo's
import nagarroLogo from "../assets/company_logo/nagarro.png";
import atcsLogo from "../assets/company_logo/atcs.png";

// Project Section Logo's
import githubdetLogo from "../assets/work_logo/github_det.png";
import csprepLogo from "../assets/work_logo/cs_prep.png";
import movierecLogo from "../assets/work_logo/movie_rec.png";
import taskremLogo from "../assets/work_logo/task_rem.png";
import npmLogo from "../assets/work_logo/npm.png";
import webverLogo from "../assets/work_logo/web_dig.png";
import cmLogo from "../assets/work_logo/cm.png";
import imagesearchLogo from "../assets/work_logo/image_search.png";
import removebgLogo from "../assets/work_logo/remove_bg.png";
import sspsLogo from "../assets/education_logo/ssps_logo.png";
import jecrcLogo from "../assets/education_logo/jecrc_logo.png";
import WorkfrontLogo from "../assets/tech_logo/workfront_logo.png";
// import powerappsLogo from '../assets/tech_logo/powerapps_logo'

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Workfront", logo: WorkfrontLogo },
      { name: "Workfront Fusion", logo: WorkfrontLogo },
      { name: "PowerApps", logo: WorkfrontLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: nagarroLogo,
    role: "Engineer",
    company: "Nagarro",
    date: "Jan 2024 - Present",
    desc: `🚀 Led the modernization of legacy InfoPath workflows by building PowerApps solutions from scratch and integrating them with SharePoint.
🔐 Developed role-based React applications to manage and visualize large datasets with advanced table actions, filters, sorting, and CRUD operations.
⚡ Enhanced performance using useMemo, lazy loading, and Context API for clean architectural design and faster rendering.
📊 Built a high-performance dashboard with dynamic filters and virtualized dropdowns to keep the UI smooth—even with large-scale data.`,
    skills: [
      "React.js",
      "Spring Boot",
      "Java",
      "REST APIs",
      "PowerApps",
      "Workfront Fusion",
    ],
  },
  {
    id: 1,
    img: nagarroLogo,
    role: "Associate Engineer",
    company: "Nagarro",
    date: "Jan 2023 - Mar 2024",
    desc: "🚀 Contributed as an Associate Engineer to Java-based application development using JPA/Hibernate, JSP, REST APIs, and Spring Framework, while also building a fully responsive single-page application using Angular 📍.",
    skills: [
      "JPA/Hibernate",
      "JSP",
      "Java",
      "Spring Framework",
      "Angular",
      "MySQL",
    ],
  },
  {
    id: 2,
    img: atcsLogo,
    role: "Trainee Engineer - Java",
    company: "ATCS Inc.",
    date: "Jul 2022 - Dec 2022",
    desc: "🚀 Full-time Trainee Engineer gaining hands-on experience in ☕ Java, 🌿 Spring Boot, 🗄️ MySQL, and 🧩 JPA/Hibernate. Worked on real production applications, contributing to backend enhancements and supporting modules integrated with Workfront.",
    skills: [
      "Spring Framework",
      "Spring Boot",
      "Java",
      "REST APIs",
      "MySQL",
      "Workfront",
    ],
  },
  {
    id: 3,
    img: atcsLogo,
    role: "Internship Trainee",
    company: "ATCS Inc.",
    date: "Jan 2022 - Jul 2022",
    desc: "🎓 Remote intern gaining foundational backend skills in Core Java, Spring Framework, and REST API development.",
    skills: [
      "Spring Framework",
      "REST APIs",
      "Java",
      "HTML",
      "CSS",
      "Java Script",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: jecrcLogo,
    school: "JECRC University",
    date: "Sept 2018 - Aug 2022",
    grade: "73.2%",
    desc: "I completed my B.Tech in Computer Science Engineering (CSE). During my studies, I built a strong foundation in frontend development along with basic backend concepts. I worked on projects involving HTML, CSS, JavaScript, React, and also explored APIs, databases, and server-side fundamentals. My B.Tech journey helped me develop practical problem-solving skills and real development experience.",
    degree: "B.Tech in Computer Science Engineering (CSE)",
  },
  {
    id: 1,
    img: sspsLogo,
    school: "Saint Soldier Public School",
    date: "Apr 2017 - March 2018",
    grade: "70%",
    desc: "I completed my class 12 education from Saint Soldier Public School, Jaipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - Science & Maths",
  },
  {
    id: 2,
    img: sspsLogo,
    school: "Saint Soldier Public School Jaipur, Rajasthan",
    date: "Apr 2015 - March 2016",
    grade: "76%",
    desc: "I completed my class 10 education from Saint Soldier Public School, Jaipur, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ecommerse Website",
    description:
      "A fully responsive **E-commerce web application** built using **React** and **Tailwind CSS**, featuring an intuitive **Dark Mode** for enhanced UX. Implemented **Context API** for efficient product data management and **Redux Toolkit** for smooth Add-to-Cart state handling. Integrated fast and secure **Clerk authentication (Sign In/Sign Up)** for a production-ready flow. The project also demonstrates modern **React concepts** like **Lazy Loading**, **Reusable Components**, and **Performance Optimization** throughout the application.",
    image: githubdetLogo,
    tags: [
      "React JS",
      "Redux ToolKit",
      "Context-API",
      "Lazy-Loading",
      "Tailwind-CSS",
    ],
    github: "https://github.com/mayankgupta450/my-ecommerce",
    webapp: "https://my-ecommerce-eight-sigma.vercel.app/",
  },
];
