// on scroll, make header sticky //
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });


/*************scroll section active link****************/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let topt = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(topt >= offset && topt < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
      })
    }  
  })
  
};



// for testimonials slide effect
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("box1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

  // on scroll, show back-to-top button //
window.addEventListener("scroll", function(){
    var toTop = document.querySelector(".back-to-top");
    toTop.classList.toggle("sticky", window.scrollY > 600);
  });

  
  /***********dark and light mode***************/
let darkModeIcon = document.querySelector('#darkmode');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}