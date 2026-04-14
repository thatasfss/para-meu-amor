// 1. Efeito de surgimento da galeria (Scroll)
const photos = document.querySelectorAll('.foto-mini');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

photos.forEach((photo) => { observer.observe(photo); });

// 2. Efeito do Coração + Revelação do Texto
document.getElementById('btnCoracao').addEventListener('click', () => {
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.7 },
        colors: ['#4b5320', '#ffffff', '#a2ad91']
    });

    // Inicia chuva de emojis
    const end = Date.now() + 3000;
    (function frame() {
        confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, scalar: 3, shapes: ['circle'] });
        confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, scalar: 3 });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());

    // O MOMENTO DA SURPRESA:
    setTimeout(() => {
        alert("Te amo muitooo!😍💚✨.");
        
        // APÓS O OK: Mostra o texto e rola até ele
        const secaoFinal = document.getElementById('secao-texto-final');
        secaoFinal.classList.remove('hidden-texto');
        
        // Rola suavemente para a última página
        secaoFinal.scrollIntoView({ behavior: 'smooth' });
    }, 600);
});