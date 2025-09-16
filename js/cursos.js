const cursos = [
    {
        titulo: "Curso de manejo de auto",
        precio: 12750,
        preciocontado: 11500,

        descripcion: "Aprende a manejar un automóvil de forma segura y eficiente. Este curso cubre desde conceptos básicos hasta técnicas avanzadas.",
        imagen: "imgs/OIP.jpg",
        precioxclase: 850,
        clases: 15,
        clasesxsemana: 2,

        desc_larga: " Este curso es perfecto para quienes prefieren un ritmo de aprendizaje relajado y constante. Con 2 clases por semana de 50 minutos, tendrás tiempo para absorber todo sin apuros. Ideal si tenés una agenda llena y querés conseguir tu libreta sin presiones.",
        teorico: "Material para el examen teorico",

        tramites: "Tramites ante la IMM",
        examen: "Primer examen sin costo",

    },

    {
        titulo: "Curso de auto semi-intensivo",
        precio: 14250,
        preciocontado: 13000,

        descripcion: "Aprende a manejar un automóvil de forma segura y eficiente. Este curso cubre desde conceptos básicos hasta técnicas avanzadas.",
        imagen: "imgs/OIP.jpg",
        precioxclase: 950,
        clases: 15,
        clasesxsemana: 3,
        
        desc_larga: "Este curso es el equilibrio perfecto entre rapidez y comodidad. Con 3 clases por semana de 50 minutos, podrás avanzar sin sentirte apurado. Aprendé lo necesario para tu licencia de manera efectiva y en un tiempo razonable.",

        teorico: "Material para el examen teorico",
        tramites: "Tramites ante la IMM",
        examen: "Primer examen sin costo",
    },

    {
        titulo: "Curso de auto intensivo",
        precio: 16000,
        preciocontado: 14500,

        descripcion: "Aprende a manejar un automóvil de forma segura y eficiente. Este curso cubre desde conceptos básicos hasta técnicas avanzadas.",
        imagen: "imgs/OIP.jpg",
        precioxclase: 1050,
        clases: 15,
        clasesxsemana: 4,

        desc_larga: "Este curso es ideal para quienes quieran obtener la libreta de forma rápida. Con 5 clases por semana de 50 minutos cada una, podrás completar tu formación intensiva en menos de un mes. Perfecto para aquellos con urgencia por conseguir su licencia y comenzar a manejar cuanto antes.",

        teorico: "Material para el examen teorico",
        tramites: "Tramites ante la IMM",
        examen: "Primer examen sin costo",

    },

    {
        titulo: "Curso de manejo de moto",
        precio: 4000,
        descripcion: "Domina el arte de conducir una motocicleta con confianza. Este curso incluye instrucciones prácticas y consejos para todos los niveles.",
        imagen: "imgs/OIP.jpg",
        precioxclase: 850,
        clases: 3,
        clasesxsemana: 2,

        desc_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam enim nemo optio aliquam minus laboriosam hic et facilis? Dolore quidem rem delectus sint? Voluptas doloribus delectus eaque soluta voluptate. Nulla ducimus vel exercitationem necessitatibus beatae eaque magnam id accusantium provident harum quasi corporis hic ad commodi rerum, ut deleniti veniam odit? Maiores eveniet laborum, obcaecati sequi molestiae fugit nobis quos asperiores ipsa! Labore deleniti quam animi quo eos totam recusandae perspiciatis cum quis dicta? Dicta dignissimos aspernatur optio necessitatibus, in illum quae quibusdam eum. Deserunt repudiandae minus, sint molestiae deleniti quis saepe dolores voluptas, corporis ipsum atque nesciunt",
        teorico: "Material para el examen teorico",

        tramites: "Tramites ante la IMM",
        examen: "Primer examen sin costo",
    },

    {
        titulo: "Curso de manejo de omnibus",
        precio: 11000,
        descripcion: "Conviértete en un conductor de autobús profesional con nuestro completo curso. Aprende todo, desde la operación del vehículo hasta la seguridad del pasajero.",
        imagen: "imgs/OIP.jpg",
        precioxclase: 850,
        clases: 5,
        clasesxsemana: 1,

        desc_larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam enim nemo optio aliquam minus laboriosam hic et facilis? Dolore quidem rem delectus sint? Voluptas doloribus delectus eaque soluta voluptate. Nulla ducimus vel exercitationem necessitatibus beatae eaque magnam id accusantium provident harum quasi corporis hic ad commodi rerum, ut deleniti veniam odit? Maiores eveniet laborum, obcaecati sequi molestiae fugit nobis quos asperiores ipsa! Labore deleniti quam animi quo eos totam recusandae perspiciatis cum quis dicta? Dicta dignissimos aspernatur optio necessitatibus, in illum quae quibusdam eum. Deserunt repudiandae minus, sint molestiae deleniti quis saepe dolores voluptas, corporis ipsum atque nesciunt",

        teorico: "Material para el examen teorico",
        tramites: "Tramites ante la IMM",
        examen: "Primer examen sin costo",
    },

];

/* CURSOS EN INDEX */
function insertarCursosEnHTML() {
  const cursosContainer = document.getElementById('cursos-content');

  cursos.forEach((curso, index) => {
    const li = document.createElement('li');
    li.classList.add('card');

    const divCardContent = document.createElement('div');
    divCardContent.classList.add('card-content');

    const h2 = document.createElement('h2');
    h2.textContent = curso.titulo;

    const span = document.createElement('span');
    span.textContent = `$${curso.precio}`;

    const precioCont = document.createElement('p');
    precioCont.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> Precio contado $${curso.preciocontado}`;

    const clasesP = document.createElement('p');
    clasesP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> Incluye ${curso.clases} clases prácticas`;

    const clasesxsemanaP = document.createElement('p');
    clasesxsemanaP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> ${curso.clasesxsemana} Clases por semana`;

    const precioxclaseP = document.createElement('p');
    precioxclaseP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> Precio por clase: $${curso.precioxclase}`;

    const teoricoP = document.createElement('p');
    teoricoP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> ${curso.teorico}`;

    const tramitesP = document.createElement('p');
    tramitesP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> ${curso.tramites}`;

    const examenP = document.createElement('p');
    examenP.innerHTML = `<span class="material-symbols-outlined"> check_circle </span> ${curso.examen}`;

    // ✅ Botón de WhatsApp
    const botonInfo = document.createElement("a");
    botonInfo.innerText = "Más información";
    botonInfo.classList.add("btn-info");
    botonInfo.href = `https://wa.me/598097027010?text=Hola,%20quiero%20más%20información%20sobre%20el%20${encodeURIComponent(curso.titulo)}`;
    botonInfo.target = "_blank";

    // Ensamblar card
    divCardContent.appendChild(h2);
    divCardContent.appendChild(span);
    divCardContent.appendChild(precioCont);
    divCardContent.appendChild(clasesP);
    divCardContent.appendChild(clasesxsemanaP);
    divCardContent.appendChild(precioxclaseP);
    divCardContent.appendChild(teoricoP);
    divCardContent.appendChild(tramitesP);
    divCardContent.appendChild(examenP);
    divCardContent.appendChild(botonInfo);

    li.appendChild(divCardContent);
    cursosContainer.appendChild(li);

    // ✅ Marcar semi-intensivo como destacada por defecto
    if (curso.titulo.includes("semi-intensivo")) {
      li.classList.add("destacada");
    }

    // ✅ Click para destacar otra card (excepto si clickea el botón)
    li.addEventListener("click", (e) => {
      if (e.target.closest(".btn-info")) return; // no hacer nada si fue en el botón
      document.querySelectorAll(".card").forEach(c => c.classList.remove("destacada"));
      li.classList.add("destacada");
    });
  });
}

insertarCursosEnHTML();
