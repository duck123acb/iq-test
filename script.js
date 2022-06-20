const userName = document.getElementById("name");
const getIQ = document.getElementById("get-iq");
const iqDisplay = document.getElementById("iq");
let iq;



getIQ.addEventListener("click", function () {
    if (userName.value === "ayaan" || userName.value === "Ayaan") {
        iq = -201;
    } else {
        iq = Math.floor(Math.random() * 95) + 100;
    }
    iqDisplay.innerText = "IQ: " + iq;
});

location = "https://www.youtube.com/watch?v=xvFZjo5PgG0";