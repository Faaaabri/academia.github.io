const cursos = [
    {
        titulo: "Curso de manejo de auto",
        precio: 11500,
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
        precio: 13000,
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
        precio: 14500,
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
        precio: 12000,
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

/* CURSOS EN INDEx */
function insertarCursosEnHTML() {
    const cursosContainer = document.getElementById('cursos-content');

    cursos.forEach((curso, index) => {
        // Crear elementos HTML
        const li = document.createElement('li');
        li.classList.add('card');

        // Crear la imagen fuera del div de contenido del curso

   /*      
         const img = document.createElement('img');
        img.classList.add('img');
        img.src = curso.imagen;
         */

        // Crear div para contenido del curso
        const divCardContent = document.createElement('div');
        divCardContent.classList.add('card-content');

        const h2 = document.createElement('h2');
        h2.textContent = curso.titulo;

        const divPrecioYBotones = document.createElement('div');
        divPrecioYBotones.classList.add('precio-y-botones');

        const span = document.createElement('span');
        span.textContent = `$${curso.precio}`;


    // Crear elementos <p> para mostrar la información adicional
    const teoricoP = document.createElement('p');
    teoricoP.innerHTML = `<i class="fas fa-book"></i> ${curso.teorico}`;

    const tramitesP = document.createElement('p');
    tramitesP.innerHTML = `<i class="fas fa-clipboard-check"></i> ${curso.tramites}`;

    const clasesP = document.createElement('p');
    clasesP.innerHTML = `<i class="fas fa-chalkboard-teacher"></i> Incluye ${curso.clases} clases prácticas`;

    const clasesxsemanaP = document.createElement('p');
    clasesxsemanaP.innerHTML = `<i class="fas fa-calendar-alt"></i> ${curso.clasesxsemana} Clases por semana`;

    const examenP = document.createElement('p');
    examenP.innerHTML = `<i class="fas fa-file-alt"></i> ${curso.examen}`;

    const precioxclaseP = document.createElement('p');
    precioxclaseP.innerHTML = `<i class="fas fa-dollar-sign"></i> Precio por clase: $${curso.precioxclase}`;


        // Crear el enlace con la clase cta
      /*   const aCTA = document.createElement('a');
        aCTA.classList.add('cta');
        aCTA.textContent = "Ver detalles";
 */
        // Añadir elementos al div de contenido del curso
        divCardContent.appendChild(h2);
        divCardContent.appendChild(span);

        divCardContent.appendChild(divPrecioYBotones);
        divCardContent.appendChild(clasesP);
        divCardContent.appendChild(clasesxsemanaP);
        divCardContent.appendChild(precioxclaseP);
        divCardContent.appendChild(teoricoP);
        divCardContent.appendChild(tramitesP);

      /*   divCardContent.appendChild(aCTA); */

    /*      // Añadir la imagen al li
        li.appendChild(img); */ 

        // Añadir div de contenido del curso al li
        li.appendChild(divCardContent);

        // Agregar evento de clic a la card para "Ver detalles"
        li.addEventListener('click', () => {
            // Redirigir a la página de detalle_curso.html con el ID del curso en la URL
            window.location.href = `detalle_curso.html?id=${index}`;
        });

        // Agregar el li al contenedor de cursos
        cursosContainer.appendChild(li);
    });
}

// Llamada a la función para insertar los cursos en el HTML
insertarCursosEnHTML();
