// static/app.js
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

if (burger && navbar) {
  burger.addEventListener('click', () => navbar.classList.toggle('open'));
  document.querySelectorAll('.nav-list a').forEach(a =>
    a.addEventListener('click', () => navbar.classList.remove('open'))
  );
}

// Sombra de navbar al hacer scroll
const onScroll = () => navbar?.classList.toggle('is-scrolled', (window.scrollY||0) > 6);
window.addEventListener('scroll', onScroll); onScroll();

  // resto igual…



  // 2) Formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');

    const formData = new FormData(this);

    fetch('/send_email', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      showFlashMessage('Mensaje enviado correctamente.', 'success');
      this.reset();
      submitButton.classList.remove('loading');
    })
    .catch(err => {
      showFlashMessage('Hubo un error al enviar el mensaje.', 'danger');
      console.error('Error:', err);
      submitButton.classList.remove('loading');
    });
  });


// 3) Función para mostrar mensajes flash
function showFlashMessage(message, category) {
  const flashContainer = document.getElementById('flash-messages');

  // Opcional: limpiar mensajes anteriores
  // flashContainer.innerHTML = '';

  const flashMessage = document.createElement('div');
  flashMessage.className = `alert ${category}`;
  flashMessage.textContent = message;

  flashContainer.appendChild(flashMessage);

  setTimeout(() => {
    flashMessage.remove();
  }, 5000);
}




