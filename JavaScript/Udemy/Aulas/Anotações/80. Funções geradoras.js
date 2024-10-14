// funcoes geradoras

// EXEMPLO 1
// function* geradora1() {
//     // código qualquer...
//     yield "Valor 1";

//     // código qualquer...
//     yield "Valor 2";

//     // código qualquer...
//     yield "Valor 3";
// }

// const g1 = geradora1();

// for (let valor of g1) {
//     console.log(valor)
// }

// EXEMPLO 2
// function* geradora2() {
//     let i = 0;
//     while (true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value);

// EXEMPLO 3
// function* geradora3() {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// EXEMPLO 4
// function* geradora4() {
//     yield* geradora3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = geradora4();

// for (let valor of g4) {
//     console.log(valor)
// }

// EXEMPLO 5
function* geradora5() {
    yield function () {
        console.log("Vim do yield 1");
    };

    // por ter um return a função geradora para aqui.
    return function() {
        console.log('Vim do return')
    }
    // ....

    yield function () {
        console.log("Vim do yield 2");
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
