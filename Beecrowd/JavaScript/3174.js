/*
beecrowd | 3174
Grupo de Trabalho do Noel
Por Jessica Dagostini, beecrowd BR Brazil

Timelimit: 1
Todo ano, Papai Noel faz o recrutamento de elfos e gnomos para a sua equipe de preparação natalina. O setor de sua produção que mais tem alterações ao longo do ano é o da fabricação dos presentes, pois ele contrata elfos temporários, que trabalham uma determinada quantidade de horas H com ele. Além disso, cada elfo é contratado para um dos 4 diferentes grupos de trabalho, onde cada um dos grupos possui uma quantidade de horas para produzir os presentes do tipo do grupo:

Grupo dos bonecos: 8 horas;
Grupo dos arquitetos: 4 horas;
Grupo dos musicos: 6 horas;
Grupo dos desenhistas: 12 horas.
Note que os trabalhadores do grupo dos bonecos só produzem bonecos, o dos arquitetos, casas, e assim sucessivamente. Mas cada tipo de presente conta como um presente completo no final do dia.

O Papai Noel possui uma lista dos nomes dos elfos escolhidos esse ano, com a quantidade de horas e em que grupo que eles podem trabalhar. Sabendo da sua habilidade com programação, o Noel quer uma forcinha sua para dizer para ele quantos presentes ele vai conseguir ter pronto, por dia, de acordo com a quantidade de elfos que ele contratou.

Entrada
O primeiro valor da entrada é um valor inteiro N (1 ≤ N ≤ 1000), indicando a quantidade de elfos que o Papai Noel contratou. As N linhas seguintes possuem três valores E, G e H (1 ≤ H ≤ 24), indicando respectivamente o nome do elfo, em qual grupo ele vai trabalhar (em letras minúsculas) e quantas horas por dia ele irá ajudar (em valor inteiro).

Saída
A saída deverá ser um inteiro P, a quantidade total de presentes produzida por dia pela fábrica do Papai Noel.

Exemplo de Entrada	Exemplo de Saída
7
Aradhel bonecos 10
Aerin arquitetos 15
Anna musicos 10
Elbereth musicos 10
Freda desenhistas 15
Arwen bonecos 10
Logolas bonecos 10

10

Contest de Natal 2020
*/

var entrada = require("fs").readFileSync("stdin", "utf8");
var linhas = entrada.split("\n");

let duendes = parseInt(linhas[0]);

let bonecos = 0;
let arquitetos = 0;
let musicos = 0;
let desenhistas = 0;

for (let i = 1; i <= duendes; i++) {
    let partes = linhas[i].split(" ");
    let tipo = partes[1];
    let horas = parseInt(partes[2]);

    if (tipo === "bonecos") {
        bonecos += horas;
    } else if (tipo === "arquitetos") {
        arquitetos += horas;
    } else if (tipo === "musicos") {
        musicos += horas;
    } else if (tipo === "desenhistas") {
        desenhistas += horas;
    }
}

let resultBonecos = Math.floor(bonecos / 8);
let resultArquitetos = Math.floor(arquitetos / 4);
let resultMusicos = Math.floor(musicos / 6);
let resultDesenhistas = Math.floor(desenhistas / 12);

console.log(resultBonecos + resultArquitetos + resultMusicos + resultDesenhistas);
