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


/* Contact */

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_f9y7gcf';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar Email';
        document.getElementById('form').style.display = 'none';
        document.querySelector('principal-titulo').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
      }, (err) => {
        btn.value = 'Enviar Email';
        alert(JSON.stringify(err));
      });
  });

document.getElementById('to_name').addEventListener('input', function (e) {
  const input = e.target;
  const value = input.value;
  if (!/^\d*$/.test(value)) {
    input.value = value.replace(/\D/g, '');
  }
});



