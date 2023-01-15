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