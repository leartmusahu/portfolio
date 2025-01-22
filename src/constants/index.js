import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "November 2024 - January 2025",
    role: "Mobile App Developer - Intern",
    company: "Xpert Technologies",
    description: `Collaborate with the development team to create and maintain cross-platform mobile applications using the Ionic framework. Develop responsive and dynamic user interfaces using Angular. Assist in designing and implementing APIs and backend services using .NET Core. Work on integrating APIs with the frontend applications.`,
    technologies: ["Angular", "Ionic", ".NET Core"],
  },
];

export const PROJECTS = [
  {
    title: "Medical Web Application",
    image: project2,
    description:
      "A medical application for booking appointments and managing admin and doctor workflows.",
    technologies: ["Node.js", "React", "Express.js", "MSSQL", "MongoDB"],
  },
  {
    title: "Car Gallery",
    image: project1,
    description:
      "Interactive Audi RS7 showcase featuring animations, audio visualizations, and a dynamic color slider for exploring car colors.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },

  {
    title: "Booking App",
    image: project3,
    description:
      "A simplified Airbnb clone featuring booking management, image uploads, and property listings with dynamic data handling.",
    technologies: ["Node.js", "React", "Express.js", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Pristina, Kosovo ",
  phoneNo: "+383 43 880735",
  email: "leartmusahu@gmail.com",
};
