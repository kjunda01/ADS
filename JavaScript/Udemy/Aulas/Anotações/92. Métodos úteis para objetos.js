/*
Object.values
Object.entries
Object.assign(destino, varios-outros-objetos)
Object.getOwnPropertyDescriptor(objeto, "propriedade")
... (spread)

// ja vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/

// const produto = { nome: "produto", preco: 1.8 };
// // forma facil de fazer uma cópia de um objeto
// // usa-se o spread operator { ...NOME-DO-OBJETO}
// const produto = { nome: "produto", preco: 1.8 };
// //const caneca = { ...produto, material: "Porcelana" };
// const caneca = Object.assign({}, produto, { material: "porcelana" });
// Object.freeze(caneca);

// caneca.nome = "Outro nome";
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// console.log(Object.keys(produto));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));
const produto = { nome: "produto", preco: 1.8, material: "porcelana" };
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
