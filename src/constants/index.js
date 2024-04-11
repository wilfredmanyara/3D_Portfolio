import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer Simulation",
        company_name: "Skyscanner",
        icon: starbucks,
        iconBg: "#ffefd5",
        date: "May 2023 - July 2023",
        points: [
            "Innovatively designed and implemented a date selection page utilizing Skyscanner’s open-source Backpack React library, seamlessly integrated with Typescript for enhanced code clarity, and styled with the efficiency of Tailwind CSS for a visually appealing and intuitive user experience.",
            "Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.",
            "Customized my application and ran automated tests to ensure it rendered properly.",
        ],
    },
    {
        title: "Backend Engineer Simulation",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2023 - Nov 2023",
        points: [
            "Drafted a Unified Modelling Language (UML) class diagram which led to a 90% resolution of architectural issues and improved application performance by reducing response times by 25%.",
            "Refactored a messy codebase via Python inherited from another team, resulting in a 30% reduction in complexity. I also successfully eliminated 20 code smells and anti-patterns.",
            "Implemented unit tests and added new functionality using Test-Driven Development (TDD), which significantly reduced post-release bugs related to new functionality by 60%.",
        ],
    },
    {
        title: "Software Engineer Simulation",
        company_name: "Walmart",
        icon: shopify,
        iconBg: "#000039",
        date: "Aug 2023 - Oct 2023",
        points: [
            "Created an innovative Java heap data structure for Walmart's shipping department, resulting in a 25% improvement in order processing efficiency.",
            "Crafted a comprehensive UML class diagram for a data processor, encompassing 30 classes and 60 relationships to enhance system understanding and development efficiency.",
            "Designed an entity relationship diagram for a pet department database in SQL, accommodating 5,000 records and ensuring seamless data management.",
        ],
    },
    {
        title: "Full stack Developer Intern",
        company_name: "Azprod",
        icon: meta,
        iconBg: "#1974d2",
        date: "Sep 2023 - Mar 2024",
        points: [
            "Developing a robust PDF parsing module capable of accurately extracting information from diverse PDF formats, including text, images, and other relevant data.",
            "Integrating advanced NLP algorithms to enable the Chatbot to comprehend user queries, interpret PDF content, and generate contextually relevant responses.",
            "It also has an intuitive interface facilitating seamless user interaction.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/wilfredmanyara',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/wilfredmanyara/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Azprod',
        description: 'Developing a robust PDF parsing module capable of accurately extracting information from diverse PDF formats, including text, images, and other relevant data.',
        link: 'https://azprod-cyan.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Threads',
        description: 'Created a full-stack discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/wilfredmanyara/Threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'CarHub',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/wilfredmanyara/CarHub',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Snapgram',
        description: 'Built a full stack app, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/wilfredmanyara/Snapgram',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'RealEstate',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/wilfredmanyara/RealEstate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Web-AI',
        description: 'An app that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/wilfredmanyara/Web-AI',
    }
];
