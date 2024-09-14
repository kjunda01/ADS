var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseFloat(lines.shift());


let salarioDaPessoa = parseFloat(num.toFixed(2));
let imposto;
let taxa;
const faixa0 = 0.00;
const faixa1 = 2000.00;
const faixa2 = 2000.01;
const faixa3 = 3000.00;
const faixa4 = 3000.01;
const faixa5 = 4500.00;
const primeiroImposto = 0.08;
const segundoImposto = 0.18;
const terceiroImposto = 0.28;


function duasCasas(valor){
    let convert = parseFloat(valor).toFixed(2);
    return convert;
}


if (salarioDaPessoa >= faixa0 && salarioDaPessoa <= faixa1) {
    console.log(`Isento`);

} else if (salarioDaPessoa >= faixa2 && salarioDaPessoa <= faixa3) {
    // Salário menos 2000 acha o excedente e multiplica pra achar o imposto
    taxa = duasCasas((salarioDaPessoa - faixa1) * primeiroImposto);
    console.log(`R$ ${taxa}`);

} else if (salarioDaPessoa >= faixa4 && salarioDaPessoa <= faixa5) {
    // Salário menos 3000 acha o valor pra calcular o imposto de 18% e soma com os 8% do primeiro imposto.
    let desconto1 = (salarioDaPessoa - faixa3) * segundoImposto;
    let desconto2 = primeiroImposto * 1000;
    taxa = duasCasas(desconto1 + desconto2);
    console.log(`R$ ${taxa}`);
}
else {
    let desconto1 = ((salarioDaPessoa - faixa5) * terceiroImposto);
    let desconto2 = ((faixa5 - faixa3) * segundoImposto);
    let desconto3 = primeiroImposto * 1000;
    taxa = duasCasas(desconto1 + desconto2 + desconto3);
    console.log(`R$ ${taxa}`);
}
