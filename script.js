/* =========================
   ANIME.JS
========================= */

const { animate, stagger } = anime;


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");


document.addEventListener("mousemove", (event) => {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";


    cursorRing.animate(
        {
            left: event.clientX + "px",
            top: event.clientY + "px"
        },
        {
            duration: 250,
            fill: "forwards"
        }
    );

});


/* =========================
   CURSOR HOVER
========================= */

const hoverElements =
    document.querySelectorAll(
        "a, .project-card, .skill-card, .service"
    );


hoverElements.forEach((element) => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursorRing.style.width = "60px";

            cursorRing.style.height = "60px";

            cursorRing.style.borderColor =
                "#aaa";

        }
    );


    element.addEventListener(
        "mouseleave",
        () => {

            cursorRing.style.width = "35px";

            cursorRing.style.height = "35px";

            cursorRing.style.borderColor =
                "#777";

        }
    );

});


/* =========================
   NAVBAR ANIMATION
========================= */

animate(".navbar", {

    translateY: [-80, 0],

    opacity: [0, 1],

    duration: 900,

    ease: "outExpo"

});


/* =========================
   HERO ANIMATION
========================= */

animate(".hero-item", {

    translateY: [50, 0],

    opacity: [0, 1],

    delay: stagger(150),

    duration: 900,

    ease: "outExpo"

});


animate(".hero-title", {

    translateY: [100, 0],

    opacity: [0, 1],

    duration: 1200,

    delay: 200,

    ease: "outExpo"

});


animate(".hero-grid", {

    scale: [.7, 1],

    opacity: [0, 1],

    duration: 1600,

    ease: "outExpo"

});


animate(".hero-orb", {

    scale: [.4, 1],

    opacity: [0, 1],

    duration: 1400,

    delay: 300,

    ease: "outExpo"

});


/* =========================
   FLOATING ORB
========================= */

animate(".hero-orb", {

    translateY: [-20, 20],

    duration: 3500,

    alternate: true,

    loop: true,

    ease: "inOutSine"

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    animate(entry.target, {

                        translateY: [60, 0],

                        opacity: [0, 1],

                        duration: 900,

                        ease: "outExpo"

                    });

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    revealObserver.observe(element);

});


/* =========================
   PROJECT CARDS
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {


    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -3;


            const rotateY =
                ((x - centerX) /
                    centerX) * 3;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg)";

        }
    );

});


/* =========================
   PROJECT REVEAL
========================= */

const cardsObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    animate(entry.target, {

                        translateY: [80, 0],

                        opacity: [0, 1],

                        duration: 1000,

                        ease: "outExpo"

                    });


                    cardsObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


projectCards.forEach((card) => {

    card.style.opacity = "0";

    cardsObserver.observe(card);

});


/* =========================
   SKILL HOVER
========================= */

const skills =
    document.querySelectorAll(
        ".skill-card"
    );


skills.forEach((skill) => {

    skill.addEventListener(
        "mouseenter",
        () => {

            animate(skill, {

                scale: 1.02,

                duration: 300,

                ease: "outQuad"

            });

        }
    );


    skill.addEventListener(
        "mouseleave",
        () => {

            animate(skill, {

                scale: 1,

                duration: 300,

                ease: "outQuad"

            });

        }
    );

});


/* =========================
   STAT COUNTERS
========================= */

const stats =
    document.querySelectorAll(
        ".stat strong"
    );


const statsObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const element =
                        entry.target;

                    const target =
                        Number(
                            element.dataset.number
                        );


                    const counter = {
                        value: 0
                    };


                    animate(counter, {

                        value: target,

                        duration: 1500,

                        ease: "outExpo",

                        onUpdate: () => {

                            element.textContent =
                                Math.round(
                                    counter.value
                                );

                        }

                    });


                    statsObserver.unobserve(
                        element
                    );

                }

            });

        },

        {
            threshold: 0.5
        }

    );


stats.forEach((stat) => {

    statsObserver.observe(stat);

});


/* =========================
   MAGNETIC BUTTONS
========================= */

const buttons =
    document.querySelectorAll(
        ".button, .nav-contact, .contact-button"
    );


buttons.forEach((button) => {

    button.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(
                    ${x * 0.12}px,
                    ${y * 0.12}px
                )`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translate(0,0)";

        }
    );

});


/* =========================
   PROJECT PARALLAX
========================= */

projectCards.forEach((card) => {

    const visual =
        card.querySelector(
            ".project-visual"
        );


    if (!visual) return;


    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();


            const x =
                (event.clientX -
                    rect.left) /
                rect.width;


            const y =
                (event.clientY -
                    rect.top) /
                rect.height;


            visual.style.transform =
                `translate(
                    ${(x - 0.5) * 20}px,
                    ${(y - 0.5) * 20}px
                )`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            visual.style.transform =
                "translate(0,0)";

        }
    );

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});