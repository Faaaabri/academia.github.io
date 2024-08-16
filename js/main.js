function insertarCursosEnHTML(cursos) {
    const cursosContainer = document.getElementById('cursos-container');

    cursos.forEach(curso => {
        // Crear elementos HTML
        const li = document.createElement('li');
        li.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('img');
        img.src = curso.imagen;

        const h2 = document.createElement('h2');
        h2.textContent = curso.titulo;

        const p = document.createElement('p');
        p.textContent = curso.descripcion;

        const span = document.createElement('span');
        span.textContent = `$${curso.precio}`;

        const button = document.createElement('button');
        button.textContent = 'Comprar';
        button.classList.add('comprar-btn');

        // Añadir elementos al contenedor de cursos
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(button);

        cursosContainer.appendChild(li);
    });
}

// Llamada a la función con el array de cursos
insertarCursosEnHTML(cursos);
