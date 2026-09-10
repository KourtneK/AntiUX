const campoSenha = document.getElementById("campo-senha");
const cadastrar = document.getElementById("cadastrar");

function atualizarRequisito(id, cumprido) {
    const requisito = document.getElementById(id);
    const simbolo = requisito.querySelector(".simbolo");

    if (cumprido) {
        requisito.classList.remove("nao-cumprido");
        requisito.classList.add("cumprido");
        simbolo.textContent = "&";
    } else {
        requisito.classList.remove("cumprido");
        requisito.classList.add("nao-cumprido");
        simbolo.textContent = "X";
    }
}

function verificarSequencia(caracteres) {
    for (let i = 0; i < caracteres.length - 1; i++) {
        const atual = caracteres.charCodeAt(i);
        const proximo = caracteres.charCodeAt(i + 1);

        if (Math.abs(proximo - atual) === 1) {
            return true;
        }
    }

    return false;
}

function verificarPulos(caracteres) {
    for (let i = 0; i < caracteres.length - 1; i++) {
        const atual = caracteres.charCodeAt(i);
        const proximo = caracteres.charCodeAt(i + 1);

        if (Math.abs(proximo - atual) > 1) {
            return true;
        }
    }

    return false;
}

campoSenha.addEventListener("input", () => {

    const senha = campoSenha.value;

    const maiusculas = senha.match(/[A-Z]/g) || [];
    const minusculas = senha.match(/[a-z]/g) || [];
    const numeros = senha.match(/[0-9]/g) || [];
    const especiais = senha.match(/[^A-Za-z0-9]/g) || [];

    atualizarRequisito(
        "req-tamanho",
        senha.length >= 8
    );

    atualizarRequisito(
        "req-maiusculas",
        maiusculas.length === 3
    );

    atualizarRequisito(
        "req-minusculas",
        minusculas.length === 2
    );

    atualizarRequisito(
        "req-numeros",
        numeros.length === 4
    );

    atualizarRequisito(
        "req-especiais",
        especiais.length === 5
    );

    const sequenciaNumeros = verificarSequencia(numeros.join(""));

    atualizarRequisito(
        "req-numeros-sequencia",
        numeros.length === 4 && !sequenciaNumeros
    );

    const letras = maiusculas.join("") + minusculas.join("");

    const sequenciaLetras = verificarSequencia(letras);

    atualizarRequisito(
        "req-letras-sequencia",
        letras.length === 5 && !sequenciaLetras
    );

    const temPulo = verificarPulos(numeros.join("")) ||
                    verificarPulos(letras);

    atualizarRequisito(
        "req-pulos",
        !temPulo
    );

    const numeroReverso = verificarSequencia(
        numeros.join("").split("").reverse().join("")
    );

    const letraReversa = verificarSequencia(
        letras.split("").reverse().join("")
    );

    atualizarRequisito(
        "req-reverso",
        !numeroReverso && !letraReversa
    );
});


cadastrar.addEventListener("click", () => {

    const requisitos = document.querySelectorAll(".requisito");

    for (const requisito of requisitos) {

        if (!requisito.classList.contains("cumprido")) {

            alert("PREENCHA TODOS OS REQUISITOS DA SENHA.");
            return;
        }
    }

    window.location.href = "zero.html";
});
