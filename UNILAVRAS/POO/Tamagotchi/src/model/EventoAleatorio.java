package model;

public enum EventoAleatorio {
    // Eventos negativos
    DOENCA("Ficou doente! Energia -20, Higiene -15") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.energia = Math.max(tamagotchi.energia - 20, 0);
            tamagotchi.higiene = Math.max(tamagotchi.higiene - 15, 0);
            tamagotchi.doente = true;
        }
    },
    ACIDENTE("Se machucou brincando! Energia -15, Felicidade -10") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.energia = Math.max(tamagotchi.energia - 15, 0);
            tamagotchi.felicidade = Math.max(tamagotchi.felicidade - 10, 0);
        }
    },
    BAGUNCA("Fez uma bagunça! Higiene -20") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.higiene = Math.max(tamagotchi.higiene - 20, 0);
        }
    },

    // Eventos positivos
    PRESENTE("Ganhou um presente! Energia +10, Felicidade +15") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.energia = Math.min(tamagotchi.energia + 10, 100);
            tamagotchi.felicidade = Math.min(tamagotchi.felicidade + 15, 100);
        }
    },
    AMIGO("Fez um novo amigo! Socialização +20") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.socializacao = Math.min(tamagotchi.socializacao + 20, 100);
        }
    },
    DESCANSO("Descansou sozinho! Energia +20") {
        @Override
        public void aplicar(TamagotchiBase tamagotchi) {
            tamagotchi.energia = Math.min(tamagotchi.energia + 20, 100);
        }
    };

    private final String mensagem;

    EventoAleatorio(String mensagem) {
        this.mensagem = mensagem;
    }

    public abstract void aplicar(TamagotchiBase tamagotchi);

    public String getMensagem() {
        return mensagem;
    }
}
