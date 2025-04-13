package model;

import java.util.concurrent.ThreadLocalRandom;

public abstract class TamagotchiBase implements ITamagotchi {
    protected String nome;
    protected int idade;
    protected int energia;
    protected int felicidade;
    protected int fome;
    protected int higiene;
    protected int socializacao;
    protected int estresse;
    protected boolean doente;
    protected EstadoVida estado;

    public TamagotchiBase(String nome) {
        this.nome = nome;
        this.idade = 0;
        this.energia = 100;
        this.felicidade = 100;
        this.fome = 0;
        this.higiene = 100;
        this.socializacao = 50;
        this.estresse = 0;
        this.doente = false;
        this.estado = EstadoVida.BEBE;
    }

    @Override
    public void alimentar() {
        fome = Math.max(fome - 30, 0);
        higiene = Math.max(higiene - 10, 0);
    }

    @Override
    public void brincar() {
        felicidade = Math.min(felicidade + 20, 100);
        energia = Math.max(energia - 15, 0);
        fome = Math.min(fome + 10, 100);
    }

    @Override
    public void dormir() {
        energia = Math.min(energia + 50, 100);
        idade++;
        evoluir();
    }

    @Override
    public void limpar() {
        higiene = 100;
    }

    @Override
    public void socializar() {
        socializacao = Math.min(socializacao + 20, 100);
        estresse = Math.max(estresse - 10, 0);
    }

    @Override
    public void verificarSaude() {
        boolean estavaDoente = doente;
        doente = fome > 80 || higiene < 20 || energia < 20 || socializacao < 20;

        if (doente && !estavaDoente) {
            System.out.println(nome + " ficou doente!");
        }

        if (doente && energia <= 0) {
            estado = EstadoVida.MORTO;
            throw new RuntimeException("Seu Tamagotchi morreu!");
        }
    }

    @Override
    public String eventoAleatorio() {
        verificarSaude(); // Verifica saúde antes do evento

        int tipoEvento = ThreadLocalRandom.current().nextInt(12);
        String mensagem = "";
        int energiaAntes = energia;
        int higieneAntes = higiene;

        switch (tipoEvento) {
            case 0: // Evento doença
                energia = Math.max(energia - 20, 0);
                higiene = Math.max(higiene - 15, 0);
                doente = true;
                mensagem = String.format("Ficou doente! Energia %d→%d, Higiene %d→%d",
                        energiaAntes, energia, higieneAntes, higiene);
                break;

            case 1: // Evento acidente
                energia = Math.max(energia - 15, 0);
                felicidade = Math.max(felicidade - 10, 0);
                mensagem = "Se machucou brincando! Energia -15, Felicidade -10";
                break;

            case 2: // Evento bagunça
                higiene = Math.max(higiene - 20, 0);
                mensagem = "Fez uma bagunça! Higiene -20";
                break;

            case 3: // Evento solidão
                socializacao = Math.max(socializacao - 15, 0);
                mensagem = "Está se sentindo solitário! Socialização -15";
                break;

            case 4: // Evento presente
                energia = Math.min(energia + 10, 100);
                felicidade = Math.min(felicidade + 15, 100);
                mensagem = "Ganhou um presente! Energia +10, Felicidade +15";
                break;

            case 5: // Evento amigo
                socializacao = Math.min(socializacao + 20, 100);
                mensagem = "Fez um novo amigo! Socialização +20";
                break;

            case 6: // Evento descanso
                energia = Math.min(energia + 20, 100);
                mensagem = "Descansou sozinho! Energia +20";
                break;

            case 7: // Evento banho
                higiene = Math.min(higiene + 25, 100);
                mensagem = "Decidiu tomar banho sozinho! Higiene +25";
                break;

            default:
                mensagem = "Nada especial aconteceu hoje";
        }

        verificarSaude(); 
        return mensagem;
    }

    protected void evoluir() {
        if (estado == EstadoVida.BEBE && idade >= 15) {
            estado = EstadoVida.ADOLESCENTE;
        } else if (estado == EstadoVida.ADOLESCENTE && idade >= 30 && felicidade > 70 && !doente) {
            estado = EstadoVida.ADULTO;
        }
    }

    @Override
    public String getStatus() {
        return String.format(
                "Nome: %s\nIdade: %d (%s)\nEnergia: %d\nFelicidade: %d\nFome: %d\nHigiene: %d\nSocialização: %d\nEstresse: %d\nDoente: %b",
                nome, idade, estado, energia, felicidade, fome, higiene, socializacao, estresse, doente);
    }

    public EstadoVida getEstado() {
        return estado;
    }

    public String getNome() {
        return nome;
    }

    public int getEnergia() {
        return energia;
    }

    public int getFelicidade() {
        return felicidade;
    }

    public int getSocializacao() {
        return socializacao;
    }

    public int getFome() {
        return fome;
    }

    public int getHigiene() {
        return higiene;
    }

    public boolean isDoente() {
        return doente;
    }

    public String getImagemEstadoVida() {
        switch (estado) {
            case BEBE:
                return "/assets/images/bebe.png";
            case ADOLESCENTE:
                return "/assets/images/adolescente.png";
            case ADULTO:
                return "/assets/images/adulto.png";
            case MORTO:
                return "/assets/images/morto.png";
            default:
                return "/assets/images/normal.png";
        }
    }
}