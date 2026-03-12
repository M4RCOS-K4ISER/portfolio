import { createNavbar } from "./components/navbar.js";
import { createSocialBar } from "./components/socialBar.js";
import { createNavbarMobile } from "./components/navbarMobile.js";
import { createCubeAnimation } from './components/cube.js';
import { I18N } from "./lang.js";


/*============================== COMPONENTS ==============================*/
document.body.insertAdjacentHTML("afterbegin", createNavbar());
document.body.insertAdjacentHTML("afterbegin", createSocialBar());
document.body.insertAdjacentHTML("beforeend", createNavbarMobile());
document.addEventListener('DOMContentLoaded', () => {
    createCubeAnimation('.svg-cube-container');
});


/*================================ NAVBAR ================================*/
let lastScrollY = window.scrollY;
const header = document.querySelector(".header")
const scrollThreshold = 10;
const isMobile = window.matchMedia("(max-width: 768px)").matches;
let isNavigatingByClick = false;

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        isNavigatingByClick = true;

        setTimeout(() => {
            isNavigatingByClick = false;
        }, 800);
    })
})

if (!isMobile) {
    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        if (isNavigatingByClick) {
            return;
        }

        if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
            return;
        }

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        };
        
        lastScrollY = currentScrollY;
    });
}

/*------------------------------ LANGUAGE ------------------------------*/
const lang = document.querySelector("[data-lang]");
if (lang) {
    const trigger = lang.querySelector(".lang-trigger");
    const valueEl = lang.querySelector(".lang-value");
    const menu = lang.querySelector(".lang-menu");
    const options = [...lang.querySelectorAll(".lang-option")];

    let selected = localStorage.getItem("lang") || "pt-br";
    valueEl.textContent = selected.toUpperCase();

    function render() {
        options.forEach((btn) => { 
            btn.parentElement.hidden = btn.dataset.value === selected;
        
        })
    }

    function open() {
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
        lang.dataset.open = "true";
        render();
    }

    function close() {
        menu.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
        lang.dataset.open = "false";
    }

    trigger.addEventListener("click", () => (menu.hidden ? open() : close()));

    options.forEach((btn) => {
        btn.addEventListener("click", () => {
            selected = btn.dataset.value;
            valueEl.textContent = selected.toUpperCase();
            localStorage.setItem("lang", selected);
            applyLanguage(selected);
            close();
            render();
        });
    });

    document.addEventListener("click", (e) => {
        if (!lang.contains(e.target)) { close(); }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") { close(); }
    });

    render();
}

function applyLanguage(langCode) {
    const dict = I18N[langCode] || I18N["pt-br"];
    
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    document.documentElement.lang = langCode === "pt-br" ? "pt-BR" : "en";
    localStorage.setItem("lang", langCode);
}

const savedLang = localStorage.getItem("lang") || "pt-br";
applyLanguage(savedLang);

/*----------------------------- LOAD EFFECT -----------------------------*/
window.addEventListener("load", () => {
    document.body.classList.remove("is-loading");
});


/*============================ THEME SWITCH ============================*/
const root = document.documentElement;
const themeInput = document.querySelector(".theme-switch");
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";

root.setAttribute("data-theme", initialTheme);

if (themeInput) {
    themeInput.checked = initialTheme === "light";
}

if (themeInput) {
    themeInput.addEventListener("change", () => {
        const nextTheme = themeInput.checked ? "light" : "dark";
        root.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    })
}

/*============================= MOUSE GLOW =============================*/
const light = document.querySelector(".cursor-light")

if (light) {
    document.addEventListener("mousemove", (e) => {
        light.style.setProperty("--mouse-x", `${e.clientX}px`);
        light.style.setProperty("--mouse-y", `${e.clientY}px`);
    });
}
