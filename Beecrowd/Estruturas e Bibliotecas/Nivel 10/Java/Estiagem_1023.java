import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
 
public class Estiagem_1023 {
 
    public static void main(String[] args) throws IOException {
        // inicia o scanner
        Scanner sc = new Scanner(System.in);

        // inicia os imoveis
        int qtdImoveis = 1;

        // Inicia a cidade
        int cidade = 0;

        // cria hashmap dos imoveis, com chave / valor
        Map<Integer,Integer> imoveis = new HashMap<>();

        // cria lista temporaria para armazenar as chaves do hashmap
        ArrayList<Integer> chavesOrdenadas = new ArrayList<>();

        // cria lista temporaria para armazenar o imovel
        ArrayList<Imovel> imovelTemp = new ArrayList<>();

        // cria a mensagem da terceira linha:
        String msgTerceiraLinha = "";
      
        // começa o programa
        while (qtdImoveis >= 1 && qtdImoveis <= 1000000){
            // pede a quantidade de imoveis da cidade
            qtdImoveis = sc.nextInt();
            
            if(qtdImoveis == 0){
                break;
            } else {
                // seta mais 1 na cidade
                cidade++;

                // limpa a lista das chaves
                chavesOrdenadas.clear();

                // limpa a quantidade de imoveis
                imoveis.clear();

                // limpa lista temporaria dos imoveis
                imovelTemp.clear();

                // zera os moradores e consumo dos imoveis
                int moradores = 0;
                int consumo = 0;

                // zera a mensagem da terceira linha:
                msgTerceiraLinha = "";

                // pede o numero de moradores e o consumo por imovel
                for(int i = 0; i < qtdImoveis; i++){
                    int moradorPorImovel = sc.nextInt();
                    int consumoPorPessoa = sc.nextInt();

                    // cria uma instancia de um imovel
                    Imovel imovel = new Imovel(moradorPorImovel, consumoPorPessoa);

                    // adiciona o imovel na lista temporaria
                    imovelTemp.add(imovel);


                    
                
                    

                    // seta a chave para o hashmap
                    int chave = imovel.consumoMedioPorPessoa();

                    if(imoveis.containsKey(chave)){
                        imoveis.put(chave, imoveis.get(chave) + moradorPorImovel);
                    } else {
                        // se a chave nao existir, cria uma nova
                        imoveis.put(chave, moradorPorImovel);
                        
                    } 

                    
                    
                }
            }
            
            // Vai para a parte de mostrar as informações
            
            // passa pelos imoveis e cria variaveis para fazer a media da 3 linha
            double moraTemp = 0.0;
            double consTemp = 0.0;
            for(Imovel imv : imovelTemp){
                moraTemp += imv.moradores;
                consTemp += imv.consumo;
                }

            msgTerceiraLinha = String.format("Consumo medio: %.2f m3.\n\n", Math.floor((consTemp / moraTemp) * 100) / 100);


            // adiciona as chaves desordenadas na lista
            for(int chaveDesordenada : imoveis.keySet()){
                chavesOrdenadas.add(chaveDesordenada);
            }
            
            // ordena a lista para conseguir mostrar em ordem na resposta
            chavesOrdenadas.sort(null);

            // cria a mensagem da primeira linha,
            String msgPrimeiraLinha = "Cidade# " + cidade + ":";

            // cria a mensagem da segunda linha, ordenando por ordem ascendente de consumo
            String msgSegundaLinha = "";
            for(int j = 0; j < chavesOrdenadas.size(); j++) {
                msgSegundaLinha += imoveis.get(chavesOrdenadas.get(j)) + "-" + chavesOrdenadas.get(j) + " ";
            }

            // mostra a mensagem final
            System.out.println(msgPrimeiraLinha);
            System.out.println(msgSegundaLinha);
            System.out.print(msgTerceiraLinha);
        
        
        }
        
        // Fecha o Scanner
        sc.close();
    }
    
    // Cria classe dos imoveis
    static class Imovel {
        // atributos
        private int moradores;
        private int consumo;

        // construtor
        public Imovel(int moradores, int consumo){
            this.moradores = moradores;
            this.consumo = consumo;

        }

        // getters e setters
        public int getMoradores() {
            return moradores;
        }

        public void setMoradores(int moradores) {
            this.moradores = moradores;
        }

        public double getConsumo() {
            return consumo;
        }

        public void setConsumo(int consumo) {
            this.consumo = consumo;
        }

        // metodos
        public int consumoMedioPorPessoa(){
            return (int) Math.floor(consumo / moradores);
        }
        
    }




}
