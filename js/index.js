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

//Event 3
const main1 = document.querySelector(".text-content");

main1.addEventListener("dblclick", () => {
    gsap.to(".text-content", {
        duration: 1,
        delay: 1,
        backgroundColor: "violet",
    })
})