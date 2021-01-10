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
// const formData = document.querySelectorAll(".formData")

const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const tournois = document.getElementById("quantity")
const radios = document.querySelectorAll("input[name='location']")
const conditions = document.getElementById("checkbox1")

const errorFirst = document.querySelector(".error-first")
const errorLast = document.querySelector(".error-last")
const errorEmail = document.querySelector(".error-email")
const errorBirthdate = document.querySelector(".error-birthdate")
const errorTournois = document.querySelector(".error-tournois")
const errorRadio = document.querySelector(".error-radio")
const errorConditions = document.querySelector(".error-conditions")

// const form = document.getElementById("form")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// launch modal form
function launchModal() {
    modalbg.style.display = "block"
}

//  close modal

const closeModalBtn = document.querySelectorAll(".close")

function closeModal() {
    modalbg.style.display = "none"
}
closeModalBtn.forEach((close) => close.addEventListener("click", closeModal))

function checkRadios() {
    let radioChecked = 0
    for (const radio of radios) {
        if (radio.checked) {
            radioChecked++
        }
        if (radioChecked > 0) return true
    }
    return false
}

// console.log(checkRadios())

// Tester toutes les fonctionnalités des boutons et des entrées de formulaire
document
    .getElementById("btn-submit")
    .addEventListener("click", function (event) {
        let error = 0

        let regexFirst = /^[A-Za-z]{2,75}$/.test(first.value)

        let regexLast = /^[A-Za-z]{2,75}$/.test(last.value)

        let regexMail = /^\S+@\S+\.\S+$/.test(email.value)

        let regexbirthdate = /^[1-2]\d{3}-(((0)[0-9])|((1)[0-2]))-([0-2][0-9]|(3)[0-1])$/.test(
            birthdate.value
        )

        if (first.value === "" || !regexFirst) {
            errorFirst.innerHTML =
                "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
            error++
        } else {
            errorFirst.innerHTML = ""
        }

        if (last.value === "" || !regexLast) {
            errorLast.innerHTML =
                "Veuillez entrer 2 caractères ou plus pour le champ du nom."
            error++
        } else {
            errorLast.innerHTML = ""
        }

        if (email.value === "" || !regexMail) {
            errorEmail.innerHTML = "Vous devez entrer un email valide."
            error++
            // console.log(email.value)
        } else {
            errorEmail.innerHTML = ""
        }

        if (birthdate.value === "" || !regexbirthdate) {
            errorBirthdate.innerHTML =
                "Vous devez entrer votre date de naissance."
            error++
            // console.log(birthdate.value)
        } else {
            errorBirthdate.innerHTML = ""
        }

        if (tournois.value === "" || tournois.value < 0) {
            errorTournois.innerHTML = "une valeur numérique doit être saisie."
            error++
        } else {
            errorTournois.innerHTML = ""
        }

        if (!checkRadios()) {
            errorRadio.innerHTML = "Une ville doit être sélectionnée."
            error++
        } else {
            errorRadio.innerHTML = ""
        }

        if (!conditions.checked) {
            errorConditions.innerHTML =
                "vous devez accepter les termes et conditions."
            error++
        } else {
            errorConditions.innerHTML = ""
        }

        console.log("Il y a " + error + " erreur(s)")

        if (error > 0) {
            event.preventDefault()
        }

        if (error < 1) {
            alert("Merci ! Votre réservation a été reçue.")
        }
    })
