// // Funções construtoras

// function Calculadora() {
//     // TODOS OS ATRIBUTOS (VARIÁVEIS DENTRO DO OBJETO)
//     const display = document.querySelector(".display");

//     // TODOS OS MÉTODOS (FUNÇÕES DENTRO DO OBJETO)
//     this.iniciar = function () {
//         cliqueBotoes();
//         numerosTeclado();
//     };

//     const limpaDisplay = function () {
//         display.value = "";
//     };

//     const apagaUm = function () {
//         display.value = display.value.slice(0, -1);
//     };

//     const valoresParaDisplay = (valor) => {
//         display.value += valor;
//     };

//     const realizaConta = function () {
//         let conta = display.value;
//         try {
//             // Usa Function em vez de eval
//             conta = Function('"use strict"; return (' + conta + ")")();

//             if (conta === undefined || conta === null || isNaN(conta)) {
//                 alert("Conta inválida!");
//                 return;
//             }
//             display.value = String(conta);
//         } catch (e) {
//             alert("Conta inválida!");
//         }
//     };

//     const cliqueBotoes = function () {
//         // Delegando o evento para a tabela que contém todos os botões
//         document
//             .querySelector(".calculadora")
//             .addEventListener("click", (e) => {
//                 const el = e.target;

//                 // Verifica se o alvo é um botão
//                 if (el.tagName.toLowerCase() === "button") {
//                     if (el.classList.contains("btn-num")) {
//                         valoresParaDisplay(el.innerText);
//                     }

//                     if (el.classList.contains("btn-clear")) {
//                         limpaDisplay();
//                     }

//                     if (el.classList.contains("btn-del")) {
//                         apagaUm();
//                     }

//                     if (el.classList.contains("btn-eq")) {
//                         realizaConta();
//                     }
//                 }
//             });
//     };

//     const numerosTeclado = function () {
//         document.addEventListener("keydown", (e) => {
//             const el = e.key;
//             verifica = /^[0-9/*\-+().]+$/;

//             if (verifica.test(el)) {
//                 valoresParaDisplay(el);
//             }
//             if (el === "Backspace") {
//                 apagaUm();
//             }
//             if (el === "Enter") {
//                 realizaConta();
//             }
//             if (el == "Escape") {
//                 limpaDisplay();
//             }
//         });
//     };
// }

// const calculadora = new Calculadora();
// calculadora.iniciar();

function Calculadora() {
    const display = document.querySelector(".display");

    this.inicia = () => {
        display.value = "";
        capturaCliques();
        capturaTeclas();
    };

    const capturaTeclas = () => {
        document
            .querySelector(".display")
            .addEventListener("keydown", (evento) => {
                if (evento.key === "Enter") {
                    realizaConta();
                }

                if (
                    !/[0-9/*\-+().]/.test(display.value) ||
                    evento.key === "Escape"
                ) {
                    limpaDisplay();
                }
            });
    };

    const capturaCliques = () => {
        document.querySelector("table").addEventListener("click", (evento) => {
            const elemento = evento.target;
            if (elemento.classList.contains("btn-num")) {
                addNumDisplay(elemento);
            }
            if (elemento.classList.contains("btn-clear")) {
                limpaDisplay();
            }
            if (elemento.classList.contains("btn-del")) {
                apagaUm();
            }
            if (elemento.classList.contains("btn-eq")) {
                realizaConta();
            }
        });
    };

    const addNumDisplay = (elemento) => {
        display.value += elemento.innerText;
        display.focus();
    };

    const realizaConta = () => {
        try {
            const conta = eval(display.value);
            if (!conta) {
                alert("Conta inválida!");
                return;
            }
            display.value = conta;
        } catch (e) {
            alert("Conta inválida");
            return;
        }
    };

    const limpaDisplay = () => (display.value = "");

    const apagaUm = () => (display.value = display.value.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.inicia();
