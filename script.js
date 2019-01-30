const frontpageHeader = document.querySelectorAll('#frontpage-h1');
window.addEventListener('load', (e) => {
    for(let i = 0; i < frontpageHeader.length; i++) {
        setTimeout(() => {
            frontpageHeader[i].classList += 'frontpage-transition';  
        }, 500)
    }
})


const nav = document.querySelectorAll('#nav');
const logo = document.querySelectorAll('#logo')
const navText = document.querySelectorAll('.nav-links ul li')
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset < 10) {
        nav[0].style.height = '100px';
        logo[1].style.height = '80px';
        for(var i = 0; i < navText.length; i++) {
            navText[i].style.fontSize = '34px'
        }
    } else if(window.pageYOffset > 0) {
        nav[0].style.height = '80px';
        logo[1].style.height = '70px';
        for(var i = 0; i < navText.length; i++) {
            navText[i].style.fontSize = '28px'
        }
    }
})


// Smooth scrool

function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = Math.easeOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    Math.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t*(t-2) + b;
    };

    requestAnimationFrame(animation)
}

// MENU SCROLL TARGET

const about = document.querySelector('#nav-about');
const portfolio = document.querySelector('#nav-portfolio')
const contact = document.querySelector('#nav-contact')
const contactButton = document.querySelectorAll('#kontakt')[0]

about.addEventListener('click', function() {
    smoothScroll('#about-body', 1000)
});

portfolio.addEventListener('click', function() {
    smoothScroll('#portfolio-body', 1000)
});

contact.addEventListener('click', function() {
    smoothScroll('#contact-body', 1000)
});

contactButton.addEventListener('click', function() {
    smoothScroll('#contact-body', 1000)
});