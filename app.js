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
const sections= document.querySelectorAll('section'); // array holding all sections in the document
const ul = document.getElementById('navbar__list');   // holding unordered elements of class 'navbar__list'
const fragment = document.createDocumentFragment();   // To create the doc fragment to add dynamiclly added elements to it
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
///////////////////////////////////////////////////////////////////////////adding li to navbar/////////////////////////////////////////////////////////////
function addUrls(){
    var i =0;
for(i =0 ;i<sections.length;i++){
        const text = sections[i].getAttribute("data-nav");//the text the link in  li will hold
        const li = document.createElement('li'); 
        li.id=text;
        var a = document.createElement('a');       
        var link = document.createTextNode(text);             
        a.appendChild(link); 
        a.title = text;              
        a.href ='#'+ sections[i].id; 
        a.classList.add('menu__link');
        li.appendChild(a);
        fragment.appendChild(li)
    }
//appending all created ul to the navbar
ul.appendChild(fragment);
}


///////////////////////////////////////////////////////////////////////////////////////getting active section
window.addEventListener('scroll',function (){
    for( var i =0 ; i<sections.length;i++){
        const rect = sections[i].getBoundingClientRect(); 
        const name = sections[i].getAttribute('data-nav');
        const top = rect.top;
        if(top >0 && top <rect.height){
            const current =sections[i].getAttribute('data-nav');
            for(var j = 0 ; j<sections.length;j++){
                if(sections[j].classList.contains('your-active-class'))
                    sections[j].classList.remove('your-active-class');}
               sections[i].classList.add('your-active-class');
            const links = document.querySelectorAll('a');
            for(var j =0; j<links.length;j++){
                if(links[j].text==name){
                    for(var x =0; x<links.length;x++)
                        links[x].classList.remove('your-active-class');
                    links[j].classList.add('your-active-class');} 
            }
        }
}});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
addUrls();

// Add class 'active' to section when near top of viewport
distinguishActive();


// Scroll to anchor ID using scrollTO even


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
