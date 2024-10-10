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
        imc() {
            return (this.peso / this.altura ** 2).toFixed(2);
        },
    };
}

const p1 = criaPessoa("Giovana", "Morais", 1.8, 80);
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);

console.log(p1.fala("Dizendo Oi."));
console.log(p2.fala("falando sobre JS."));
console.log(p1.imc());
console.log(p2.imc());
