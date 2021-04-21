// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
console.log(location);
setTimeout(function () {
    location.href = 'https://indistaan.com' + location.pathname;
}, 1000)
