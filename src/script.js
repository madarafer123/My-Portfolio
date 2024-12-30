// Função para alternar o menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// Função para fechar o menu
function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// Adiciona o evento de clique ao botão hamburguer
hamburger.addEventListener('click', toggleMobileMenu);
