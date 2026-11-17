document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualiza o ano no rodapé automaticamente
    const elementoAno = document.getElementById('ano-atual');
    if (elementoAno) {
        elementoAno.textContent = new Date().getFullYear();
    }

    // 2. Botão flutuante de "Voltar ao topo"
    const btnTopo = document.getElementById('btn-topo');
    if (btnTopo) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnTopo.classList.add('visivel');
            } else {
                btnTopo.classList.remove('visivel');
            }
        });

        btnTopo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Animação suave ao rolar a página (Scroll Reveal nos cards)
    const elementosAnimados = document.querySelectorAll('.habilidade-card, .projeto-card, .sobre-conteudo');
    
    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
            }
        });
    }, { threshold: 0.15 });

    elementosAnimados.forEach((el) => {
        el.classList.add('oculto');
        observador.observe(el);
    });

    // 4. Destaca o link do menu conforme a seção visível na tela
    const secoes = document.querySelectorAll('section');
    const linksMenu = document.querySelectorAll('.menu a');

    window.addEventListener('scroll', () => {
        let secaoAtual = '';
        secoes.forEach((secao) => {
            const topoSecao = secao.offsetTop - 150;
            if (window.scrollY >= topoSecao) {
                secaoAtual = secao.getAttribute('id');
            }
        });

        linksMenu.forEach((link) => {
            link.classList.remove('ativo');
            if (link.getAttribute('href') === `#${secaoAtual}`) {
                link.classList.add('ativo');
            }
        });
    });
});