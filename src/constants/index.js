export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Cloud Computing",
        icon: "cloud",
    },
    {
        title: "Frontend Developer",
        icon: "code",
    },
    {
        title: "Backend Developer",
        icon: "server",
    },
    {
        title: "Placement Coordinator",
        icon: "users",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "html",
    },
    {
        name: "CSS 3",
        icon: "css",
    },
    {
        name: "JavaScript",
        icon: "javascript",
    },
    {
        name: "React JS",
        icon: "react",
    },
    {
        name: "Tailwind CSS",
        icon: "tailwind",
    },
    {
        name: "Three JS",
        icon: "threejs",
    },
    {
        name: "Python",
        icon: "python",
    },
    {
        name: "C++",
        icon: "cpp",
    },
    {
        name: "git",
        icon: "git",
    },
    {
        name: "docker",
        icon: "docker",
    },
];

const experiences = [
    {
        title: "Placement Coordinator",
        company_name: "Parul University",
        icon: "university",
        iconBg: "#383E56",
        date: "Jan 2024 - Present",
        points: [
            "Coordinated placement drives for 100+ students.",
            "Managed communication between companies and the university.",
            "Organized mock interviews and coding rounds.",
            "Facilitated smooth execution of recruitment processes.",
        ],
    },
];

const projects = [
    {
        name: "Online Clothing Store",
        description:
            "A dynamic single-page application (SPA) built with React, SCSS, and Vite. Features reusable components, optimized structure, and a modern responsive design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "vite",
                color: "green-text-gradient",
            },
        ],
        image: "clothing_store",
        source_code_link: "https://github.com/",
    },
    {
        name: "Catch-Call-Fraud",
        description:
            "AI-based fraud detection system using OpenAI Whisper and Google Gemini. Transcribes Hindi calls and detects potential fraud patterns.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "openai",
                color: "green-text-gradient",
            },
            {
                name: "gemini",
                color: "pink-text-gradient",
            },
        ],
        image: "catch_call_fraud",
        source_code_link: "https://github.com/",
    },
];

const certifications = [
    {
        name: "AWS Cloud Practitioner",
        issuer: "AWS",
        image: "aws",
    },
    {
        name: "Smart Coder (Advanced DSA)",
        issuer: "Smart Interviews",
        image: "smartinterviews",
    },
    {
        name: "Computer Network and Internet Protocol",
        issuer: "NPTEL",
        image: "nptel",
    },
];

const codingProfiles = [
    {
        name: "LeetCode",
        rating: "Rating: 1430",
        link: "https://leetcode.com/",
        color: "text-yellow-500",
    },
    {
        name: "CodeChef",
        rating: "Rating: 1284",
        link: "https://www.codechef.com/",
        color: "text-orange-500",
    },
    {
        name: "Codeforces",
        rating: "Rating: 911",
        link: "https://codeforces.com/",
        color: "text-blue-500",
    },
];

export { services, technologies, experiences, projects, certifications, codingProfiles };
