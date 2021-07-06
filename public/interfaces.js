"use strict";
let mike;
mike = {
    uuid: "q4s6d4sqdqs5d4",
    name: "sam007",
    age: 25,
    email: "007@gmail.com",
    speak(text) {
        console.log(text);
    },
    reply(text) {
        console.log(text);
    }
};
console.log(`i'm a ${mike.name} ${typeof mike} decraled with an interface type and here is my data: ${mike}`);
mike.speak("alright what are we going to do ?");
mike.reply("obvious great things !");
