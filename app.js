const tl = gsap.timeline({default:{ease: 'power1.out'}})
tl.to(".avengerslogo",{y: "0px", duration: 1});
gsap.to(".hulkjump", { duration: 2,
    ease: "back.out(2)",
    y: -420
  }, "-=1");
tl.to(".aboutavengers",{y: "0px", opacity: "1", duration: 1});
tl.to(".ironmanfly",{opacity: "1", duration: 1.5}, "-=0.4");

gsap.registerPlugin(ScrollTrigger);
gsap.to(".ironmanfly", {
    scrollTrigger: {
        trigger:".titleavengers",
        start:"top",
        endTrigger: ".mysticstone",
        end:"center",
        scrub:1,
    },
    x : 420,
    y : -200,
    duration:2,
});
gsap.to(".falconfly", {
    scrollTrigger: {
        trigger:".webpage2",
        start:"top",
        endTrigger: ".webpage3",
        end:"top",
        scrub:1,
    },
    x : 800,
    y : -500,
    duration:2,
});
gsap.to(".antmanfly", {
    scrollTrigger: {
        trigger:".webpage4",
        start:"center",
        endTrigger: ".webpage5",
        end:"center",
        scrub:2,
    },
    x : -1250,
    duration:3,
});
