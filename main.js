import { projects } from "./Assets/data.js"
// Light Dark Mode
let darkMode = true
const toggleBTN = document.querySelector(".light-dark-toggle")
const toggleIcon = document.querySelector(".light-dark-icon")
const body = document.querySelector(".body")

toggleBTN.addEventListener("click", () => {
    darkMode = !darkMode
    if (!darkMode) {
        toggleIcon.src = "./Assets/moon-stars-bold.svg"
        body.classList.remove("dark")
        body.classList.add("light")
    } else {
        toggleIcon.src = "./Assets/sun-bold.svg"
        body.classList.remove("light")
        body.classList.add("dark")
    }
    console.log(darkMode)
} )





// Tab Selection //
const tabs = document.querySelectorAll(".tab")

const pages = document.querySelectorAll(".tab-content")
tabs.forEach(tab => {
    tab.addEventListener("click", event => {

        const tabType = event.target.innerText.trim()

        pages.forEach(page => {
            page.classList.remove("active-page")
        })

        tabs.forEach(tab => {
            tab.classList.remove("active-tab")
        })

        tab.classList.add("active-tab")

        document.getElementById(tabType).classList.add("active-page")
    })
})

// Projects Page
const projectPage = document.getElementById("PROJECTS")
const modal = document.createElement("div")
modal.classList.add("modal")

for (let i = 0; i < projects.length; i++) {
    let project = projects[i]
    createProjectCard(project)
}

function createProjectCard(project) {
    const card = document.createElement("li")
    card.classList.add("card", `${project.projectName}`)
    card.innerHTML = ` 
        <h2>${project.projectName}</h2>
        <img class="screenshot" src=${project.imageURL}>

    `
   

    const shortSum = document.createElement("p")
    shortSum.classList.add("shortSum")
    shortSum.textContent = project.summary


    card.addEventListener("click", handleCardEvent)
    card.addEventListener("mouseover", (event) => handleCardEvent(event, shortSum))
    card.addEventListener("mouseout", (event) => handleCardEvent(event, shortSum))

    card.appendChild(shortSum)
    projectPage.appendChild(card)
}

function handleCardEvent(event, shortSum) {
    switch (event.type) {
        case "mouseover":
            shortSum.classList.add("ss-visible")
            break;
        case "mouseout":
            shortSum.classList.remove("ss-visible")
            break;
    }

}