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
})

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classList.add('loading');

    const formData = new FormData(this);
    
    fetch('/send_email', {
       method: 'POST', 
       body:formData

    })
.then(response => response.text())
.then (data => {
    showFlashMessage('Mensaje enviado correctamente.', 'success');
    this.reset();
    submitButton.classList.remove('loading');

})
.catch(erro=> {
    showFlashMessage('Hubo un error al enviar el mensaje.', 'danger');
    console.error('Error:', error);
});
});

function showFlashMessage(message, category){
    const flashcontainer = document.getElementById('flash-messages');
    const flashMessage=documen.createElement('div');
    flashMessage.className= `alert $(category)`;
    flashMessage.textContent=message;

    flashcontainer.appendChild(flashMessage);

    setTimeout(() =>{
        flashMessage.remove()
    
    }, 5000);

}



