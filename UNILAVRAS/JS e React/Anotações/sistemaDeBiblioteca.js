// Definição da classe Livro
class Livro {
    constructor(titulo, autor, anoPublicacao, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel; // Inicialmente, o livro está disponível
    }
}

// Definição da classe Usuario
class Usuario {
    constructor(nome, email, livrosEmprestados = []) {
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = livrosEmprestados; // Lista vazia para armazenar livros emprestados
    }

    emprestarLivro(livro) {
        if (livro.disponivel) {
            this.livrosEmprestados.push(livro); // Adiciona o livro à lista de empréstimos do usuário
            livro.disponivel = false; // Atualiza a disponibilidade do livro para false
        } else {
            console.log("Livro não disponível para empréstimo.");
        }
    }

    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            this.livrosEmprestados.splice(index, 1); // Remove o livro da lista de empréstimos do usuário
            livro.disponivel = true; // Atualiza a disponibilidade do livro para true
        } else {
            console.log("Este livro não foi emprestado por este usuário.");
        }
    }
}

// Definição da classe Biblioteca, que herda de Livro
class Biblioteca extends Livro {
    constructor(catalogo = []) {
        super(); // Chama o construtor da classe pai (Livro)
        this.catalogo = catalogo; // Lista vazia para armazenar o catálogo de livros
    }

    // Método para adicionar um livro ao catálogo
    adicionarLivro(livro) {
        this.catalogo.push(livro);
    }

    // Método para buscar um livro pelo título no catálogo
    buscarLivro(titulo) {
        const livroEncontrado = this.catalogo.find(
            (livro) => livro.titulo === titulo
        );
        if (livroEncontrado) {
            return livroEncontrado;
        } else {
            return "Livro não encontrado no catálogo.";
        }
    }
}

// Criando objetos
const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new Livro(
    "O Pequeno Príncipe",
    "Antoine de Saint-Exupéry",
    1943
);

const usuario1 = new Usuario("João", "joao@example.com");
const usuario2 = new Usuario("Maria", "maria@example.com");

const biblioteca = new Biblioteca();

// Adicionando livros ao catálogo
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

// Emprestando e devolvendo livros
usuario1.emprestarLivro(livro1);
usuario2.emprestarLivro(livro2);

usuario1.devolverLivro(livro1);

// Buscando um livro no catálogo
const livroBuscado = biblioteca.buscarLivro("Dom Casmurro");
console.log(livroBuscado);
