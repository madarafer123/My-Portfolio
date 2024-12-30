document.addEventListener('DOMContentLoaded', function () {
    // Certificando-se de que o script só será executado após o carregamento completo do DOM

    // Função para alternar o menu
    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('active'); // Alternar a classe 'active' para mostrar/ocultar o menu
    }

    // Função para fechar o menu
    function closeMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        menu.classList.remove('active'); // Remover a classe 'active' para fechar o menu
    }

    // Seleciona o botão hambúrguer
    const hamburger = document.querySelector('.hamburger');

    // Verifica se o botão hambúrguer existe antes de adicionar o evento de clique
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    } else {
        console.error("Hamburger menu element not found");
    }

    // Seleciona todos os links de navegação móvel
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Adiciona o evento de clique para fechar o menu ao clicar nos links
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

});
