//cria os modais
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

//links de Login e Cadastro
var loginLink = document.getElementById("loginLink");
var registerLink = document.getElementById("registerLink");

//botões de fechar
var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");

//modal com animação
function openModal(modal) {
    modal.style.display = "block";
    modal.classList.add('modal-slide-in');
}

//fechar o modal e remover a animação
function closeModal(modal) {
    modal.classList.remove('modal-slide-in');
    setTimeout(function() {
        modal.style.display = "none";
    }, 300); //timer da animação de saída
}

//modal de Login com animação
loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    openModal(loginModal);
});

//modal de Cadastro com animação
registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    openModal(registerModal);
});

// fecha o modal de login
closeLogin.onclick = function() {
    closeModal(loginModal);
}

// fecha o modal de cadastro
closeRegister.onclick = function() {
    closeModal(registerModal);
}

// fecha os modais ao clicar fora
window.onclick = function(event) {
    if (event.target == loginModal) {
        closeModal(loginModal);
    }
    if (event.target == registerModal) {
        closeModal(registerModal);
    }
}
