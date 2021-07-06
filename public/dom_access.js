"use strict";
// DOM access / Type casting
const form = document.querySelector("form");
const email = document.querySelector("#email"); // casting
const password = document.querySelector("#password");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Email: ${email.value}, Password: ${password.value}`);
});
