/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


const navBarMenu = document.querySelector('.navbar__menu');

// my ul
const navBarList = document.getElementById('navbar__list');

const fragment = document.createDocumentFragment();

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let mySection = document.querySelectorAll('section');

mySection.forEach(section => {
    const myList = document.createElement('li');
    const myLink = document.createElement('a');
    myLink.addEventListener('click', ()=> {
        section.scrollIntoView({
            'behavior': "smooth"
        })
    })


    let secName = section.getAttribute('data-nav');
    let linkText = document.createTextNode(secName);


    myLink.appendChild(linkText);
    myList.appendChild(myLink);
    fragment.appendChild(myList);



})

navBarList.appendChild(fragment);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// scroll to top button

const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener('scroll', ()=> {

    scrollToTop.classList.toggle('showed', window.pageYOffset > 100);

})

scrollToTop.addEventListener('click', () => {
   window.scrollTo({
      top:0,
      behavior: 'smooth',

   })

})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


