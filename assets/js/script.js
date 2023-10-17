
// ============================== Show Menu =============================== //

const navMenu = document.getElementById("nav-menu")
navToggle = document.getElementById("nav-toggle")
navClose = document.getElementById("nav-close")

//  Menu Show
//  Variable if constant exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu')
    })
}

//  Menu Hidden
//  Validate if constant exists
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu')
    })
}

// ============================== Remove Mobile Menu =============================== //

const navLink = document.querySelectorAll('nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each mav-link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ============================== Change Background Header Color =============================== //

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

// ============================== GSAP Animation =============================== //

let tl1 = gsap.timeline()

tl1.from(".home-img-eth" ,{
    opacity: 0,
    duration: 1,
    y: 100
}, "a")
tl1.from(".home-img-orbe" ,{
    opacity: 0,
    duration: 1,
    y: 100
}, "a")
tl1.from(".home-info", {
    y: 50,
    delay: .6,
    duration: 1,
    opacity:0
}, "a")
tl1.from(".home-data h2", {
    y: 50,
    duration: 1,
    opacity:0,
    stagger: .3
}, "a")
tl1.from(".home-data span", {
    y: 50,
    duration: 1,
    opacity:0,
})
tl1.from(".home-footer", {
    y: 50,
    duration: 1,
    opacity:0,
    stagger: .3
}, "a")

