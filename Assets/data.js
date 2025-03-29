


export const projects = [
    {
        id: 0,
        projectName: "OpenMat",
        stack: ["React.js", "Node.js", "Express.js", "CSS", "MySQL", "Sequelize", "Socket.io", "react-leaflet"],
        cardDesc: "A multi-sided platform for helping jiu-jitsu practioners find training places and partners outside the gym",
        liveStatus: false,
        imageURL: "./Assets/projects/wrestling.png"
    },

    {
        id: 1,
        projectName: "Forward",
        stack: ["Next.js", "MySQL", "CSS", "JWT", "Chart.js", "Prisma"],
        cardDesc: "A full-stack habit manager with check-in based progress tracking. Features include real-time graph and statistical analytics and adjustable calendar views",
        liveStatus: true,
        mobileIMG: "./Assets/projects/forwardMobile.png",
        imageURL: "./Assets/projects/Forward.png",
        extraIMG: ["./Assets/projects/forward1.png", "./Assets/projects/forward2.png", "./Assets/projects/forward3.png"],
        extraInfo: "Forward is a revision of a previous habit tracker I had built which was streak-based. I wanted to try a new version with a little more data interaction and complexity and decided to create a check-in based platform. This was definitely a challenge as it required me to build data processing layers to properly render grids and graph UIs. Further, it allowed me to experiment with Next.js!",
        liveLink: "https://forward-self.vercel.app/",
        gitLink: "https://github.com/choijake0207/forwards"
    },
    {
        id: 2,
        projectName: "Morph",
        stack: ["CSS"],
        extStack: null,
        cardDesc: "A collection of interactive components rendered in neumorphic, skeumorphic, and more styles",
        summary: null,
        liveStatus: false,
        imageURL: "./Assets/projects/morph.png",
        extraIMG: null,
        extraInfo: null,
        liveLink: null,
        gitLink: "https://github.com/choijake0207/Morph",
    },
    {
        id: 3,
        projectName: "Lifting-4-Dummies",
        stack: ["HTML", "CSS", "JavaScript"],
        extStack: null,
        cardDesc: "A client-side project designed to allow users to learn about fitness techniques in an interactive method through the use of clickable SVGs.",
        summary: "A client-side project designed to allow users to learn about fitness techniques in an interactive method through the use of clickable SVGs.",
        liveStatus: true,
        imageURL: "./Assets/projects/Lift1.png",
        extraIMG: ["./Assets/projects/Lift1.png","./Assets/projects/Lift2.png", "./Assets/projects/Lift3.png"],
        extraInfo: "Lifting-4-Dummies was solely just a passion project and an attempt to add fun interactivity to a purely client-side app. The clickable SVG paths were made via InkScape. I initially intended to use APIs for data fetching but couldn't find a reliable one and alternatively used a JSON datasheet created by GitHub user @OllieJennings.",
        liveLink: "https://choijake0207.github.io/Fit4Dummies/",
        gitLink: "https://github.com/choijake0207/Fit4Dummies"
    },
    {
        id: 4,
        projectName: "Tasker",
        stack: ["HTML", "CSS", "JavaScript", "@dnd-kit"],
        cardDesc: "A client-side personal KanBan board allowing users to create boards, customize columns, and drag-drop items.",
        summary: "A client-side personal KanBan board allowing users to create boards, customize columns, and drag-drop items.",
        liveStatus: true,
        imageURL: "./Assets/projects/Tasker3.png",
        extraIMG: ["./Assets/projects/Tasker3.png", "./Assets/projects/Tasker2.png", "./Assets/projects/Tasker1.png"],
        extraInfo: "Tasker was purely an experiment project that I created to test out the capacities of the @dnd-kit library. Seeing as how the most prevalent use of drag-and-drop interactions take place on task managers, calendars, and planners, I wanted to implement it myself. As a pure client-side application, Tasker uses local storage for persistent data across sessions.",
        liveLink: "https://choijake0207.github.io/Tasker/",
        gitLink: "https://github.com/choijake0207/Tasker",

    },
   
   
]

export const skills = [

  
    {
        id: 1,
        name: "HTML",
        logo: "./Assets/skills/HTMLVector.svg",
        type: "lang",
        use: "most"
    },  
    {
        id: 2,
        name: "CSS",
        logo: "./Assets/skills/CSSVector.svg",
        type: "lang",
        use: "most"
    }, 
    {
        id: 3,
        name: "JavaScript",
        logo: "./Assets/skills/JavaScriptVector.svg",
        type: "lang",
        use: "most"
    },
    {
        id: 4,
        name: "TypeScript",
        logo: "./Assets/skills/TypeScriptVector.png",
        type: "lang",
        use: "least"
    },
    {
        id: 5,
        name: "C#",
        logo: "./Assets/skills/CSharp.png",
        type: "lang",
        use: "least"
    },
    {
        id: 6,
        name: "React.js",
        logo: "./Assets/skills/ReactVector.svg",
        type: "fwlib",
        use: "most"
    },
    
    {
        id: 7,
        name: "Express.js",
        logo: "./Assets/skills/ExpressVector.svg",
        type: "fwlib",
        use: "most"
    },
    {
        id: 8,
        name: "Node.js",
        logo: "./Assets/skills/NodeVector.svg",
        type: "fwlib",
        use: "most"
    },
    {
        id: 9,
        name: "Next.js",
        logo: "./Assets/skills/next-js.svg",
        type:"fwlib",
        use: "most"
    },
    {
        id: 10,
        name: "Sequelize",
        logo: "./Assets/skills/SequelizeVector.svg",
        type: "fwlib",
        use: "moderate"
    },
    {
        id: 11,
        name: "Prisma",
        logo: "./Assets/skills/prisma-logo.svg",
        type: "fwlib",
        use: "moderate"
    }, 
    {
        id: 12,
        name: "Socket.io",
        logo: "./Assets/skills/SocketLogo.png",
        type: "fwlib",
        use: "moderate"
    },
    {
        id: 13,
        name: "Git",
        logo: "./Assets/skills/GitVector.svg",
        type: "tool",
        use: "most"
    },
    {
        id: 14,
        name: "MySQL",
        logo: "./Assets/skills/MySQLVector.svg",
        type: "tool",
        use: "most"
    },
 

    {
        id: 15,
        name: "Vitest",
        logo: "./Assets/skills/Vitest.webp",
        type: "tool",
        use: "least"
    },
   
  
    {
        id: 16,
        name: "Insomnia",
        logo: "./Assets/skills/insomnia.svg",
        type: "tool",
        use: "most"
    },

    {
        id: 17,
        name: "GraphQL",
        logo: "./Assets/skills/graphql.svg",
        type: "tool",
        use: "least"
    }, 
    {
        id: 18,
        name: "MongoDB",
        logo: "./Assets/skills/mongodb.svg",
        type: "tool",
        use: "least"
    }, 
    {
        id: 19,
        name: "AWS",
        logo: "./Assets/skills/AWS.png",
        type: "tool",
        use: "least"
    }



]