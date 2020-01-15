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
        backgroundColor: "violet",
    })
})

//Event 4

const adventure = document.querySelector(".text-content p");

adventure.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    gsap.to(".text-content p", {
        color: "orange",
        x: -100,
        yoyo: true,
        ease: "elastic",
        repeat: 1
    })
})

//Event 5
const bus = document.querySelector(".intro img");

bus.addEventListener("wheel", () => {
    gsap.to(".intro img", {
        duration: 2,
        x: 550,
        ease: "bounce"
    })
})

//Event 6
const boat = document.querySelector(".content-destination img");

boat.addEventListener("mouseleave", () => {
    gsap.to(".content-destination img", {
        display: "none"
    })
})

//Event 7
const buttons = document.querySelector(".btn")

buttons.addEventListener("click", () => {
    gsap.to(".btn", {
        duration: 2,
        color: "black",
        backgroundColor: "yellow",
        rotate: 90,
        stagger: 0.25,
    })
})

//Event 8
const letsGo = document.querySelector(".text-content h2");

letsGo.addEventListener("click", () => {
    gsap.to(".text-content h2", {
        delay: 2,
        fontWeight: "bold",
        fontSize: 50,
        color: "red"
    })
})