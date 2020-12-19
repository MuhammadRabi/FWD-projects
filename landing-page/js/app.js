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

// using createDocumentFragment for better performance
const fragment = document.createDocumentFragment();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

// identifing the section element to loop on it
let mySection = document.querySelectorAll('section');

// my forEach loop
function createNavbar() {

    mySection.forEach(section => {
    const myList = document.createElement('li');
    const myLink = document.createElement('a');
  // Scroll to section on link click
    myLink.addEventListener('click', (e) => {
  // prevent default action of anchor link
        e.preventDefault();
       section.scrollIntoView({
            'behavior': "smooth"
        })
    })


    let linkText = section.getAttribute('data-nav');
    let secName = document.createTextNode(linkText);

    myLink.setAttribute('id', linkText);  
    myLink.appendChild(secName);
    myList.appendChild(myLink);
    fragment.appendChild(myList);

})

navBarList.appendChild(fragment);
}

createNavbar();
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// scroll to top button

const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener('scroll', ()=> {

// when scrolling the button will be active 
    scrollToTop.classList.toggle('showed', window.pageYOffset > 100);

})
// clicking the button will make top = 0 and going up
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
    let links = document.querySelectorAll('a');

// Set sections as active
 document.addEventListener('scroll', () =>{

    mySection.forEach(section => {

    // identifing getBounding to determine which section in the viewport    
    let rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
        // to remove any previously found active class on section    
           
                section.classList.add('your-active-class');
            

        // if the section in viewport, it will be highlited by active class

    } else {
                section.classList.remove('your-active-class');

    }

})

    })  


// to highlight active links



let navLink = document.querySelectorAll('li a');

// for each anchor add eventlistener Click
navLink.forEach(nvlnk=> nvlnk.addEventListener('click', (e)=>{

// make sure to remove active class if found
      navLink.forEach(n=>{
      n.classList.remove('active-link');
    })
     e.target.classList.add('active-link');
})
)
