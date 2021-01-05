function editNav() {
    var x = document.getElementById("myTopnav")
    if (x.className === "topnav") {
        x.className += " responsive"
    } else {
        x.className = "topnav"
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")

const closeModalBtn = document.querySelectorAll(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
    modalbg.style.display = "block"
}

//  close modal
function closeModal() {
    modalbg.style.display = "none"
}
closeModalBtn.forEach((close) => close.addEventListener("click", closeModal))

// Fields validation
document
    .getElementById("btn-submit")
    .addEventListener("click", function (event) {
        event.preventDefault()
    })
