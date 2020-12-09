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



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let ul = document.getElementById('navbar__list');

for (let i = 1; i < 4; i++){

   let li =  document.createElement('li');

   li.innerHTML = '<a href="#" class="menu__link">section + i</a>';

   
   ul.appendChild(li);


}



/*let li = document.createElement('li');

li.innerHTML = '<a href="#" class="menu__link">section1</a>'; 

ul.append(li);*/




// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


