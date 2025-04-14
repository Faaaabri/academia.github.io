
    /* MENU */

    /* Teorico y faqs van en SERVICIOS */
    
  let menu = `
  <header>
    <div> <a href="index.html">    <img src="imgs/logo_2.png" class="logo" alt="logo de la academia"></a> </div>

    <input type="checkbox" id="nav_check" hidden>

    <nav >
      <ul>
        <li><a href="index.html" class="nav-link">Inicio</a></li>
        <li><a href="sobre_nosotros.html" class="nav-link">Nosotros</a></li>
        <li><a href="cursos.html" class="nav-link">Tarifas</a></li>
        <li><a href="examen_teorico.html" class="nav-link">Examen teórico</a></li>
        <li><a href="contacto.html" class="nav-link">Contacto</a></li>
        <li><a href="faqs.html" class="nav-link">Preguntas frecuentes</a></li>

      </ul>
    </nav>

    <div class="phone"> <a><span class="material-symbols-outlined">call</span></a> 097 027 010</div>

    

    <label for="nav_check" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </header>
  `;
  
  // Inserta el menú en el contenedor
  document.querySelector('.container').innerHTML = menu;


  /* FOOTER */

  let footer = `



  <div class="footer-content">

  <div class="footer-column">
  <h3>Redes Sociales</h3>
  <div class="social-icons">
      <a href="https://www.facebook.com/academiadechoferesescorpio" target=”_blank”><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/academiadechoferesescorpio/"><i class="fab fa-instagram" target=”_blank”></i></a>
      <a href="https://www.tiktok.com/@academiachoferesescorpio"><i class="fab fa-tiktok" target=”_blank”></i></a>
  </div>
  </div>

  <div class="footer-column">
      <h3>Categorías</h3>
      <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="sobre_nosotros.html">Acerca de</a></li>
          <li><a href="examen_teorico.html">Servicios</a></li>
          <li><a href="cursos.html">Precios</a></li>
          <li><a href="contacto.html">Contacto</a></li>
      </ul>
  </div>

  <div class="footer-column">
      <h3>Empresa</h3>
      <ul>
          <li><a href="sobre_nosotros.html">Sobre nosotros</a></li>
          <li><a href="sobre_nosotros.html#equipo">Equipo</a></li>
          <li><a href="index.html#contact">Contacto</a></li>
      </ul>
  </div>

    <div class="footer-column">
      <h3>Contactanos</h3>
      <ul>
          <li><a href=""https://wa.me/+598097027010?text=Hola,%20buen%20día.%20Quisiera%20información%20sobre..." target=”_blank”" class="cta">Contacto</a></li>
      </ul>
  </div>
  
  </div>
  

  `;

  document.querySelector('footer').innerHTML = footer;
