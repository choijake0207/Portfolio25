import { projects } from "./Assets/data.js"
// Light Dark Mode
const body = document.querySelector(".body")
let darkMode = true       
body.classList.add(darkMode ? "dark" : "light")
const toggleBTN = document.querySelector(".light-dark-toggle")
const toggleIcon = document.querySelector(".light-dark-icon")


function toggleDarkMode () {
    if (!darkMode) {
        toggleIcon.src = "./Assets/moon-stars-bold.svg"
        body.classList.remove("dark")
        body.classList.add("light")
    } else {
        toggleIcon.src = "./Assets/sun-bold.svg"
        body.classList.remove("light")
        body.classList.add("dark")
    }
}

toggleBTN.addEventListener("click", () => {
    darkMode = !darkMode
    toggleDarkMode()
})




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
        <div class="ss-wrap">
            <img class="screenshot" src=${project.imageURL}>
        </div>
        <h2 class="card-title">${project.projectName}</h2>
        <p class="card-desc">${project.cardDesc}</p>

    `

    const hoverWrap = document.createElement("div")
    hoverWrap.classList.add("hover-wrap")
    const hoverBTN = document.createElement("button")
    hoverBTN.classList.add("modal-button")
    hoverBTN.textContent = "View More"
   
    card.addEventListener("click", handleCardEvent)
    card.addEventListener("mouseover", (event) => handleCardEvent(event, hoverWrap))
    card.addEventListener("mouseout", (event) => handleCardEvent(event, hoverWrap))

    hoverWrap.appendChild(hoverBTN)
    card.appendChild(hoverWrap)
    projectPage.appendChild(card)
}

function handleCardEvent(event, hoverWrap) {
    switch (event.type) {
        case "mouseover":
            hoverWrap.classList.add("hover-visible")
            break;
        case "mouseout":
            if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {    
                hoverWrap.classList.remove("hover-visible")
                hoverWrap.classList.add("hover-invisible")
                setTimeout(() => {
                    hoverWrap.classList.remove("hover-invisible")
                }, 500)
            }
            break;
    }

}