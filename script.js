document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Obtém os valores dos campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    
    // Limpa mensagens anteriores
    formMessage.textContent = '';

    // Validação básica dos campos vazios
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Por favor, preencha todos os campos.';
        formMessage.style.color = 'red';
        return;
    }

    // Validação do nome (mínimo de 3 caracteres e apenas letras e espaços)
    const namePattern = /^[A-Za-zÀ-ÿ\s]+$/; // Permite letras com acentos e espaços
    if (name.length < 3 || !namePattern.test(name)) {
        formMessage.textContent = 'O nome deve ter pelo menos 3 caracteres e conter apenas letras.';
        formMessage.style.color = 'red';
        return;
    }

    // Validação do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Por favor, insira um e-mail válido.';
        formMessage.style.color = 'red';
        return;
    }

    formMessage.style.color = 'green';
    formMessage.textContent = 'Mensagem enviada com sucesso!';

    // Exibe uma mensagem de confirmação
    alert("Obrigado por entrar em contato! Em breve, responderemos sua mensagem😎.");

    // Opcional: limpa o formulário após o envio
    document.getElementById('contactForm').reset();
});


//video
document.getElementById('play-video-button').addEventListener('click', function () {
    var videoContainer = document.getElementById('video-container');

    // Cria o elemento iframe somente quando o botão é clicado
    var videoFrame = document.createElement('iframe');
    videoFrame.width = "560";
    videoFrame.height = "315";
    videoFrame.src = "https://www.youtube.com/embed/aRnnaebO9_Y?autoplay=1";
    videoFrame.title = "YouTube video player";
    videoFrame.frameBorder = "0";
    videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    videoFrame.allowFullscreen = true;

    // Limpa o container e adiciona o iframe
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);

    // Exibe o container do vídeo
    videoContainer.style.display = 'iframe';
});








