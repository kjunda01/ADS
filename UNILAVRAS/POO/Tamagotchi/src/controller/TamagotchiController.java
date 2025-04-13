package controller;

import model.Tamagotchi;
import model.EstadoVida;
import javafx.application.Platform;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.*;

public class TamagotchiController {
    private final Tamagotchi tamagotchi;
    private TamagotchiListener listener;
    private final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);

    public interface TamagotchiListener {
        void onStatusChanged();

        void onTamagotchiDied();

        void onEventoAleatorio(String mensagem, String statusAntes, String statusDepois);
    }

    public TamagotchiController(String nome) {
        this.tamagotchi = new Tamagotchi(nome);
        iniciarEventosAleatorios();
    }

    public void setListener(TamagotchiListener listener) {
        this.listener = listener;
    }
    
    public void acaoComTratamentoDeMorte(Runnable acao) {
        try {
            acao.run();
            atualizar();
            if (listener != null)
                listener.onStatusChanged();
        } catch (RuntimeException e) {
            if (e.getMessage().contains("morreu") && listener != null) {
                listener.onTamagotchiDied();
            }
        }
    }
    
    private void iniciarEventosAleatorios() {
        // Alterar o delay inicial para 30 segundos (igual ao intervalo mínimo)
        scheduler.scheduleAtFixedRate(() -> {
            Platform.runLater(() -> {
                try {
                    String mensagemEvento = tamagotchi.eventoAleatorio();
                    String statusAntes = getStatusResumido();
                    atualizar();
                    String statusDepois = getStatusResumido();

                    LocalDateTime agora = LocalDateTime.now();
                    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
                    String logEntry = String.format(
                            "[%s] %s\nEstado antes: %s\nEstado depois: %s\n---",
                            agora.format(formatter),
                            mensagemEvento,
                            statusAntes,
                            statusDepois);

                    adicionarAoLog(logEntry);
                } catch (Exception e) {
                    if (e.getMessage().contains("morreu")) {
                        adicionarAoLog("Seu Tamagotchi morreu! :(");
                    }
                }
            });
        }, 30, 30 + ThreadLocalRandom.current().nextInt(30), TimeUnit.SECONDS); // Delay inicial de 30 segundos
    }

    public void acaoComTratamentoDeMorte(Runnable acao, Runnable atualizacaoUI) {
        try {
            acao.run();
            atualizar();
            Platform.runLater(atualizacaoUI::run);
        } catch (RuntimeException e) {
            if (e.getMessage().contains("morreu")) {
                Platform.runLater(() -> {
                    mostrarMorte();
                    desativarBotoes();
                });
            }
        }
    }

    private String getStatusResumido() {
        return String.format("E:%d F:%d H:%d S:%d",
                tamagotchi.getEnergia(),
                tamagotchi.getFome(),
                tamagotchi.getHigiene(),
                tamagotchi.getSocializacao());
    }

    public void alimentar() {
        tamagotchi.alimentar();
    }

    public void brincar() {
        tamagotchi.brincar();
    }

    public void dormir() {
        tamagotchi.dormir();
    }

    public void limpar() {
        tamagotchi.limpar();
    }

    public void socializar() {
        tamagotchi.socializar();
    }

    private void atualizar() {
        tamagotchi.verificarSaude();
    }

    public void adicionarAoLog(String mensagem) {
        // Implementado na View
    }

    public void mostrarMorte() {
        // Implementado na View
    }

    public void desativarBotoes() {
        // Implementado na View
    }

    public boolean isMorto() {
        return tamagotchi.getEstado() == EstadoVida.MORTO;
    }

    public String getNome() {
        return tamagotchi.getNome();
    }

    public int getEnergia() {
        return tamagotchi.getEnergia();
    }

    public int getFelicidade() {
        return tamagotchi.getFelicidade();
    }

    public int getFome() {
        return tamagotchi.getFome();
    }

    public int getHigiene() {
        return tamagotchi.getHigiene();
    }

    public int getSocializacao() {
        return tamagotchi.getSocializacao();
    }

    public boolean isDoente() {
        return tamagotchi.isDoente();
    }

    public String getImagemEstadoVida() {
        return tamagotchi.getImagemEstadoVida();
    }

    public void finalizar() {
        scheduler.shutdownNow();
    }
}