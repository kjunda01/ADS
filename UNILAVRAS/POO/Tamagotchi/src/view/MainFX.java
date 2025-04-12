package view;

import controller.TamagotchiController;
import javafx.animation.TranslateTransition;
import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javafx.util.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class MainFX extends Application {
    private TextArea statusArea;
    private TextArea logArea;
    private TamagotchiController controller;
    private ImageView tamagotchiImageView;
    private ProgressBar pbEnergia, pbFelicidade, pbFome, pbHigiene;

    @Override
    public void start(Stage primaryStage) {
        // Diálogo para escolher o nome do Tamagotchi
        TextInputDialog dialog = new TextInputDialog("Bixinho");
        dialog.setTitle("Novo Tamagotchi");
        dialog.setHeaderText("Crie seu Tamagotchi");
        dialog.setContentText("Nome:");
        String nome = dialog.showAndWait().orElse("Bixinho");

        controller = new TamagotchiController(nome);

        // Inicializando os componentes da interface gráfica
        statusArea = new TextArea();
        statusArea.setEditable(false);
        statusArea.setPrefHeight(200);
        statusArea.setText("Status do Tamagotchi");

        logArea = new TextArea();
        logArea.setEditable(false);
        logArea.setPrefHeight(200);
        logArea.setText("Log de ações");

        // ImageView para exibir o Tamagotchi
        tamagotchiImageView = new ImageView();
        tamagotchiImageView.setFitWidth(150);
        tamagotchiImageView.setFitHeight(150);
        atualizarImagemTamagotchi();

        // Barras de progresso
        pbEnergia = criarProgressBar();
        pbFelicidade = criarProgressBar();
        pbFome = criarProgressBar();
        pbHigiene = criarProgressBar();

        Label lblEnergia = new Label("Energia");
        Label lblFelicidade = new Label("Felicidade");
        Label lblFome = new Label("Fome");
        Label lblHigiene = new Label("Higiene");

        VBox progressBars = new VBox(5, lblEnergia, pbEnergia, lblFelicidade, pbFelicidade, lblFome, pbFome, lblHigiene,
                pbHigiene);

        // Botões com imagens PNG
        Button btnAlimentar = criarBotaoComImagem("/assets/images/alimentar.png");
        Button btnBrincar = criarBotaoComImagem("/assets/images/brincar.png");
        Button btnDormir = criarBotaoComImagem("/assets/images/dormir.png");
        Button btnLimpar = criarBotaoComImagem("/assets/images/limpar.png");
        Button btnSocializar = criarBotaoComImagem("/assets/images/socializar.png");

        // Ações dos botões
        btnAlimentar.setOnAction(e -> {
            controller.alimentar();
            atualizarTela("Alimentou");
        });

        btnBrincar.setOnAction(e -> {
            controller.brincar();
            atualizarTela("Brincou");
        });

        btnDormir.setOnAction(e -> {
            controller.dormir();
            atualizarTela("Dormiu");
        });

        btnLimpar.setOnAction(e -> {
            controller.limpar();
            atualizarTela("Limpou");
        });

        btnSocializar.setOnAction(e -> {
            controller.socializar();
            atualizarTela("Socializou");
        });

        // Layout
        HBox botoes = new HBox(10, btnAlimentar, btnBrincar, btnDormir, btnLimpar, btnSocializar);
        VBox layout = new VBox(10, tamagotchiImageView, progressBars, botoes, statusArea, logArea);
        layout.setPadding(new Insets(20));

        // Cena
        Scene scene = new Scene(layout, 600, 700);
        primaryStage.setTitle("TamagotchiFX");
        primaryStage.setScene(scene);
        primaryStage.show();

        // Aplica o estilo do arquivo CSS
        scene.getStylesheets().add(getClass().getResource("/view/styles.css").toExternalForm());
    }

    private ProgressBar criarProgressBar() {
        ProgressBar progressBar = new ProgressBar();
        progressBar.setPrefWidth(200);
        return progressBar;
    }

    private Button criarBotaoComImagem(String caminhoRelativo) {
        Image imagem = new Image(getClass().getResourceAsStream(caminhoRelativo));
        ImageView imageView = new ImageView(imagem);
        imageView.setFitHeight(50);
        imageView.setFitWidth(50);

        Button button = new Button();
        button.setGraphic(imageView);
        return button;
    }

    private void atualizarTela(String acao) {
        String status = controller.getStatus(acao);
        statusArea.setText(status);

        LocalDateTime agora = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String timestamp = agora.format(formatter);

        String logMessage = "[" + timestamp + "] - O " + controller.getNome() + " " + acao.toLowerCase() + "\n";
        logArea.insertText(0, logMessage);

        // Atualiza a imagem do Tamagotchi
        atualizarImagemTamagotchi();

        // Atualiza as barras de progresso
        atualizarBarrasDeProgresso();

        // Adiciona animação ao Tamagotchi
        adicionarAnimacao();
    }

    private void atualizarImagemTamagotchi() {
        try {
            String caminhoImagem;
            if (controller.isDoente()) {
                caminhoImagem = "/assets/images/doente.png";
            } else if (controller.getEnergia() < 30) {
                caminhoImagem = "/assets/images/cansado.png";
            } else if (controller.getFelicidade() > 80) {
                caminhoImagem = "/assets/images/feliz.png";
            } else {
                caminhoImagem = "/assets/images/normal.png";
            }

            Image imagem = new Image(getClass().getResourceAsStream(caminhoImagem));
            tamagotchiImageView.setImage(imagem);
        } catch (Exception e) {
            System.err.println("Erro ao carregar imagem do Tamagotchi: " + e.getMessage());
        }
    }

    private void atualizarBarrasDeProgresso() {
        pbEnergia.setProgress(controller.getEnergia() / 100.0);
        pbFelicidade.setProgress(controller.getFelicidade() / 100.0);
        pbFome.setProgress(controller.getFome() / 100.0);
        pbHigiene.setProgress(controller.getHigiene() / 100.0);
    }

    private void adicionarAnimacao() {
        TranslateTransition transition = new TranslateTransition(Duration.seconds(1), tamagotchiImageView);
        transition.setFromX(0);
        transition.setToX(10);
        transition.setAutoReverse(true);
        transition.setCycleCount(2);
        transition.play();
    }

    public static void main(String[] args) {
        launch(args);
    }
}