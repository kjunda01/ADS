//Factory Function
function criaCalculadora() {
    return {
        // TODOS OS ATRIBUTOS (VARIÁVEIS DENTRO DO OBJETO)
        display: document.querySelector(".display"),

        // TODOS OS MÉTODOS (FUNÇÕES DENTRO DO OBJETO)
        inicia() {
            this.cliqueBotoes();
            this.numerosTeclado();
        },

        limpaDisplay() {
            this.display.value = "";
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        valoresParaDisplay(valor) {
            this.display.value += valor;
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                // Usa Function em vez de eval
                conta = Function('"use strict"; return (' + conta + ")")();

                if (conta === undefined || conta === null || isNaN(conta)) {
                    alert("Conta inválida!");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida!");
            }
        },

        cliqueBotoes() {
            // Delegando o evento para a tabela que contém todos os botões
            document
                .querySelector(".calculadora")
                .addEventListener("click", (e) => {
                    const el = e.target;

                    // Verifica se o alvo é um botão
                    if (el.tagName.toLowerCase() === "button") {
                        if (el.classList.contains("btn-num")) {
                            this.valoresParaDisplay(el.innerText);
                        }

                        if (el.classList.contains("btn-clear")) {
                            this.limpaDisplay();
                        }

                        if (el.classList.contains("btn-del")) {
                            this.apagaUm();
                        }

                        if (el.classList.contains("btn-eq")) {
                            this.realizaConta();
                        }
                    }
                });
        },

        numerosTeclado() {
            document.addEventListener("keydown", (e) => {
                const el = e.key;
                verifica = /^[0-9/*\-+().]+$/;

                if (verifica.test(el)) {
                    this.valoresParaDisplay(el);
                }
                if (el === "Backspace") {
                    this.apagaUm();
                }
                if (el === "Enter") {
                    this.realizaConta();
                }
                if (el == "Escape") {
                    this.limpaDisplay();
                }
            });
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
