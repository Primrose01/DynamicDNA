// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==========================================
// STICKY NAVBAR
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(8,12,25,.95)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";

    }else{

        navbar.style.background = "rgba(8,12,25,.85)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const reveals = document.querySelectorAll(
".about,.skill-card,.education-card,.project-card,.experience-card,.reference-card,form"
);

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();

// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ==========================================
// TYPING EFFECT
// ==========================================

const typingText=document.querySelector(".typing-text");

const words=[

"Computer Science Graduate",

"Full Stack Developer",

"Software Developer",


];

let wordIndex=0;
let letterIndex=0;
let deleting=false;

function type(){

    const currentWord=words[wordIndex];

    if(!deleting){

        typingText.textContent=currentWord.substring(0,letterIndex);

        letterIndex++;

        if(letterIndex>currentWord.length){

            deleting=true;

            setTimeout(type,1500);

            return;

        }

    }else{

        typingText.textContent=currentWord.substring(0,letterIndex);

        letterIndex--;

        if(letterIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(type,deleting?60:120);

}

type();

// ==========================================
// HERO IMAGE FLOATING
// ==========================================

const heroImage=document.querySelector(".hero-image img");

let direction=1;

setInterval(()=>{

    heroImage.style.transform=`translateY(${direction*10}px)`;

    direction*=-1;

},1500);

// ==========================================
// CONTACT FORM
// ==========================================

const form=document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you for your message! I will get back to you soon.");

    form.reset();

});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================

const topButton=document.createElement("button");

topButton.innerHTML="<i class='fas fa-arrow-up'></i>";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.background="#00bfff";
topButton.style.color="white";
topButton.style.fontSize="20px";
topButton.style.display="none";
topButton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topButton.style.zIndex="1000";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// PROJECT CARD HOVER EFFECT
// ==========================================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ==========================================
// SKILL CARD ANIMATION
// ==========================================

document.querySelectorAll(".skill-card").forEach((card,index)=>{

    card.style.animationDelay=`${index*0.1}s`;

});

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Makweng Primrose Dimpho Mafiri`;
}