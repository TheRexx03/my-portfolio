const { animate, stagger } = anime;

animate("nav", {
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo"
});

animate(".content", {
    translateX: [-100, 0],
    opacity: [0, 1],
    duration: 1200,
    ease: "outExpo"
});

animate(".speed-lines", {
    translateX: [200, 0],
    rotate: [0, 8],
    opacity: [0, 1],
    duration: 1500,
    ease: "outExpo"
});

animate(".spec-grid div", {
    translateY: [70, 0],
    opacity: [0, 1],
    delay: stagger(150),
    duration: 900,
    ease: "outExpo"
});