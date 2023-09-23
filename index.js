const msjInput = document.getElementById('mensajeInput');
const sendMsjBtn = document.getElementById('enviarMensaje');
const chatMsj = document.querySelector('.box-msj');

sendMsjBtn.addEventListener('click', () =>{
    enviarMensaje();
})

msjInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        enviarMensaje();
    }
})
function enviarMensaje(){
    const msj = mensajeInput.value.trim();
    if( msj !== ''){
        const nuevoMsj = document.createElement('div');
        nuevoMsj.className = 'mensaje-usuario';
        nuevoMsj.textContent = msj;
        chatMsj.appendChild(nuevoMsj);
        msjInput.value = '';


        chatMsj.scrollTop = chatMsj.scrollHeight;
    }

}
if (chatMsj.scrollHeight > chatMsj.clientHeight){
    chatMsj.style.overflowY = 'scroll';
}else {
    // Si no se supera la altura del contenedor, puedes ocultar la barra de desplazamiento
    chatMsj.style.overflowY = 'hidden';
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



