package view;

import controller.TamagotchiController;
import javafx.animation.TranslateTransition;
import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
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
    private TextArea logArea;
    private TamagotchiController controller;
    private ImageView tamagotchiImageView;
    private ImageView estadoVidaImageView; // Declaração como atributo
    private ProgressBar pbEnergia, pbFelicidade, pbFome, pbHigiene, pbSocializacao;

    @Override
    public void start(Stage primaryStage) {
        // Diálogo para escolher o nome do Tamagotchi
        TextInputDialog dialog = new TextInputDialog("Bixinho");
        dialog.setTitle("Novo Tamagotchi");
        dialog.setHeaderText("Crie seu Tamagotchi");
        dialog.setContentText("Nome:");
        String nome = dialog.showAndWait().orElse("Bixinho");

        controller = new TamagotchiController(nome);

        // Label para exibir o nome do Tamagotchi
        Label lblNome = new Label(controller.getNome());
        lblNome.setStyle("-fx-font-size: 20px; -fx-font-weight: bold; -fx-text-fill: #333;");
        lblNome.setAlignment(Pos.CENTER);

        // ImageView para exibir o estado de vida (bebê, adolescente, adulto)
        estadoVidaImageView = new ImageView();
        estadoVidaImageView.setFitWidth(50);
        estadoVidaImageView.setFitHeight(50);
        atualizarImagemEstadoVida();

        // ImageView para exibir o Tamagotchi
        tamagotchiImageView = new ImageView();
        tamagotchiImageView.setFitWidth(150);
        tamagotchiImageView.setFitHeight(150);
        atualizarImagemTamagotchi();

        // Combina o nome e as imagens em um HBox
        HBox header = new HBox(10, lblNome, estadoVidaImageView);
        header.setAlignment(Pos.CENTER);

        // Barras de progresso
        pbEnergia = criarProgressBar();
        pbFelicidade = criarProgressBar();
        pbFome = criarProgressBar();
        pbHigiene = criarProgressBar();
        pbSocializacao = criarProgressBar();

        Label lblEnergia = new Label("Energia");
        Label lblFelicidade = new Label("Felicidade");
        Label lblFome = new Label("Fome");
        Label lblHigiene = new Label("Higiene");
        Label lblSocializacao = new Label("Socialização");

        VBox progressBars = new VBox(5,
                lblEnergia, pbEnergia,
                lblFelicidade, pbFelicidade,
                lblFome, pbFome,
                lblHigiene, pbHigiene,
                lblSocializacao, pbSocializacao);
        progressBars.setAlignment(Pos.CENTER); // Centraliza as barras de progresso

        // Botões com imagens PNG
        Button btnAlimentar = criarBotaoComImagem("/assets/images/alimentar.png");
        Button btnBrincar = criarBotaoComImagem("/assets/images/brincar.png");
        Button btnDormir = criarBotaoComImagem("/assets/images/dormir.png");
        Button btnLimpar = criarBotaoComImagem("/assets/images/limpar.png");
        Button btnSocializar = criarBotaoComImagem("/assets/images/socializar.png");

        // Ações dos botões
        btnAlimentar.setOnAction(e -> {
            try {
                controller.alimentar();
                atualizarTela("Alimentou");
            } catch (Exception ex) {
                mostrarMorte();
            }
        });

        btnBrincar.setOnAction(e -> {
            try {
                controller.brincar();
                atualizarTela("Brincou");
            } catch (Exception ex) {
                mostrarMorte();
            }
        });

        btnDormir.setOnAction(e -> {
            try {
                controller.dormir();
                atualizarTela("Dormiu");
            } catch (Exception ex) {
                mostrarMorte();
            }
        });

        btnLimpar.setOnAction(e -> {
            try {
                controller.limpar();
                atualizarTela("Limpou");
            } catch (Exception ex) {
                mostrarMorte();
            }
        });

        btnSocializar.setOnAction(e -> {
            try {
                controller.socializar();
                atualizarTela("Socializou");
            } catch (Exception ex) {
                mostrarMorte();
            }
        });

        // Layout dos botões
        HBox botoes = new HBox(10, btnAlimentar, btnBrincar, btnDormir, btnLimpar, btnSocializar);
        botoes.setAlignment(Pos.CENTER); // Centraliza os botões

        // LogArea
        logArea = new TextArea();
        logArea.setEditable(false);
        logArea.setPrefHeight(450);
        logArea.getStyleClass().add("log-area");
        logArea.setText("Log de ações");

        // Verificação de inicialização dos componentes
        System.out.println("Header: " + (header == null ? "null" : "ok"));
        System.out.println("TamagotchiImageView: " + (tamagotchiImageView == null ? "null" : "ok"));
        System.out.println("ProgressBars: " + (progressBars == null ? "null" : "ok"));
        System.out.println("Botoes: " + (botoes == null ? "null" : "ok"));
        System.out.println("LogArea: " + (logArea == null ? "null" : "ok"));

        // Layout principal
        VBox layoutPrincipal = new VBox(20, header, tamagotchiImageView, progressBars, botoes, logArea);
        layoutPrincipal.setAlignment(Pos.CENTER); // Centraliza todos os elementos
        layoutPrincipal.setPadding(new Insets(20));

        // Cena
        Scene scene = new Scene(layoutPrincipal, 600, 700);
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
        button.getStyleClass().add("button"); // Aplica estilo CSS
        return button;
    }

    private void atualizarTela(String acao) {
        LocalDateTime agora = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String timestamp = agora.format(formatter);

        String logMessage = "[" + timestamp + "] - O " + controller.getNome() + " " + acao.toLowerCase() + "\n";
        logArea.insertText(0, logMessage);

        // Atualiza a imagem do Tamagotchi
        atualizarImagemTamagotchi();

        // Atualiza a imagem do estado de vida
        atualizarImagemEstadoVida();

        // Atualiza as barras de progresso
        atualizarBarrasDeProgresso();
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

    private void atualizarImagemEstadoVida() {
        try {
            String caminhoImagem = controller.getImagemEstadoVida();
            System.out.println("Carregando imagem do estado de vida: " + caminhoImagem);

            Image imagem = new Image(getClass().getResourceAsStream(caminhoImagem));
            if (imagem.isError()) {
                System.err.println("Erro ao carregar imagem: " + caminhoImagem);
            } else {
                estadoVidaImageView.setImage(imagem);
            }
        } catch (Exception e) {
            System.err.println("Erro ao carregar imagem do estado de vida: " + e.getMessage());
        }
    }

    private void atualizarBarrasDeProgresso() {
        atualizarBarra(pbEnergia, controller.getEnergia(), false);
        atualizarBarra(pbFelicidade, controller.getFelicidade(), false);
        atualizarBarra(pbFome, controller.getFome(), true);
        atualizarBarra(pbHigiene, controller.getHigiene(), false);
        atualizarBarra(pbSocializacao, controller.getSocializacao(), false);
    }

    private void atualizarBarra(ProgressBar barra, int valor, boolean isFome) {
        barra.setProgress(valor / 100.0);
        if (isFome) {
            if (valor <= 30) {
                barra.setStyle("-fx-accent: green;");
            } else if (valor <= 70) {
                barra.setStyle("-fx-accent: yellow;");
            } else {
                barra.setStyle("-fx-accent: red;");
            }
        } else {
            if (valor <= 30) {
                barra.setStyle("-fx-accent: red;");
            } else if (valor <= 70) {
                barra.setStyle("-fx-accent: yellow;");
            } else {
                barra.setStyle("-fx-accent: green;");
            }
        }
    }

    private void mostrarMorte() {
        try {
            Image imagem = new Image(getClass().getResourceAsStream("/assets/images/morto.png"));
            tamagotchiImageView.setImage(imagem);
            Alert alert = new Alert(Alert.AlertType.ERROR);
            alert.setTitle("Tamagotchi Morreu!");
            alert.setHeaderText("Seu Tamagotchi morreu!");
            alert.setContentText("Tente cuidar melhor da próxima vez.");
            alert.showAndWait();
        } catch (Exception e) {
            System.err.println("Erro ao carregar imagem de morte: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}