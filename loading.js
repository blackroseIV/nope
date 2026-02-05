window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    const bar = document.getElementById('bar');
    const percentTxt = document.getElementById('percent');

    // Forçamos a barra a chegar em 100% quando o site carregar
    if(bar) bar.style.width = "100%";
    if(percentTxt) percentTxt.innerHTML = "100%";

    // Espera um pouco para o usuário ver o 100% e inicia o sumiço
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // Só muda de página após a animação de fade-out (800ms no CSS)
        setTimeout(() => {
            // Verifique se o caminho é exatamente este na sua pasta
            window.location.href = "page-1/page-1.html"; 
        }, 800);

    }, 500);
});