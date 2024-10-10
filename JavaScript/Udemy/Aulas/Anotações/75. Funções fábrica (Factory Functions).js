const pesoAleatorio = () => Math.random() * 21;
const alturaAleatoria = () => Math.random() * 2;

// factory function
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        get imc() {
            return (this.peso / this.altura ** 2).toFixed(2);
        },
    };
}

const p1 = criaPessoa("Giovana", "Morais", alturaAleatoria(), pesoAleatorio());
const p2 = criaPessoa("Maria", "Joaquina", alturaAleatoria(), pesoAleatorio());

console.log(p1.fala("Dizendo Oi."));
console.log(p2.fala("falando sobre JS."));
console.log(p1.imc);
console.log(p2.imc);
