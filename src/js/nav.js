
// SECTION

const langEl = document.querySelector(".lang_wrap");
const link = document.querySelectorAll("a.btn_language");
const titleEl = document.querySelector(".title");
const descrEl = document.querySelector(".detail");
const title2El = document.querySelector(".title_2");

link.forEach((el) => {
    el.addEventListener("click", () => {
        /* if it has active_lang then remove it*/
        langEl.querySelector(".active_lang").classList.remove("active_lang");
        /* else put active_lang*/
        el.classList.add("active_lang");

        /* get language*/
        const attr = el.getAttribute("language");

        titleEl.textContent = data[attr].title;
        descrEl.textContent = data[attr].detail;
        title2El.textContent = data[attr].title_2;
    });
});

var data = {
    english: {
        Nav_1: "Home",
        Nav_2: "About",
        Nav_3: "Services",
        Nav_4: "Portfolio",
        Nav_5: "Team",
        Nav_6: "Contact",
        title: "we just make ",
        detail: "things",
        title_2: "matter",
    },
    finnish: {
        Nav_1: "Koti",
        Nav_2: "Meistä",
        Nav_3: "Palvelut",
        Nav_4: "Portfolio",
        Nav_5: "Tiimi",
        Nav_6: "Yhteystiedot",
        title: "me vain teemme ",
        detail: "asioita",
        title_2: "asia",
    },
};

// SECTION
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navigation a");

window.onscroll = () => {
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector(".navigation a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};
//  SECTION
window.addEventListener("scroll", function () {
    let nav = document.getElementById("nav");
    nav.classList.toggle("down", window.scrollY > 0);
});
window.addEventListener("resize", function () {
    let linkList = document.querySelector(".navigation");
    if (window.innerWidth > 1080) {
        closeMenu();
    }
});

//  SECTION
function toggle() {
    let header = document.querySelector("header");
    header.classList.toggle("active");
}
const toggleMenu = () => {
    let navActive = document.querySelector(".navigation.active");
    if(navActive) {
        closeMenu();
    } else {
        openMenu();
    }

}
const openMenu = () => {
    let html = document.querySelector("html");
    let linkList = document.querySelector(".navigation");

    html.classList.add("noOverflow");
    linkList.classList.add("active");
    console.log("Test");
}
const closeMenu = () => {
    let html = document.querySelector("html");
    let linkList = document.querySelector(".navigation");

    html.classList.remove("noOverflow");
    linkList.classList.remove("active");
}

// HeroCode
// Herocode