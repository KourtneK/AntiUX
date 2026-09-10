const button = document.getElementById("botaocorreto");

function irParaPagina(url) {
    window.location.href = url;
}

button.addEventListener("click", () => {
    irParaPagina("cadasto.html");
});


const botao = document.getElementById("botao-vermelho");

botao.addEventListener("click", () => {
    const x = Math.random() * 6 - 3;
    const y = Math.random() * 6 - 3;

    botao.style.transform = `translate(${x}px, ${y}px)`;
});

let cliques = 0;

botao.addEventListener("click", () => {
    cliques++;

    document.getElementById("contador").textContent = cliques;

    const x = Math.random() * 6 - 3;
    const y = Math.random() * 6 - 3;

    botao.style.transform = `translate(${x}px, ${y}px)`;
});

// const button = document.getElementById("botaocorreto");

// function descobrirPagina() {
//     return window.location.href;
// }

// function irParaPagina(url) {
//     window.location.href = url;
// }

// button.addEventListener("click", () => {
//     const pagina = descobrirPagina();
//     irParaPagina(pagina);
// });
