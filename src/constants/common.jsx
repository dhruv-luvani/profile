import ReactSvg from "../assets/svg/React.svg"
import NextSvg from "../assets/svg/Next.svg"
import AWSSvg from "../assets/svg/AWS.svg"
import FirebaseSvg from "../assets/svg/Firebase.svg"
import gitSvg from "../assets/svg/git.svg"
import githubSvg from "../assets/svg/github.svg"
import gitlabSvg from "../assets/svg/gitlab.svg"
import reduxToolkitSvg from "../assets/images/redux-toolkit.png"
import javascriptSvg from "../assets/svg/javascript.svg"
import typescriptSvg from "../assets/svg/typescript.svg"
import bootstrapSvg from "../assets/svg/bootstrap.svg"
import tailwindCssSvg from "../assets/images/tailwind-css.png"
import htmlSvg from "../assets/svg/html.svg"
import NodeJSSvg from "../assets/svg/NodeJS.svg"
import explainLifeProject from "../assets/images/explainLifeProject.png"
import mizoramProject from "../assets/images/mizoramProject.png"
import unicornuiProject from "../assets/images/unicornuiProject.png"
import noImage from "../assets/images/noImageAvailable.jpg"

export const localStorageKey = "dhruvDemo_user_data"

export const projectData = [
    {
        "title": "Explain Life",
        "image": explainLifeProject,
        "skills": ["ReactJs", "Tailwind CSS", "Redux Toolkit"],
        "description": "Life insurance policy recommendation agent website with coverage calculation with NodeJS backend (Admin panel & User panel)."
    },
    {
        "title": "Semicolon Portfolio",
        "image": explainLifeProject,
        "skills": ["NextJs", "Tailwind CSS", "Firebase"],
        "description": "Company portfolio website with a focus on showcasing services and projects, built using Next.js and Tailwind CSS with Firebase Database."
    },
    {
        "title": "Fitness Administration Portal",
        "image": noImage,
        "skills": ["ReactJs", "Bootstrap", "Metronic Template"],
        "description": "Provide a fitness plan that includes workout videos, personalized calorie tracking, and dietary recommendations."
    },
    {
        "title": "Skyline Technology Administration Portal",
        "image": noImage,
        "skills": ["ReactJs", "Bootstrap", "Metronic Template"],
        "description": "Create an integrated administration portal for client, engineer, and sarine machine Management, facilitating machine repair services and timely resolution of upcoming complaints."
    },
    {
        "title": "Mizoram Library",
        "image": mizoramProject,
        "skills": ["ReactJs", "Tailwind CSS", "Redux Toolkit"],
        "description": "A government library website offering a wide range of books in various formats, ensuring accessibility and availability to users."
    },
    {
        "title": "3SquaresApp",
        "image": noImage,
        "skills": ["ReactJs", "Bootstrap"],
        "description": "Food delivery website by connecting users with a diverse selection of professional restaurants and providing seamless delivery services. (with User Site, Admin Panel, Corporate Panel and Provider Panel)."
    },
    {
        "title": "Special Days Administration Portal",
        "image": noImage,
        "skills": ["ReactJs", "Bootstrap", "Metronic Template"],
        "description": "Website dedicated to commemorating special occasions, offering advanced reminder functionalities and personalized party invitations to ensure memorable and organized celebrations."
    },
    {
        "title": "Unicorn-Ui",
        "image": unicornuiProject,
        "skills": ["ReactJs", "Bootstrap", "Metronic Template"],
        "description": "Collection of premium UI design templates encompassing diverse topics, providing a paid facility for professionals seeking high-quality. (User panel & Admin Panel)."
    }
]

export const skillsData = [
    { name: "React Js", image: ReactSvg },
    { name: "Next Js", image: NextSvg },
    { name: "AWS amplify", image: AWSSvg },
    { name: "Firebase", image: FirebaseSvg },
    { name: "Git", image: gitSvg },
    { name: "GitHub", image: githubSvg },
    { name: "GitLab", image: gitlabSvg },
    { name: "Redux Toolkit", image: reduxToolkitSvg },
    { name: "Javascript", image: javascriptSvg },
    { name: "Typescript", image: typescriptSvg },
    { name: "Bootstrap CSS", image: bootstrapSvg },
    { name: "Tailwind CSS", image: tailwindCssSvg },
    { name: "HTML", image: htmlSvg },
    { name: "Node Js (learning)", image: NodeJSSvg },
];
