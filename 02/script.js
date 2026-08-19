/* =====================================================
   MONITOR DE EVENTOS
===================================================== */

const evento = document.getElementById("evento");
const elemento = document.getElementById("elemento");
const tecla = document.getElementById("tecla");
const status = document.getElementById("status");


function atualizarMonitor(nomeEvento, nomeElemento, nomeTecla = "---") {

    evento.textContent = nomeEvento;

    elemento.textContent = nomeElemento;

    tecla.textContent = nomeTecla;

    status.textContent = "✔ Detectado";

}


/* =====================================================
   1. EVENTO CLICK
===================================================== */

const botaoEvento = document.getElementById("botaoEvento");

const mensagemEvento = document.getElementById("mensagemEvento");


botaoEvento.addEventListener("click", function () {

    mensagemEvento.textContent =
        "🎉 Você clicou no botão! O evento foi detectado.";

    atualizarMonitor(
        "click",
        "BUTTON"
    );

});


/* =====================================================
   2. ADD EVENT LISTENER
===================================================== */

const botaoListener =
    document.getElementById("botaoListener");

const resultadoListener =
    document.getElementById("resultadoListener");


botaoListener.addEventListener("click", function () {

    resultadoListener.textContent =
        "✔ O addEventListener detectou o clique!";

    atualizarMonitor(
        "click",
        "BUTTON"
    );

});


/* =====================================================
   3. VÁRIOS ELEMENTOS COM CLICK
===================================================== */

const botoesClick =
    document.querySelectorAll(".botaoClick");


botoesClick.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const nome =
            botao.getAttribute("data-nome");

        document.getElementById("resultadoClick").textContent =
            "Você clicou no " + nome + ".";

        atualizarMonitor(
            "click",
            nome
        );

    });

});


/* =====================================================
   4. KEYDOWN
===================================================== */

const campoTeclado =
    document.getElementById("campoTeclado");

const ultimaTecla =
    document.getElementById("ultimaTecla");


campoTeclado.addEventListener("keydown", function (event) {

    ultimaTecla.textContent =
        event.key;

    atualizarMonitor(
        "keydown",
        "INPUT",
        event.key
    );

});


/* =====================================================
   5. MOUSEOVER
===================================================== */

const areaMouse =
    document.getElementById("areaMouse");

const resultadoMouse =
    document.getElementById("resultadoMouse");


areaMouse.addEventListener("mouseover", function () {

    areaMouse.style.backgroundColor =
        "#bbf7d0";

    areaMouse.style.borderColor =
        "#16a34a";

    areaMouse.querySelector("strong").textContent =
        "🎉 O mouse entrou!";

    resultadoMouse.textContent =
        "✔ Evento mouseover detectado!";

    atualizarMonitor(
        "mouseover",
        "DIV"
    );

});


areaMouse.addEventListener("mouseout", function () {

    areaMouse.style.backgroundColor =
        "#e0f2fe";

    areaMouse.style.borderColor =
        "#0284c7";

    areaMouse.querySelector("strong").textContent =
        "Passe o mouse aqui";

});


/* =====================================================
   6. EVENTO INLINE
===================================================== */

function eventoInline() {

    document.getElementById("resultadoInline").textContent =
        "✔ O evento inline foi executado!";

    atualizarMonitor(
        "click",
        "BUTTON"
    );

}


/* =====================================================
   7. ADD EVENT LISTENER MODERNO
===================================================== */

const botaoModerno =
    document.getElementById("botaoModerno");

const resultadoModerno =
    document.getElementById("resultadoModerno");


botaoModerno.addEventListener("click", function () {

    resultadoModerno.textContent =
        "✔ O evento foi adicionado pelo JavaScript!";

    atualizarMonitor(
        "click",
        "BUTTON"
    );

});


/* =====================================================
   8. DESAFIO
===================================================== */

const botoesDesafio =
    document.querySelectorAll(".desafio-btn");

const resultadoDesafio =
    document.getElementById("resultadoDesafio");


botoesDesafio.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const resposta =
            botao.getAttribute("data-evento");

        resultadoDesafio.innerHTML =
            "💡 Para essa situação, o evento correto é: <strong>"
            + resposta +
            "</strong>";

        atualizarMonitor(
            "click",
            "BUTTON"
        );

    });

});