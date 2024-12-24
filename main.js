







// Tab Content Selection //
let contentType = "PROJECTS"



const tabs = document.querySelectorAll(".tab")
const pages = document.querySelectorAll(".tab-content")
tabs.forEach(tab => {
    tab.addEventListener("click", event => {

        const tabType = event.target.innerText.trim()

        pages.forEach(page => {
            page.classList.remove("active")
        })

        document.getElementById(tabType).classList.add("active")
    })
})

