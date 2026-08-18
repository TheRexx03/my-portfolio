const { animate, stagger } = anime;


animate("nav", {
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 800,
    ease: "outExpo"
});


animate(".content", {
    translateX: [-80, 0],
    opacity: [0, 1],
    duration: 1100,
    ease: "outExpo"
});


animate(".product-shape", {
    translateY: [100, 0],
    rotate: [-30, -12],
    opacity: [0, 1],
    duration: 1300,
    ease: "outExpo"
});


animate(".product-glow", {
    scale: [0.5, 1],
    opacity: [0, 1],
    duration: 1500,
    ease: "outExpo"
});


animate(".details-grid div", {
    translateY: [70, 0],
    opacity: [0, 1],
    delay: stagger(150),
    duration: 900,
    ease: "outExpo"
});


animate(".product-shape", {
    translateY: [-10, 10],
    duration: 3500,
    alternate: true,
    loop: true,
    ease: "inOutSine"
});