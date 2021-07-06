// DOM access / Type casting
const form = document.querySelector("form")! as HTMLFormElement
const email = document.querySelector("#email")! as HTMLInputElement; // casting
const password = document.querySelector("#password")! as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(`Email: ${email.value}, Password: ${password.value}`)
})