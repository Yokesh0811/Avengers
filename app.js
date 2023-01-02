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