document.addEventListener("DOMContentLoaded", function () {

/* ==================================
MOBILE MENU
================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}


/* ==================================
CLOSE MOBILE MENU
================================== */

document.querySelectorAll('.navbar a').forEach(link=>{

link.addEventListener('click',()=>{

if(navbar){

navbar.classList.remove('active');

}

});

});


/* ==================================
SCROLL TOP
================================== */

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

topBtn.style.display =
window.scrollY > 300
? "flex"
: "none";

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

}


/* ==================================
HEADER SHADOW
================================== */

const header=document.querySelector('.header');

if(header){

window.addEventListener("scroll",()=>{

header.style.boxShadow=

window.scrollY>50

?

"0 5px 25px rgba(0,0,0,.15)"

:

"none";


});

}



/* ==================================
COUNTERS
================================== */

const counters=document.querySelectorAll('.stat-grid h2');

counters.forEach(counter=>{

let count=0;

const target=parseInt(counter.innerText);

const update=()=>{

if(count<target){

count+=2;

counter.innerText=count+'+';

requestAnimationFrame(update);

}

else{

counter.innerText=target+'+';

}

}

update();

});


/* ==================================
REVEAL ANIMATION
================================== */

const items=document.querySelectorAll(

'.card,.project-card,.grid-2'

);


const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});


items.forEach(item=>{

observer.observe(item);

});

});

