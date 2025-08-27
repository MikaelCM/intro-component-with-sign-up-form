function emptyField() {
    const form = document.querySelector("form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const inputs = [
            {el: document.querySelector("#first-name"), msg: "First Name cannot be empty"},
            {el: document.querySelector("#last-name"), msg: "Last Name cannot be empty"},
            {el: document.querySelector("#email"), msg: "Looks like this is not an email"},
            {el: document.querySelector("#password"), msg: "Password cannot be empty"}
        ]
        
        form.querySelectorAll(".error").forEach(err => err.remove())
        form.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"))

        inputs.forEach(({el, msg}) => {
            if (el.value.trim() === "") {
                showError(el, msg)

            if (el.id !== "email") {
                el.placeholder = ""
                
            } else {
                el.placeholder = "email@example/com"
                el.classList.add("email-placeholder")
            }
            
            } else if (el.id === "email" && !isValidEmail(el.value)) {
                showError(el, "Looks like this is not an email")
                el.placeholder = "email@example/com"
            }
        })
    })
}

function showError(el, msg) {
    const error = document.createElement("div")
    error.classList.add("error")
    error.textContent = msg
    el.insertAdjacentElement("afterend", error)
    el.classList.add("input-error")
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

emptyField()