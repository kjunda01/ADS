import java.util.Scanner;

class Sistema_de_Biblioteca_4251{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Biblioteca biblioteca = new Biblioteca();
        int operacoes = sc.nextInt();
        sc.nextLine();
        
        for(int i = 0; i < operacoes; i++) {
            String linha = sc.nextLine().trim();
            String[] frase = linha.split(" ");

            if(frase.length >= 3){
                String titulo = frase[1];
                String autor = frase[2];
                int ano = Integer.parseInt(frase[3]);
                Livro livro = new Livro(titulo, autor, ano, i);
                biblioteca.adicionarLivro(livro);

            } 
        }

        System.out.println(biblioteca.getTotalLivros());
        
        sc.close();
    }


    public static class Biblioteca {
        private static int totalLivros = 0;
                
        public static void adicionarLivro(Livro livro) {
            totalLivros += 1;
        }

        public static int getTotalLivros(){
            return totalLivros;
        }

    }

    public static class Livro {
        private String titulo;
        private String autor;
        private int anoPublicacao;
        private int id;

        
        public Livro(String titulo, String autor, int anoPublicacao, int id) {
            this.titulo = titulo;
            this.autor = autor;
            this.anoPublicacao = anoPublicacao;
            this.id = id;
        }

        public String getTitulo() {
            return titulo;
        }

        public void setTitulo(String titulo) {
            this.titulo = titulo;
        }

        public String getAutor() {
            return autor;
        }

        public void setAutor(String autor) {
            this.autor = autor;
        }

        public int getAnoPublicacao() {
            return anoPublicacao;
        }

        public void setAnoPublicacao(int anoPublicacao) {
            this.anoPublicacao = anoPublicacao;
        }
     
    }
}