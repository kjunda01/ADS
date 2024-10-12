const pesoAleatorio = () => Math.random() * (120 - 40) + 40; // Peso entre 40 e 120 kg
const alturaAleatoria = () => Math.random() * (2 - 1.4) + 1.4; // Altura entre 1.4 e 2 metros

// factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // GETTER
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,

        // GETTER
        get imc() {
            return (this.peso / this.altura ** 2).toFixed(2);
        },
    };
}

const p1 = criaPessoa("Giovana", "Morais", alturaAleatoria(), pesoAleatorio());
const p2 = criaPessoa("Maria", "Joaquina", alturaAleatoria(), pesoAleatorio());

console.log(p1.imc);
p1.nomeCompleto = "Sinval Silva Junior";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
