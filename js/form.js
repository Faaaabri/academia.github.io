
/* Contact */

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';
    const serviceID = 'service_fgry3r5';
    const templateID = 'template_f9y7gcf';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar Email';
        document.getElementById('form').style.display = 'none';

        // 👇 Asegurate de que sea una clase o ID válido
        const titulo = document.querySelector('.principal-titulo');
        if (titulo) titulo.style.display = 'none';

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


