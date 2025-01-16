gsap.registerPlugin(ScrollTrigger)

let content = gsap.utils.toArray('.container_academy .academy')



gsap.to(content,{
    xPercent: -100*(content.length-1),
    scrollTrigger:{
        trigger:'.container_academy',
        pin:true,
        scrub:1,

    }
})
