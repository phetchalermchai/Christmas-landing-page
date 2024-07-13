const bxGrid = document.getElementById('bx-grid')
const bxX = document.getElementById('bx-x')
const navToggle = document.querySelector('.nav.toggle')
const nav = document.querySelector('.nav')
const moon = document.getElementById('moon')
const sun = document.getElementById('sun')
const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

// add event open toggler
bxGrid.addEventListener('click',()=>{
    navToggle.classList.remove('mt-[-348px]')
    navToggle.classList.add('mt-[-56px]')
    nav.classList.add('z-[-1]')
    nav.classList.add('translate-y-[-100vh]')
    document.body.classList.remove("overflow-auto")
    document.body.classList.add("overflow-hidden")
})

// add event mouseover hover light mode
bxGrid.addEventListener('mouseover',()=>{
    if (document.documentElement.className === "scroll-smooth dark") {
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg (1).hover.png"
    } else {
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg.hover.png"
    }
})

// add event mouseout hover light mode
bxGrid.addEventListener('mouseout',()=>{
    if (document.documentElement.className === "scroll-smooth dark") {
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg (1).png"
    } else {
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg.png"
    }
})

// add event close toggler
bxX.addEventListener('click',()=>{
    navToggle.classList.add('mt-[-348px]')
    navToggle.classList.remove('mt-[-56px]')
    nav.classList.remove('z-[-1]')
    nav.classList.remove('translate-y-[-100vh]')
    document.body.classList.remove("overflow-hidden")
    document.body.classList.add("overflow-auto")
})

// add event close toggler mobile menu
function mbClose(y=0) {
    navToggle.classList.add('mt-[-348px]')
    navToggle.classList.remove('mt-[-56px]')
    nav.classList.remove('z-[-1]')
    nav.classList.remove('translate-y-[-100vh]')
    document.body.classList.remove("overflow-hidden")
    document.body.classList.add("overflow-auto")
    scrollTo(0,y)
}

// add event mouseover hover light mode
bxX.addEventListener('mouseover',()=>{
    if (document.documentElement.className === "scroll-smooth dark") {
        bxX.children[0].src = "image/mobile/bx-x.svg.hover (1).png"
    } else {
        bxX.children[0].src = "image/mobile/bx-x.svg.hover.png"
    }
})

// add event mouseout hover light mode
bxX.addEventListener('mouseout',()=>{
    if (document.documentElement.className === "scroll-smooth dark") {
        bxX.children[0].src = "image/mobile/bx-x.svg (1).png"
    } else {
        bxX.children[0].src = "image/mobile/bx-x.svg.png"
    }
})

// add event light mode
moon.addEventListener('click',()=>{
    document.documentElement.classList.add('dark')
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
    bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg (1).png"
    bxX.children[0].src = "image/mobile/bx-x.svg (1).png"
})

// add event mouseover hover light mode
moon.addEventListener('mouseover',()=>{
    moon.children[0].src = 'image/mobile/bx-moon.svg.hover.png'
})

// add event mouseout hover light mode
moon.addEventListener('mouseout',()=>{
    moon.children[0].src = 'image/mobile/bx-moon.svg.png'
})

// add event dark mode
sun.addEventListener('click',()=>{
    document.documentElement.classList.remove('dark')
    moon.classList.remove('hidden')
    sun.classList.add('hidden')
    bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg.png"
    bxX.children[0].src = "image/mobile/bx-x.svg.png" 
})

// add event mouseover hover dark mode
sun.addEventListener('mouseover',()=>{
    sun.children[0].src = 'image/mobile/bx-sun.svg.hover.png'
})

// add event mouseout hover dark mode
sun.addEventListener('mouseout',()=>{
    sun.children[0].src = 'image/mobile/bx-sun.svg.png'
})

// check  matchMedia darkmode
if (darkMode) {
    moon.classList.add('hidden')
    document.documentElement.classList.add('dark')
    bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg (1).png"
    bxX.children[0].src = "image/mobile/bx-x.svg (1).png"

} else {
    sun.classList.add('hidden')

}

// check onchange matchMedia darkmode
window.matchMedia('(prefers-color-scheme: dark)').onchange = function (e) {

    // check value 
    if (e.matches) {
        document.documentElement.classList.add('dark')
        moon.classList.add('hidden')
        sun.classList.remove('hidden')
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg (1).png"
        bxX.children[0].src = "image/mobile/bx-x.svg (1).png"

    } else {
        document.documentElement.classList.remove('dark')
        sun.classList.add('hidden')
        moon.classList.remove('hidden')
        bxGrid.children[0].src = "image/mobile/bx-grid-alt.svg.png"
        bxX.children[0].src = "image/mobile/bx-x.svg.png" 
    }
}

// check scroll nav
window.onscroll = function () {
    if (window.scrollY > 30) {
        document.querySelector('.nav.sticky').classList.add('dark:bg-color-body-dark','bg-color-body','z-[999]')
    } else {
        document.querySelector('.nav.sticky').classList.remove('dark:bg-color-body-dark','bg-color-body','z-[999]')
    }
}

window.onload = function () {

    // check scroll nav
    if (window.scrollY > 30) {
        document.querySelector('.nav.sticky').classList.add('dark:bg-color-body-dark','bg-color-body','z-[999]')
    } else {
        document.querySelector('.nav.sticky').classList.remove('dark:bg-color-body-dark','bg-color-body','z-[999]')
    }

    // call slides
    slideMobile()
    slideDesktop()
}

window.onresize = function () {
    if (screen.width >= 1024) {
        mbClose()
    }
}
  
// slides mobile
function slideMobile() {
        let slides = document.querySelectorAll('.slide');
        let conSlides = document.querySelector('.con-slides');
        let dots = document.querySelectorAll('.mb-dot .dot');
        let counter = 0;
        
        setInterval(() => {
            showSlides()
        }, 5000);

        
        function showSlides() {
        
            for (let index = 0; index < dots.length; index++) {
                const element = dots[index];
                element.classList.add('bg-[#5D5656]')
                element.classList.remove('bg-color-red')
            }
        
            if (counter == slides.length) {
                counter = 0;
            }
        
            if (counter === 1) {
                conSlides.classList.replace('ml-0','ml-[-100%]')
            }else if (counter === 2) {
                conSlides.classList.replace('ml-[-100%]','ml-[-200%]')
            }else if (counter === 3) {
                conSlides.classList.replace('ml-[-200%]','ml-[-300%]')
            }else{
                conSlides.classList.replace('ml-[-300%]','ml-0')
            }
        
            dots[counter].classList.remove('bg-[#5D5656]')
            dots[counter].classList.add('bg-color-red')
        
            
            counter++;
        }
        
        dots.forEach((e,key) => {
            e.addEventListener('click',()=>{
                counter = key;
        
                if (counter === 1) {
                    conSlides.classList.replace('ml-0','ml-[-100%]')
                    conSlides.classList.replace('ml-[-200%]','ml-[-100%]')
                    conSlides.classList.replace('ml-[-300%]','ml-[-100%]')
                }else if (counter === 2) {
                    conSlides.classList.replace('ml-[-100%]','ml-[-200%]')
                    conSlides.classList.replace('ml-[-300%]','ml-[-200%]')
                    conSlides.classList.replace('ml-0','ml-[-200%]')
                }else if (counter === 3) {
                    conSlides.classList.replace('ml-[-200%]','ml-[-300%]')
                    conSlides.classList.replace('ml-[-100%]','ml-[-300%]')
                    conSlides.classList.replace('ml-0','ml-[-300%]')
                }else{
                    conSlides.classList.replace('ml-[-300%]','ml-0')
                    conSlides.classList.replace('ml-[-200%]','ml-0')
                    conSlides.classList.replace('ml-[-100%]','ml-0')
                }
        
                showSlides()
            })
        });

        showSlides()
}

// slides desktop
function slideDesktop() {
        let slides = document.querySelectorAll('.slide');
        let conSlides = document.querySelector('.con-slides');
        let dots = document.querySelectorAll('.dt-dot .dot');
        let counter = 0;

        setInterval(() => {
            showSlides()
        }, 5000);

        function showSlides() {
        
            for (let index = 0; index < 2; index++) {
                const element = dots[index];
                element.classList.add('bg-[#5D5656]')
                element.classList.remove('bg-color-red')
            }
        
            if (counter == slides.length - 2) {
                counter = 0;
            }
        
            if (counter === 1) {
                conSlides.classList.replace('lg:ml-0','lg:ml-[-35.9%]')
            }else{
                conSlides.classList.replace('lg:ml-[-35.9%]','lg:ml-0')
            }
        
            dots[counter].classList.remove('bg-[#5D5656]')
            dots[counter].classList.add('bg-color-red')
        
            
            counter++;
        }

        dots.forEach((e,key) => {
            e.addEventListener('click',()=>{
                counter = key;
        
                if (counter === 1) {
                    conSlides.classList.replace('lg:ml-0','lg:ml-[-36%]')
                }else{
                    conSlides.classList.replace('lg:ml-[-36%]','lg:ml-0')
                }
        
                showSlides()
            })
        });

        showSlides()
}

// gift love
function giftLove(e) {
    console.log(e.children[0]);
    if (e.children[0].getAttribute('data-active') === "") {
        e.children[0].src = "image/mobile/bxs--heart.png"
        e.children[0].setAttribute('data-active',"active")
    }else if (e.children[0].getAttribute('data-active') === "active") {
        e.children[0].src = "image/mobile/bx-heart.svg.png"
        e.children[0].setAttribute('data-active',"")
    }

    if (e.children[0].getAttribute('data-active') === "false") {
        e.children[0].src = "image/mobile/bxs--heart-w.png"
        e.children[0].setAttribute('data-active',"true")
    }else if (e.children[0].getAttribute('data-active') === "true") {
        e.children[0].src = "image/mobile/bx-heart.svg (1).png"
        e.children[0].setAttribute('data-active',"false")
    }
}

