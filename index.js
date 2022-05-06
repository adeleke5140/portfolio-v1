gsap.to(".first", {
  duration: 1.5,
  delay: 0.7,
  top: "-100%",
  ease: "power2.inOut"
})

gsap.to(".second", {
  duration: 1.5,
  delay: 0.9,
  top: "-100%",
  ease: "power2.inOut"
})

gsap.to(".third", {
  duration: 1.5,
  delay: 1.1,
  top: "-100%",
  ease: "power2.inOut"
})

gsap.fromTo(
  ".navigation",
  {
    opacity: 0,
    duration: 1.5,
    delay: 1.6,
    y: -200,
    ease: "power2.inOut"
  },
  {
    opacity: 1,
    duration: 1.5,
    delay: 1.6,
    y: 0,
    ease: "power2.inOut"
  }
)

gsap.fromTo(
  ".header-main-title",
  {
    duration: 1.5,
    delay: 2,
    y: 400,
    opacity: 0,
    ease: "power2.inOut"
  },
  {
    duration: 1.5,
    delay: 2.5,
    y: 0,
    opacity: 1,
    ease: "power2.inOut"
  }
)

gsap.from(".header-main-title-2", {
  duration: 1.5,
  delay: 3.2,
  x: 800,
  ease: "power2.inOut"
})

gsap.from(".header-subtitle", {
  duration: 1.5,
  delay: 3.2,
  x: -400,
  ease: "power2.inOut"
})
