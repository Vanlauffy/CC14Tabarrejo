/* ===============================
   CUSTOM CURSOR
=============================== */
const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

/* ===============================
   SCROLL REVEAL
=============================== */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      r.classList.add("active");
    }
  });
});

/* ===============================
   ACTIVE NAV LINK
=============================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{
  let current = "";
  sections.forEach(sec=>{
    if(pageYOffset >= sec.offsetTop - 200){
      current = sec.id;
    }
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});

/* ===============================
   TYPEWRITER EFFECT
=============================== */
const typewriter = document.getElementById("typewriter");
const words = ["Van Laurenz", "Creative Developer", "Tech Enthusiast"];
let wordIndex = 0;
let textIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){
  currentWord = words[wordIndex];
  if(isDeleting){
    typewriter.textContent = currentWord.substring(0,textIndex--);
  } else{
    typewriter.textContent = currentWord.substring(0,textIndex++);
  }

  if(!isDeleting && textIndex === currentWord.length){
    isDeleting = true;
    setTimeout(type, 1500);
  } else if(isDeleting && textIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex+1)%words.length;
    setTimeout(type, 300);
  } else{
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

/* ===============================
   3D TILT EFFECT
=============================== */
const projects = document.querySelectorAll("[data-tilt]");

projects.forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx)/cx;
    const dy = (y - cy)/cy;

    card.style.transform = `rotateY(${dx*15}deg) rotateX(${-dy*15}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});
