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





// Projects Page
const projectPage = document.querySelector(".project-list")
for (let i = 0; i < projects.length; i++) {
    let project = projects[i]
    createProjectCard(project)
}

function createProjectCard(project) {
    const card = document.createElement("li")
    card.classList.add("card", `${project.projectName}`)
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
}



const modal = document.createElement("div")
modal.classList.add("modal")

const modalWrap = document.createElement("div")
modalWrap.classList.add("modal-wrap", "mw-hidden")
modalWrap.appendChild(modal)
body.appendChild(modalWrap)




function populateModal(id) {
    modal.innerHTML = ``
    const closeModalBTN = document.createElement("button")
    closeModalBTN.classList.add("modal-close-btn")
    closeModalBTN.innerHTML = `<img src="./Assets/icons/x-circle.svg"/>`
    closeModalBTN.addEventListener("click", toggleModal)
    modal.appendChild(closeModalBTN)

    const project = projects[id]
    modal.classList.add(project.projectName)
    const carouselWrap = document.createElement("div")
    carouselWrap.classList.add("carousel-wrap")
    const carouselContainer = document.createElement("div")
    carouselContainer.classList.add("carousel-container")
    const prevBtn = document.createElement("button")
    prevBtn.innerHTML = `<img src="./Assets/icons/prev.svg"/>`
    prevBtn.classList.add("carousel-btn-prev")
    const nextBtn = document.createElement("button")
    nextBtn.innerHTML = `<img src="./Assets/icons/next.svg"/>`
    nextBtn.classList.add("carousel-btn-next")
    const carousel = document.createElement("ul")
    carousel.classList.add("carousel")
    carouselWrap.append(prevBtn, carouselContainer, nextBtn)
    carouselContainer.appendChild(carousel)
    

    for (let i = 0; i < project.extraIMG.length; i++) {
        const source = project.extraIMG[i]
        const img = document.createElement("img")
        img.classList.add("carousel-image")
        img.src = source
        carousel.appendChild(img)
    }
    modal.appendChild(carouselWrap)

    let currentImg = 0;
    let images = carousel.querySelectorAll(".carousel-image")
    nextBtn.addEventListener("click", () => {
        currentImg = (currentImg + 1) % 3
            const width = images[0].clientWidth
            carousel.style.transform = `translateX(-${currentImg * width}px)`

        
    })

    const modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")
    modalHeader.innerHTML = `
        <h2>${project.projectName}</h2>
        <div class="links-container">
            <a class="modal-gh-link" href="${project.gitLink}" target="_blank">View Code</a>
            <a class="modal-live-link ${project.liveLink === null ? "null-link" : ""}" target="_blank" href="${project.liveLink}">${project.liveLink === null ? "Coming Soon" : "View Demo"}</a>
        </div>
    `
    modal.appendChild(modalHeader)

    const techList = document.createElement("ul")
    techList.classList.add("tech-list")
    for(let j = 0; j < project.stack.length; j++) {
        const techItem = document.createElement("li")
        techItem.textContent = project.stack[j]
        techItem.classList.add("tech-item")
        techList.appendChild(techItem)
    }
    if (project.extStack) {
        for (let j = 0;  j < project.extStack.length; j++) {
            const extItem = document.createElement("li")
            extItem.textContent = project.extStack[j]
            extItem.classList.add("ext-item")
            techList.appendChild(extItem)
        }
    }
    modal.appendChild(techList)

    const extraInfo = document.createElement("p")
    extraInfo.classList.add("modal-extra-info")
    extraInfo.textContent = project.extraInfo
    modal.appendChild(extraInfo)
}



function toggleModal(id) {
    if (modalWrap.classList.contains("mw-hidden")) {
        modalWrap.classList.remove("mw-hidden")
        body.classList.add("no-scroll")
        populateModal(id)
    } else {
        body.classList.remove("no-scroll")
        modalWrap.classList.add("mw-hidden")
        modal.className="modal"
    }
}





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
