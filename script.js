const header=document.getElementById("header");
const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const backTop=document.getElementById("backTop");
const form=document.getElementById("contactForm");
const formNote=document.getElementById("formNote");

window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>20);
  backTop.classList.toggle("show",window.scrollY>500);
});

menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));
backTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const subject=document.getElementById("subject").value.trim();
  const message=document.getElementById("message").value.trim();
  const body=`Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href=`mailto:velanginisuvva@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent="Opening your email app to send the message...";
});
