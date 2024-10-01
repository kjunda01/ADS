// ... rest
// ... spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete, ...resto] = numeros;
console.log(um, tres, cinco);
console.log();
console.log(resto);
