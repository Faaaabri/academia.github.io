document.addEventListener('DOMContentLoaded', function() {
    mostrarDetalleCurso();
    agregarInfoAdicionalCurso();
    
    const comprarCursoLink = document.getElementById('comprar-curso');
    // Agregar un evento de clic al enlace
    comprarCursoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener el parámetro "id" de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = parseInt(urlParams.get('id'));

        // Obtener el curso correspondiente al id
        const curso = cursos[cursoId];

        // Construir el mensaje de WhatsApp
        const mensaje = encodeURIComponent(`Hola, quiero información sobre el curso "${curso.titulo}"`);

        // Redirigir a WhatsApp con el mensaje predefinido
        window.location.href = `https://wa.me/+598097027010?text=${mensaje}`;
    });
});

function mostrarDetalleCurso() {
    // Obtener el parámetro "id" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = parseInt(urlParams.get('id'));

    // Obtener el curso correspondiente al id
    const curso = cursos[cursoId];

    // Obtener el div donde se mostrará el detalle del curso
    const detalleCursoDiv = document.getElementById('detalle-curso');

    // Crear un div para contener la imagen y el texto del curso
    const detalleCursoContentDiv = document.createElement('div');
    detalleCursoContentDiv.classList.add('detalle-curso-content');

    // Crear la imagen del curso
    const imagen = document.createElement('img');
    imagen.src = curso.imagen;
    imagen.alt = curso.titulo;

    // Crear un div para contener los textos
    const textoDiv = document.createElement('div');
    textoDiv.classList.add('text');

    // Crear elementos HTML para mostrar la información del curso
    const titulo = document.createElement('h2');
    titulo.textContent = curso.titulo;

    const precio = document.createElement('h3');
    precio.textContent = `$${curso.precio}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = curso.descripcion;

    // Crear un enlace con la clase "cta"
    const ctaLink = document.createElement('a');
    ctaLink.textContent = 'Comprar';
    ctaLink.classList.add('cta');
    ctaLink.href = '#'; // Agrega aquí el enlace a la página de compra del curso

    // Agregar los elementos de texto al div de texto
    textoDiv.appendChild(titulo);
    /* textoDiv.appendChild(precio);
       textoDiv.appendChild(ctaLink); */
    textoDiv.appendChild(descripcion);

    // Agregar la imagen y el div de texto al div del detalle del curso
    detalleCursoContentDiv.appendChild(imagen);
    detalleCursoContentDiv.appendChild(textoDiv);

    // Agregar la sección de precio e información adicional al div del detalle del curso
    const infoCursoPrice = document.createElement('div');
    infoCursoPrice.classList.add('info-curso-price');

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    const price = document.createElement('p');
    price.classList.add('precio');

    const comprarLink = document.createElement('a');
    comprarLink.href = '';
    comprarLink.classList.add('cta');
    comprarLink.id = 'comprar-curso';
    comprarLink.textContent = 'Lo quiero';

    const infoAdicional = document.createElement('div');
    infoAdicional.classList.add('info-adicional');

    priceContainer.appendChild(price);
    priceContainer.appendChild(comprarLink);
    priceContainer.appendChild(infoAdicional);

    infoCursoPrice.appendChild(priceContainer);

    // Limpiar cualquier contenido previo del div
    detalleCursoDiv.innerHTML = '';

    // Agregar el div del detalle del curso al contenedor principal
    detalleCursoDiv.appendChild(detalleCursoContentDiv);

    // Agregar la sección de precio e información adicional al detalle del curso
    detalleCursoDiv.appendChild(infoCursoPrice);
}

function agregarInfoAdicionalCurso() {
    // Obtener el parámetro "id" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = parseInt(urlParams.get('id'));

    // Obtener el curso correspondiente al id
    const curso = cursos[cursoId];

    // Obtener el elemento donde se mostrará la descripción larga del curso
    const descCursoElement = document.querySelector('.desc-curso');

    // Obtener el elemento donde se mostrará el precio del curso
    const precioElement = document.querySelector('.precio');

    // Obtener el div donde se mostrará la información adicional del curso
    const infoAdicionalDiv = document.querySelector('.info-adicional');

    // Agregar la descripción larga al elemento
    descCursoElement.textContent = curso.desc_larga;

    // Agregar el precio al elemento
    precioElement.textContent = `$${curso.precio}`;

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

    // Limpiar cualquier contenido previo del div
    infoAdicionalDiv.innerHTML = '';

    // Agregar los elementos <p> al div de información adicional
    infoAdicionalDiv.appendChild(clasesP);
    infoAdicionalDiv.appendChild(clasesxsemanaP);
    infoAdicionalDiv.appendChild(precioxclaseP);
    infoAdicionalDiv.appendChild(teoricoP);
    infoAdicionalDiv.appendChild(tramitesP);
    infoAdicionalDiv.appendChild(examenP);
}

