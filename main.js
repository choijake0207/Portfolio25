import { projects, skills } from "./Assets/data.js"
const body = document.querySelector(".body")


// let darkMode = true       
// body.classList.add(darkMode ? "dark" : "light")
// const toggleBTN = document.querySelector(".light-dark-toggle")
// const toggleIcon = document.querySelector(".light-dark-icon")

// function toggleDarkMode () {
//     if (!darkMode) {
//         toggleIcon.src = "./Assets/icons/moon-stars-bold.svg"
//         body.classList.remove("dark")
//         body.classList.add("light")
//     } else {
//         toggleIcon.src = "./Assets/icons/sun-bold.svg"
//         body.classList.remove("light")
//         body.classList.add("dark")
//     }
// }

// toggleBTN.addEventListener("click", () => {
//     darkMode = !darkMode
//     toggleDarkMode()
// })

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } 
        })
    })
    const elements = document.querySelectorAll(".intersection-hidden")
    elements.forEach(el => observer.observe(el))
    window.projectObserver = observer
    
})



// Projects Page
const projectPage = document.querySelector(".project-list")
let displayCount = 3
for (let i = 0; i < displayCount; i++) {
    let project = projects[i]
    createProjectCard(project)
}

function createProjectCard(project) {
    const card = document.createElement("li")
    card.classList.add("card", `${project.projectName}`, "intersection-hidden")
    card.innerHTML = ` 
        <div class="ss-wrap">
            ${project.id === 0 ? `<p>COMING SOON</p>` : ""}
            <img class="screenshot" src=${project.imageURL}></img>
        </div>
        <div class="card-body">
            <div class="card-header">
                <h2 class="card-title">${project.projectName}</h2>
                <div class="card-links-container">
                    <a target="_blank" href=${project.liveLink} class=${project.liveLink ? "demo-link" : "disabled-link"}>
                        ${project.liveLink ? "Demo" : "Coming Soon"}
                    </a>
                    <a target="_blank" href=${project.gitLink} class="code-link">Code</a>
                </div>
            </div>
            <p class="card-desc">${project.cardDesc}</p>
            <ul class="tech-list">
                ${project.stack.map(tech => `<li class="tech-item">${tech}</li>`).join("")}
            </ul>
        </div>
    `
    projectPage.appendChild(card)
    if (window.projectObserver) {
        window.projectObserver.observe(card)
    }
}

const moreBTN = document.querySelector(".more-btn")
moreBTN.addEventListener("click", () => {
    for (let i = displayCount; i < projects.length; i++) {
        let project = projects[i]
        createProjectCard(project)
    }
    displayCount = projects.length
    if (displayCount >= projects.length) {
        moreBTN.style.display = "none"
    }
})












// Skills Section

const langContainer = document.getElementById("lang")
const fwlibContainer = document.getElementById("fwlib")
const toolContainer = document.getElementById("tool")

for (let i = 0; i < skills.length; i++) {
    let skill = skills[i]
    createSkill(skill)
    
}

function createSkill(skill) {
    const skillBox = document.createElement("li")
    skillBox.classList.add("skill", `${skill.name}`, `${skill.use}`)
    skillBox.style.animationDelay = `${skill.id * 0.05}s`
    skillBox.innerHTML = `
        <img src=${skill.logo}>
        <p>${skill.name}</p>
    `
    switch (skill.type) {
        case "lang":
            langContainer.appendChild(skillBox);
            break;
        case "fwlib":
            fwlibContainer.appendChild(skillBox);
            break;
        case "tool":
            toolContainer.appendChild(skillBox);
            break;
    }
 
}
