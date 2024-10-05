var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#cheetos-bag",{
    top: "95%",
    left: "12%",
    rotate: "30deg"
}, 'cheetos')
tl.to("#cheeto1",{
    top:"160%",
    left: "23%"
}, 'cheetos')
tl.to("#cheeto2",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'cheetos')
tl.to("#corn1",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'cheetos')
tl.to("#corn2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'cheetos')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#cheeto1",{
    width:"28%",
    left: "42%",
    top: "214%"
}, 'bag')
tl2.to("#cheeto2",{
    width:"15%",
    left: "35%",
    top: "270%"
}, 'bag')
tl2.to("#cheetos-bag",{
    width:"30%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'bag')

