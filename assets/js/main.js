//navbar
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navCLose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navCLose) {
    navCLose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//skills
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills-content skills-close"
    }

    if (itemClass === 'skills-content skills-close') {
        this.parentNode.classList = "skills-content skills-open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

//dark theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sum';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
/*const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun';*///!

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    /*themeButton.classList[selectedIcon === 'moon' ? 'sun' : 'remove'](iconTheme);*///!
}

themeButton.addEventListener('click',() => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    /*localStorage.setItem('selected-icon', getCurrentTheme());*/
});

//parallax
const stars = document.getElementById('stars');
const cloud = document.getElementById('clouds');

function changePosition() {
    let value = window.scrollY;
    stars.style.left =  `${value * 0.15}px`;
    cloud.style.right =  `${value * 0.35}px`;
}

window.addEventListener('scroll',changePosition);

