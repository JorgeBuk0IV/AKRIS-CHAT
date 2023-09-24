const msjInput = document.getElementById('mensajeInput');
const sendMsjBtn = document.getElementById('enviarMensaje');
const chatMessages = document.querySelector('.chat-messages'); // Cambiado el selector para apuntar al contenedor de mensajes

sendMsjBtn.addEventListener('click', () => {
    enviarMensaje();
});

msjInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        enviarMensaje();
    }
});

function enviarMensaje() {
    const msj = msjInput.value.trim();
    if (msj !== '') {
        const nuevoMsj = document.createElement('div');
        nuevoMsj.className = 'mensaje-usuario';
        nuevoMsj.textContent = msj;
        chatMessages.appendChild(nuevoMsj);
        msjInput.value = '';

        // Desplazar hacia el nuevo mensaje agregado
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}


const categoriasButton = document.getElementById('categoriasButton');
const faqsButton = document.getElementById('faqsButton');

categoriasButton.addEventListener('click', () => {
    categoriasButton.classList.toggle('clicked');
    faqsButton.classList.remove('clicked'); // Asegúrate de que solo un botón tenga la clase "clicked" a la vez
});

faqsButton.addEventListener('click', () => {
    faqsButton.classList.toggle('clicked');
    categoriasButton.classList.remove('clicked'); // Asegúrate de que solo un botón tenga la clase "clicked" a la vez
});



