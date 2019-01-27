const frontpageHeader = document.querySelectorAll('#frontpage-h1');
const aboutHeader = document.querySelectorAll('#about-h1');
const portfolioHeader = document.querySelectorAll('#portfolio-h1')
const contactHeader = document.querySelectorAll('#contact-h1')

window.addEventListener('load', (e) => {
    for(let i = 0; i < frontpageHeader.length; i++) {
        setTimeout(() => {
            frontpageHeader[i].classList += 'frontpage-transition';  
        }, 500)
    }
})

window.addEventListener('load', (e) => {
    setTimeout(() => {
        aboutHeader[0].classList += 'frontpage-transition';  
    }, 500) 
})

window.addEventListener('load', (e) => {
    setTimeout(() => {
        portfolioHeader[0].classList += 'frontpage-transition';  
    }, 500) 
})

window.addEventListener('load', (e) => {
    setTimeout(() => {
        contactHeader[0].classList += 'frontpage-transition';  
    }, 500) 
})

alert('hi')
