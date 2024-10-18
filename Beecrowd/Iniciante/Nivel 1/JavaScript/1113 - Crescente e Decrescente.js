var input = require("fs").readFileSync("./dev/stdin", "utf8").trim();
var linha = input.split(/\r?\n/);

function criaMatriz(linha) {
    for (let i in linha) {
        let temp = [];

        //console.log(`Linha -> ${i}`);
        for (let j in linha[i]) {
            //console.log(`Coluna: ${j}`);
            const e = parseInt(linha[i][j].split(" "));
            if (e) {
                temp.push(e);
            }
        }
        return temp;
    }
}
