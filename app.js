const ratio = 0.1;
const options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio,
}


const animationScroll = function(entries,observer){
    entries.forEach((e)=>{
        if(e.intersectionRatio > ratio){
            e.target.classList.add('reveal-visible')
            observer.unobserve(e.target)
        }
    })
}

const observer = new IntersectionObserver(animationScroll,options)
const anim = document.querySelectorAll('.reveal')

anim.forEach((a) => {
    observer.observe(a)
})