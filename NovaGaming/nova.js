const { animate, stagger } = anime;

animate("nav", {
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo"
});

animate(".hero-content", {
    translateY: [80, 0],
    opacity: [0, 1],
    duration: 1200,
    ease: "outExpo"
});

animate(".orb", {
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 1500,
    ease: "outExpo"
});

animate(".feature", {
    translateY: [70, 0],
    opacity: [0, 1],
    delay: stagger(150),
    duration: 900,
    ease: "outExpo"
});