// class Animals {
//     constructor(name, specie) {
//         this.name = name;
//         this.specie = specie;
//     }

//     sing() {
//         return `${this.name} can sing`;
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// }

// const animal = new Animals("Obama", "Cachorro")
// console.log(animal)

/*##########################################################################################*/

// class Animals {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sing() {
//         return `${this.name} can sing!`;
//     }

//     dance() {
//         return `${this.name} can dance!`;
//     }
// }

// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }

// const clara = new Cats("Clara", 33, "indigo");
// console.log(clara.sing());
// console.log(clara.whiskers());

/*##########################################################################################*/

// class Personagem {
//     constructor(nome) {
//         this.nome = nome;
//     }
//     get getName() {
//         return this.nome;
//     }

//     set setName(name) {
//         return (this.name = name);
//     }

//     atacar() {}

//     defender() {}

//     correr() {
//         return console.log(`${this.nome} está correndo`);
//     }
// }

// const player1 = new Personagem("Ryu");
// player1.correr();
// console.log(player1.getName);
// player1.setName = "Jonas";
// console.log(player1.getName);

/*##########################################################################################*/

