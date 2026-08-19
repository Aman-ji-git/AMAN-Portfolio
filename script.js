const roles = ["Python & ML solutions","Data Science","computer vision systems","Data Analytics"];
let roleIndex = 0, charIndex = 0, deleting = false;
const typed = document.getElementById("typed");

function typeLoop(){
  const current = roles[roleIndex];
  typed.textContent = deleting ? current.slice(0, --charIndex) : current.slice(0, ++charIndex);
  let delay = deleting ? 45 : 80;
  if(!deleting && charIndex === current.length){ deleting=true; delay=1300; }
  if(deleting && charIndex === 0){ deleting=false; roleIndex=(roleIndex+1)%roles.length; delay=250; }
  setTimeout(typeLoop, delay);
}
typeLoop();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const sections = [...document.querySelectorAll("section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];
window.addEventListener("scroll",()=>{
  const y = window.scrollY + 120;
  let current = sections[0].id;
  sections.forEach(s=>{ if(y >= s.offsetTop) current=s.id; });
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+current));
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const senderEmail = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body =
      `Hello Aman,\n\n` +
      `${message}\n\n` +
      `Name: ${name}\n` +
      `Email: ${senderEmail}`;

    const mailto =
      `mailto:bisenaman675@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
}
