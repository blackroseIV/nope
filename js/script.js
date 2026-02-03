document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoSobre');

    if (video) {
        // 1. Roda automático a primeira vez (1x)
        video.play().catch(error => console.log("Autoplay bloqueado:", error));

        // 2. Evento ao passar o mouse
        video.addEventListener('mouseenter', () => {
            // Se o vídeo já terminou, volta para o início
            if (video.ended) {
                video.currentTime = 0;
            }
            // Dá o play e NÃO pausamos no 'mouseleave'
            video.play();
        });

        // NOTA: Não adicionamos o 'mouseleave' com pause(), 
        // assim o vídeo continua rodando até o final sozinho.
    }
});