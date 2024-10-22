// Definindo um array de objetos, onde cada objeto representa uma pessoa
// com um identificador único 'id' e um nome.
const pessoas = [
    { id: 2, nome: "João" }, // Objeto com id 2 e nome "João"
    { id: 3, nome: "Maria" }, // Objeto com id 3 e nome "Maria"
    { id: 1, nome: "Helena" }, // Objeto com id 1 e nome "Helena"
];

// Aqui temos um bloco de código comentado que faz algo semelhante ao que será implementado abaixo,
// mas usando um objeto JavaScript ao invés de um Map.
// Esse código percorre o array 'pessoas' e cria um novo objeto 'novasPessoas'
// onde o 'id' é usado como chave, e o restante do objeto pessoa é o valor associado a essa chave.
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;   // Desestruturando o id da pessoa
//     novasPessoas[id] = { ...pessoa }; // Usando o id como chave no novo objeto e copiando a pessoa
// }

// Agora, o mesmo conceito será implementado usando um objeto Map.
// Um Map é uma estrutura de dados que também armazena pares chave-valor, mas
// com algumas vantagens sobre objetos, como a capacidade de usar qualquer tipo de dado como chave.
const novasPessoas = new Map(); // Criando um novo Map vazio

// Usamos um loop 'for...of' para percorrer cada objeto do array 'pessoas'.
for (const pessoa of pessoas) {
    const { id } = pessoa; // Desestruturando o id da pessoa do objeto
    // Usamos o método 'set' do Map para adicionar o par chave-valor.
    // A chave é o 'id' da pessoa, e o valor é uma cópia do objeto 'pessoa' (usando o spread operator {...pessoa})
    novasPessoas.set(id, { ...pessoa });
}

// O método 'set' do Map adiciona a chave-valor ao Map, ou substitui se a chave já existir.
// O spread operator {...pessoa} cria uma cópia do objeto 'pessoa', garantindo que não
// alteramos o objeto original ao modificar o Map.

// Exibindo o conteúdo do Map 'novasPessoas' no console.
// O Map armazenará os dados como pares chave-valor, onde a chave é o 'id' da pessoa,
// e o valor é o próprio objeto pessoa.
console.log(novasPessoas);
