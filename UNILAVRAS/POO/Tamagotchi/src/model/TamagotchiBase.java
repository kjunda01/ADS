package model;

import java.util.Random;

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
        doente = fome > 80 || higiene < 20 || energia < 20 || socializacao < 20;
        if (doente && energia == 0) {
            throw new RuntimeException("Seu Tamagotchi morreu!");
        }
    }

    @Override
    public void eventoAleatorio() {
        Random rand = new Random();
        int chance = rand.nextInt(100);

        if (chance < 10) {
            energia = Math.max(energia - 10, 0);
        } else if (chance < 20) {
            socializacao = Math.max(socializacao - 15, 0);
        } else if (chance < 30) {
            felicidade = Math.max(felicidade - 10, 0);
        }
    }

    protected void evoluir() {
        if (idade >= 30) {
            estado = EstadoVida.ADULTO;
        } else if (idade >= 15) {
            estado = EstadoVida.ADOLESCENTE;
        }
    }

    @Override
    public String getStatus() {
        return String.format(
                "Nome: %s\nIdade: %d (%s)\nEnergia: %d\nFelicidade: %d\nFome: %d\nHigiene: %d\nSocialização: %d\nEstresse: %d\nDoente: %b",
                nome, idade, estado, energia, felicidade, fome, higiene, socializacao, estresse, doente);
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
            default:
                return "/assets/images/normal.png";
        }
    }
}