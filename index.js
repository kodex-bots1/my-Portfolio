document.addEventListener("DOMContentLoaded", function() {
  //mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  });

  // Close menu when clicking on a link
  document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      menuToggle.querySelector('i').classList.add('fa-bars');
      menuToggle.querySelector('i').classList.remove('fa-times');
    });
  });
  // text tying useEffect
  const text = [
    "Frontend Developer",
    "UI/UX Designer",
    "Backend Developer",
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let tyingDelay = 100;

  function type(){
    const currentText = text[textIndex];
    const tyingElement = document.querySelector(".typing-text");

    if(isDeleting){
      tyingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      tyingDelay = 50;
    } else{
      tyingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      tyingDelay = 100;
    }

    if (isDeleting && charIndex === currentText.lenght){
      isDeleting = true;
      tyingDelay = 1500;
    } else if (isDeleting && charIndex === 0){
      isDeleting = false;
      textIndex = (textIndex + 1) % text.lenght;
      tyingDelay = 500;
    }

    setTimeout(type, tyingDelay);
  }  

  //Start typing effect after a delay
  setTimeout(type, 1000);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement){
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});




// develope.config.js
const Kodex = {
  name: "Kodex",
  role: "Full Stack Developer",
  openToWork: true,
  stack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  location: "Nigeria ",
  diciplineLevel: "strict",
};