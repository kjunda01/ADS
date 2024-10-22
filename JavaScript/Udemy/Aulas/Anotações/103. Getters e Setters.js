// // Criando um Symbol chamado "_velocidade". O Symbol é usado para criar uma propriedade privada.
// // Isso impede que a propriedade "_velocidade" seja acessada ou alterada diretamente fora da classe.
// const _velocidade = Symbol("velocidade");

// // Definindo a classe Carro
// class Carro {
//     // O construtor é chamado ao criar uma nova instância da classe Carro
//     constructor(nome) {
//         this.nome = nome; // Inicializa o nome do carro com o valor fornecido
//         // Inicializa a propriedade privada _velocidade usando o Symbol como chave. Começa com valor 0.
//         this[_velocidade] = 0;
//     }

//     // Getter para acessar o valor atual da velocidade
//     // Isso permite que outras partes do código leiam a velocidade, sem expor diretamente a propriedade privada
//     get velocidade() {
//         console.log("GETTER");
//         return this[_velocidade]; // Retorna o valor atual de _velocidade
//     }

//     // Setter para modificar a velocidade
//     // Permite controlar como a velocidade pode ser alterada e validar o valor recebido
//     set velocidade(valor) {
//         console.log(`SETTER -> ${this[_velocidade]}`);
//         // Verifica se o valor passado é do tipo "number"
//         if (typeof valor !== "number") return; // Se não for número, não faz nada
//         // Se o valor estiver fora do intervalo permitido (entre 10 e 100), não altera a velocidade
//         if (valor >= 100 || valor <= 10) return;
//         // Se o valor for válido, atribui à propriedade privada _velocidade
//         this[_velocidade] = valor;
//     }

//     // Método para acelerar o carro
//     acelerar() {
//         // Se a velocidade já for 100 ou mais, não faz nada
//         if (this[_velocidade] >= 100) return;
//         // Incrementa a velocidade em 1
//         this[_velocidade]++;
//     }

//     // Método para frear o carro
//     freiar() {
//         // Se a velocidade já for 0 ou menos, não faz nada
//         if (this[_velocidade] <= 0) return;
//         // Decrementa a velocidade em 1
//         this[_velocidade]--;
//     }
// }

// // Cria uma nova instância da classe Carro com o nome "Etios"
// const carro1 = new Carro("Etios");

// // Este loop tenta acelerar o carro 200 vezes
// for (let i = 0; i <= 200; i++) {
//     carro1.acelerar(); // Acelera o carro
// }

// // Tenta alterar a velocidade diretamente para 2000
// // Porém, o setter tem verificações que impedem que a velocidade seja configurada fora do intervalo permitido.
// carro1.velocidade = 2000; // Como 2000 está fora do intervalo (10 a 100), essa linha não terá efeito

// // Exibe o objeto 'carro1' no console. O campo _velocidade não aparece diretamente devido ao uso do Symbol
// console.log(carro1);
// console.log(carro1.velocidade);
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(" ");
        this.nome = valor.shift();
        this.sobrenome = valor.join(" ");
    }
}

const p1 = new Pessoa("João", "da Silva");

console.log(p1.nomeCompleto);
p1.nomeCompleto = "Teste Oliveira";
console.log(p1.nomeCompleto);
