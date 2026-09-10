const zeros = document.getElementById("zeros");
const mensagem = document.getElementById("mensagem");
const voltar = document.getElementById("voltar");

let erros = 0;

function gerarZeros() {

    zeros.innerHTML = "";

    voltar.style.display = "none";

    mensagem.textContent = "";

    const quantidade = Math.floor(Math.random() * 9999) + 2;

    const posicao = Math.floor(Math.random() * quantidade);

    for (let i = 0; i < quantidade; i++) {

        const zero = document.createElement("h6");

        if (i === posicao) {

            zero.textContent = "∅";

            zero.addEventListener("click", () => {

                erros++;

                if (erros === 1) {

                    mensagem.textContent =
                        "ERRO NO SITE. OS ZEROS FORAM REGERADOS.";

                    setTimeout(() => {
                        gerarZeros();
                    }, 1000);

                }
            });

        } else {

            zero.textContent = "0";

            zero.addEventListener("click", () => {

                mensagem.textContent =
                    "ISSO É UM ZERO NORMAL.";
            });
        }

        zeros.appendChild(zero);
    }
}

voltar.addEventListener("click", () => {
    window.location.href = "index.html";
});

gerarZeros();
