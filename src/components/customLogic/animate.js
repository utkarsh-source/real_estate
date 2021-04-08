import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export const stagger = (elem, offset, each, duration) => {
    let [x, y] = offset

    gsap.fromTo(
        elem,
        { x: x || 0, y : y || 0 , autoAlpha: 0 },
        {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: duration || 1,
            delay: 1,
            stagger: {
                each,
            },
            scrollTrigger : {
                    trigger: elem,
                    start: 'top bottom',
                    end: `top 10%`,
                toggleActions: 'restart none none reset',
            }
         }
    )
}

export const fadeLeft = (elem) => {
     gsap.fromTo(elem.children, { x: 300, autoAlpha: 0 }, {
            y: 0, stagger: 0.2, autoAlpha:1, scrollTrigger: {
                trigger: elem,
                start: 'top bottom',
                toggleActions: 'restart none none none',
    }})
}

export const staggerUp = (elem) => {
    gsap.fromTo(elem.children, { y: 300, autoAlpha: 0 }, {
            y: 0, stagger: 0.2, autoAlpha:1, scrollTrigger: {
                trigger: elem,
                start: 'top bottom',
                toggleActions: 'restart none none none',
  }})
}
