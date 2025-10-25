/* ACTIVE EN NAV */

document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
      }
  });
});



document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  


    /* FAQS */

    const accordionItemHeaders = document.querySelectorAll(
        ".accordion-item-header"
      );
      
      accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener("click", (event) => {
          // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
      
          const currentlyActiveAccordionItemHeader = document.querySelector(
            ".accordion-item-header.active"
          );
          if (
            currentlyActiveAccordionItemHeader &&
            currentlyActiveAccordionItemHeader !== accordionItemHeader
          ) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
          }
          accordionItemHeader.classList.toggle("active");
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
          } else {
            accordionItemBody.style.maxHeight = 0;
          }
        });
      });
      

  /* CONTADOR */

const values = document.querySelectorAll(".int");
const timeInterval = 3000;

values.forEach((displayElem) => {
    let valueStart = 0;
    const valueEnd = parseInt(displayElem.getAttribute("data-value"));
    const duration = Math.floor(timeInterval /  valueEnd);
    const counter = setInterval(() => {
       valueStart += 1;
       displayElem.innerHTML = valueStart;
       if (valueStart == valueEnd) {
        clearInterval(counter)
       } 
    }, duration);
})

/* Nav mobile */

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menuIcon = document.querySelector('.menu-icon');

  menuToggle.addEventListener('click', function () {
    if (menuIcon.textContent === '☰') {
      menuIcon.textContent = '✕';
    } else {
      menuIcon.textContent = '☰';
    }
    // Aquí puedes agregar la lógica para abrir/cerrar el menú móvil
  });
});


