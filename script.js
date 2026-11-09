// ================================
// QUOTES
// ================================

const quotes = [

    "Silence is not empty. It is full of answers. — Osho",

    "The observer is the observed. — J. Krishnamurti",

    "Take up one idea. Make that one idea your life. — Swami Vivekananda",

    "Meditation means awareness. — Osho",

    "Truth is a pathless land. — Krishnamurti",

    "Arise, awake and stop not till the goal is reached. — Vivekananda",

    "Peace comes from within. — Buddha",

    "The quieter you become, the more you can hear. — Ram Dass",

    "Awareness is the greatest agent for change. — Eckhart Tolle",

    "Be where you are. Otherwise you will miss your life."

];

function newQuote() {

    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteBox").innerHTML = quotes[random];

}

window.onload = newQuote;


// ================================
// PARALLAX HERO
// ================================

window.addEventListener("scroll", () => {

    let scroll = window.pageYOffset;

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = scroll * 0.4 + "px";

});


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(

    ".card,.item,.about,.music,#quotes"

);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();


// ================================
// ACCORDION
// ================================

const items = document.querySelectorAll(".item");

items.forEach(item => {

    item.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});


// ================================
// BREATHING EXERCISE
// ================================

let breathing = false;

function breathingExercise() {

    const btn = document.getElementById("breathBtn");

    const circle = document.getElementById("circle");

    const text = document.getElementById("breathText");

    if (breathing) return;

    breathing = true;

    btn.innerHTML = "Breathing...";

    let step = 0;

    const phases = [

        "Inhale",

        "Hold",

        "Exhale"

    ];

    const interval = setInterval(() => {

        text.innerHTML = phases[step];

        if (step === 0) {

            circle.style.transform = "scale(1.4)";

        }

        if (step === 1) {

            circle.style.transform = "scale(1.4)";

        }

        if (step === 2) {

            circle.style.transform = "scale(1)";

        }

        step++;

        if (step > 2) {

            step = 0;

        }

    }, 4000);

    setTimeout(() => {

        clearInterval(interval);

        text.innerHTML = "Done ✔";

        btn.innerHTML = "Start Again";

        circle.style.transform = "scale(1)";

        breathing = false;

    }, 36000);

}


// // ================================
// // DARK MODE
// // ================================

// function toggleTheme() {

//     document.body.classList.toggle("light");

// }


// ================================
// BACK TO TOP
// ================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#48c774";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ================================
// NAVIGATION ACTIVE LINK
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// CARD HOVER SOUND
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ================================
// RANDOM BACKGROUND OPACITY
// ================================

setInterval(() => {

    document.querySelector(".overlay").style.opacity =

        0.65 + Math.random() * 0.15;

}, 4000);
