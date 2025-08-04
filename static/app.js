document.addEventListener('DOMContentLoaded', ()=>{
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');

    });
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

