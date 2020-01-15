// Your code goes here

//Event 1
const title = document.querySelector(".logo-heading");

title.addEventListener("click", () => {
    gsap.to(".logo-heading", {
        duration: 1,
        rotate: 720,
        y: 200,
        yoyo: true,
        repeat: 1
    })
})

//Event 2
const welcome = document.querySelector(".intro h2");

welcome.addEventListener("mouseenter", () => {
    gsap.to(".intro h2", {
        duration: 2,
        x: 200,
        color: "yellow",
        fontSize: 50
    })
})