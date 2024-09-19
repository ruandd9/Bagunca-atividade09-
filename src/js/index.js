// Obtém os modais
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Obtém os links de Login e Cadastro
var loginLink = document.getElementById("loginLink");
var registerLink = document.getElementById("registerLink");

// Obtém os botões de fechar (X)
var closeLogin = document.getElementById("closeLogin");
var closeRegister = document.getElementById("closeRegister");

// Função para abrir o modal com animação
function openModal(modal) {
    modal.style.display = "block";
    modal.classList.add('modal-slide-in');
}

// Função para fechar o modal e remover a animação
function closeModal(modal) {
    modal.classList.remove('modal-slide-in');
    setTimeout(function() {
        modal.style.display = "none";
    }, 300); // Tempo para a animação de saída
}

// Abre o modal de Login com animação
loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    openModal(loginModal);
});

// Abre o modal de Cadastro com animação
registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    openModal(registerModal);
});

// Fecha o modal de Login
closeLogin.onclick = function() {
    closeModal(loginModal);
}

// Fecha o modal de Cadastro
closeRegister.onclick = function() {
    closeModal(registerModal);
}

// Fecha os modais ao clicar fora
window.onclick = function(event) {
    if (event.target == loginModal) {
        closeModal(loginModal);
    }
    if (event.target == registerModal) {
        closeModal(registerModal);
    }
}
