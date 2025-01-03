document.addEventListener('DOMContentLoaded', function () {
    // Ativar animação das barras de progresso
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width; // Obtém a largura definida no HTML
        bar.style.width = '0'; // Reseta para 0 para animação
        setTimeout(() => {
            bar.style.width = width; // Define a largura original com animação
        }, 100); // Tempo de espera para ativar a transição
    });

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

    // Adiciona o evento de clique ao botão hambúrguer
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Seleciona todos os links de navegação móvel
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Adiciona o evento de clique para fechar o menu ao clicar nos links
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
