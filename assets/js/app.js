/*Start carousel animation*/
let slide = document.querySelectorAll(".carousel-slide")
let maxSlide = slide.length-1

const initializeSlideItemPosition = (elements)=>{
    elements.forEach((element, index) => {
        element.style.transform = `translateX(${100 * index}%)`
    });
}

const findCurrentSlide = (elements)=>{
    var currentIndex = 0
    elements.forEach((element, index) => {
        if (element.classList.contains("slide-active"))
            currentIndex = index
    });
    return currentIndex
}
const loopSlide = ()=>{
    var current = findCurrentSlide(slide)
    if(current === maxSlide)
    {
        current=0
        slide[maxSlide].style.animation = "slide-left .8s forwards"
        slide[maxSlide].classList.remove("slide-active")
        slide[current].style.animation = "next-slide .8s forwards"
        slide[current].classList.add("slide-active")
    }
    else
    {
        slide[current].style.animation = "slide-left .8s forwards"
        slide[current].classList.remove("slide-active")
        slide[current+1].style.animation = "next-slide .8s forwards"
        slide[current+1].classList.add("slide-active")
        current++
    }
}

initializeSlideItemPosition(slide)
setInterval(loopSlide, 5000)

/* End carousel animation */

const showMenu = ()=>
{
    document.querySelector(".navbar").style.display="block"
    document.querySelector(".logo").style.animation="show-menu .5s forwards"
    document.querySelector(".navbar-nav").style.animation="show-menu .5s forwards"
    document.querySelector(".social").style.animation="show-menu .5s forwards"
}

const hideMenu = ()=>
{
    document.querySelector(".logo").style.animation="hide-menu .5s forwards"
    document.querySelector(".navbar-nav").style.animation="hide-menu .5s forwards"
    document.querySelector(".social").style.animation="hide-menu .5s forwards"

    setTimeout(()=>
    {
        document.querySelector(".navbar").style.display="none"
    },500)
}
