// API DOS PAÍSES = 'https://restcountries.com/v3.1/all')
// API TESTE  = 'https://jsonplaceholder.typicode.com/todos/1'
//// fetch("assets/json/pessoas.json")
////     .then((response) => response.json())
////   .then((json) => carregaElementosNaPagina(json));

axios("assets/json/pessoas.json")
.then((response) =>
    carregaElementosNaPagina(response.data)
);

function carregaElementosNaPagina(json) {
    const table = document.createElement("table");

    for (let pessoa of json) {
        const criaLinha = (campo) => {
            let td = document.createElement("td");
            td.innerHTML = campo;
            tr.appendChild(td);
        };

        const tr = document.createElement("tr");

        criaLinha(pessoa.nome);
        criaLinha(pessoa.email);
        criaLinha(pessoa.salario);
        criaLinha(pessoa.estado);
        criaLinha(pessoa.empresa);
        criaLinha(pessoa.idade);
        criaLinha(pessoa.sexo);
        criaLinha(pessoa.cpf);

        table.appendChild(tr);
    }

    const resultado = document.querySelector(".resultado");
    resultado.appendChild(table);
}
