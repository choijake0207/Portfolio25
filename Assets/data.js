


export const projects = [
    {
        id: 0,
        projectName: "Echo",
        stack: ["React.js", "Express.js", "Node.js", "MySQL", "CSS"],
        extStack: [
            "Rest API", "JWT"
        ],
        cardDesc: "Social media app",
        summary: "Full-stack social media application where users are able to post, like, comment on, and save media",
        extSummary: "Echo",
        liveStatus: false,
        imageURL: "./Assets/EchoDemo.png",
        extraIMG: ["./Assets/EchoDemo.png"],
        extraInfo: "Echo was my first attempt at a full-stack project and was by far the most educational project. It was a jump into the deep end and posed many challenges I had no experience with. But, in retrospect, it was the perfect project to help me see what I didn't know. I had never used JSON web tokens, large-scale states, or even tried to set up a back-end with databases and route handling. However, through trial and error, online resources, and lots of refractoring, I was able to gain experience with new tools and frameworks.",
        liveLink: null,
        gitLink: "https://github.com/choijake0207/EchoV1",
    },
    {
        id: 1,
        projectName: "Lifting-4-Dummies",
        stack: ["HTML", "CSS", "JavaScript"],
        extStack: null,
        cardDesc: "Guide for weight lifting",
        summary: "A client-side project designed to allow users to learn about fitness techniques in an interactive method through the use of clickable SVGs.",
        liveStatus: true,
        imageURL: "./Assets/projects/Lift1.png",
        extraIMG: ["./Assets/projects/Lift1.png","./Assets/projects/Lift1.png", "./Assets/projects/Lift2.png"],
        extraInfo: "Lifting-4-Dummies was solely just a passion project and an attempt to add fun interactivity to a purely client-side app. The clickable SVG paths were made via InkScape. I initially intended to use APIs for data fetching but couldn't find a reliable one and alternatively used a JSON datasheet created by GitHub user @OllieJennings.",
        liveLink: "https://choijake0207.github.io/Fit4Dummies/",
        gitLink: "https://github.com/choijake0207/Fit4Dummies"
    },
    
    {
        id: 2,
        projectName: "Tasker",
        stack: ["HTML", "CSS", "JavaScript"],
        extStack: ["@dnd-kit"],
        cardDesc: "Personal kanban board",
        summary: "A client-side personal KanBan board allowing users to create boards, customize columns, and drag-drop items.",
        liveStatus: true,
        imageURL: "./Assets/projects/Tasker3.png",
        extraIMG: ["./Assets/projects/Tasker3.png", "./Assets/projects/Tasker2.png", "./Assets/projects/Tasker1.png"],
        extraInfo: "Tasker was purely an experiment project that I created to test out the capacities of the @dnd-kit library. Seeing as how the most prevalent use of drag-and-drop interactions take place on task managers, calendars, and planners, I wanted to implement it myself. As a pure client-side application, Tasker uses local storage for persistent data across sessions.",
        liveLink: "https://choijake0207.github.io/Tasker/",
        gitLink: "https://github.com/choijake0207/Tasker",

    },
    {
        id: 3,
        projectName: "Habit.io",
        stack: ["React.js", "Express.js", "Node.js", "MySQL", "CSS"],
        extStack: ["Rest API"],
        cardDesc: "Habit management app",
        summary: "Full-stack habit management platform allowing users to create, pause, and reset habits and duration-based goals. Users are able to view all habit data including number of resets, number of completed goals, and more.",
        extraInfo: "Habit is my second full-stack project but in this instace, I wanted to try to create something that revolved around a lot of data interaction. Habit's features such as starting, resetting, and cancelling duration based goals were a good place to practice such interactions. Currently, this project is being redone in TypeScript!",
        liveStatus: false,
        imageURL: "./Assets/projects/Habit1.png",
        extraIMG: ["./Assets/projects/Habit1.png", "./Assets/projects/Habit2.png", "./Assets/projects/Habit3.png"],
        liveLink: null,
        gitLink: "https://github.com/choijake0207/Habit.io"
    }
   
]

export const skills = [

    {
        id: 0,
        name: "React.js",
        logo: "./Assets/skills/ReactVector.svg",
        type: "fwlib",
        use: "most"
    },
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
        name: "Express.js",
        logo: "./Assets/skills/ExpressVector.svg",
        type: "fwlib",
        use: "moderate"
    },
    {
        id: 5,
        name: "Node.js",
        logo: "./Assets/skills/NodeVector.svg",
        type: "fwlib",
        use: "moderate"
    },
    {
        id: 6,
        name: "Sequelize",
        logo: "./Assets/skills/SequelizeVector.svg",
        type: "fwlib",
        use: "moderate"
    },
    {
        id: 7,
        name: "Jest",
        logo: "./Assets/skills/JestVector.svg",
        type: "fwlib",
        use: "least"
    },
    {
        id: 8,
        name: "Git",
        logo: "./Assets/skills/GitVector.svg",
        type: "tool",
        use: "most"
    },
    {
        id: 9,
        name: "MySQL",
        logo: "./Assets/skills/MySQLVector.svg",
        type: "tool",
        use: "moderate"
    },
    {
        id: 10,
        name: "TypeScript",
        logo: "./Assets/skills/TypeScriptVector.png",
        type: "lang",
        use: "moderate"
    }


]