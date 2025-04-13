package view;

import controller.TamagotchiController;
import javafx.application.Application;
import javafx.application.Platform;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import model.EstadoVida;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class MainFX extends Application {
    private TextArea logArea;
    private TamagotchiController controller;
    private ImageView tamagotchiImageView;
    private ImageView estadoVidaImageView;
    private ProgressBar pbEnergia, pbFelicidade, pbFome, pbHigiene, pbSocializacao;
    private Button btnAlimentar, btnBrincar, btnDormir, btnLimpar, btnSocializar;

    @Override
    public void start(Stage primaryStage) {
        TextInputDialog dialog = new TextInputDialog("Bixinho");
        dialog.setTitle("Novo Tamagotchi");
        dialog.setHeaderText("Crie seu Tamagotchi");
        dialog.setContentText("Nome:");
        String nome = dialog.showAndWait().orElse("Bixinho");

        controller = new TamagotchiController(nome) {
            @Override
            public void adicionarAoLog(String mensagem) {
                Platform.runLater(() -> {
                    logArea.appendText("\n" + mensagem + "\n");
                    logArea.setScrollTop(Double.MAX_VALUE);
                });
            }

            @Override
            public void mostrarMorte() {
                try {
                    Image imagem = new Image(getClass().getResourceAsStream("/assets/images/morto.png"));
                    tamagotchiImageView.setImage(imagem);

                    Alert alert = new Alert(Alert.AlertType.ERROR);
                    alert.setTitle("Tamagotchi Morreu!");
                    alert.setHeaderText("Seu Tamagotchi morreu!");
                    alert.setContentText("Infelizmente seu companheiro virtual faleceu.\n" +
                            "Energia: " + controller.getEnergia() + "\n" +
                            "Fome: " + controller.getFome() + "\n" +
                            "Higiene: " + controller.getHigiene());
                    alert.showAndWait();
                } catch (Exception e) {
                    System.err.println("Erro ao exibir morte: " + e.getMessage());
                }
            }

            @Override
            public void desativarBotoes() {
                Platform.runLater(() -> {
                    btnAlimentar.setDisable(true);
                    btnBrincar.setDisable(true);
                    btnDormir.setDisable(true);
                    btnLimpar.setDisable(true);
                    btnSocializar.setDisable(true);
                });
            }
        };

        Label lblNome = new Label(controller.getNome());
        lblNome.setStyle("-fx-font-size: 20px; -fx-font-weight: bold; -fx-text-fill: #333;");
        lblNome.setAlignment(Pos.CENTER);

        estadoVidaImageView = new ImageView();
        estadoVidaImageView.setFitWidth(50);
        estadoVidaImageView.setFitHeight(50);
        atualizarImagemEstadoVida();

        tamagotchiImageView = new ImageView();
        tamagotchiImageView.setFitWidth(150);
        tamagotchiImageView.setFitHeight(150);
        atualizarImagemTamagotchi();

        HBox header = new HBox(10, lblNome, estadoVidaImageView);
        header.setAlignment(Pos.CENTER);

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
        progressBars.setAlignment(Pos.CENTER);

        btnAlimentar = criarBotaoComImagem("/assets/images/alimentar.png");
        btnBrincar = criarBotaoComImagem("/assets/images/brincar.png");
        btnDormir = criarBotaoComImagem("/assets/images/dormir.png");
        btnLimpar = criarBotaoComImagem("/assets/images/limpar.png");
        btnSocializar = criarBotaoComImagem("/assets/images/socializar.png");

        btnAlimentar.setOnAction(e -> controller.acaoComTratamentoDeMorte(
                controller::alimentar,
                this::atualizarTela));

        btnBrincar.setOnAction(e -> controller.acaoComTratamentoDeMorte(
                controller::brincar,
                this::atualizarTela));

        btnDormir.setOnAction(e -> controller.acaoComTratamentoDeMorte(
                controller::dormir,
                this::atualizarTela));

        btnLimpar.setOnAction(e -> controller.acaoComTratamentoDeMorte(
                controller::limpar,
                this::atualizarTela));

        btnSocializar.setOnAction(e -> controller.acaoComTratamentoDeMorte(
                controller::socializar,
                this::atualizarTela));

        HBox botoes = new HBox(10, btnAlimentar, btnBrincar, btnDormir, btnLimpar, btnSocializar);
        botoes.setAlignment(Pos.CENTER);

        logArea = new TextArea();
        logArea.setEditable(false);
        logArea.setPrefHeight(200);
        logArea.setText("Log de ações:\n");

        VBox layoutPrincipal = new VBox(20, header, tamagotchiImageView, progressBars, botoes, logArea);
        layoutPrincipal.setAlignment(Pos.CENTER);
        layoutPrincipal.setPadding(new Insets(20));

        Scene scene = new Scene(layoutPrincipal, 600, 700);
        primaryStage.setTitle("TamagotchiFX");
        primaryStage.setScene(scene);
        primaryStage.show();

        scene.getStylesheets().add(getClass().getResource("/view/styles.css").toExternalForm());

        primaryStage.setOnCloseRequest(e -> {
            controller.finalizar();
            Platform.exit();
        });
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
        button.getStyleClass().add("button");
        return button;
    }

    public void atualizarTela() {
        atualizarImagemTamagotchi();
        atualizarImagemEstadoVida();
        atualizarBarrasDeProgresso();
    }

    private void atualizarImagemTamagotchi() {
        if (controller.isMorto()) {
            controller.mostrarMorte();
            return;
        }

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
            Image imagem = new Image(getClass().getResourceAsStream(caminhoImagem));
            estadoVidaImageView.setImage(imagem);
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

    public static void main(String[] args) {
        launch(args);
    }
}