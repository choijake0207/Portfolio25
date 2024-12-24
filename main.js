
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





// Tab Content Selection //




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

