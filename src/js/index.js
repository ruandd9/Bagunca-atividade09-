// Obtém os modais
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Obtém os links de Login e Cadastro
var loginLink = document.querySelector('.header-home ul li a[href="#"]');
var registerLink = document.querySelector('.header-home ul li:nth-child(2) a');

// Obtém os botões de fechar (X)
var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");

// Abre o modal de Login quando o link de Login é clicado
loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = "block";
});

// Abre o modal de Cadastro quando o link de Cadastro é clicado
registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerModal.style.display = "block";
});

// Fecha o modal de Login quando o usuário clica no X
closeLogin.onclick = function() {
    loginModal.style.display = "none";
}

// Fecha o modal de Cadastro quando o usuário clica no X
closeRegister.onclick = function() {
    registerModal.style.display = "none";
}

// Fecha os modais se o usuário clicar fora da modal
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}
