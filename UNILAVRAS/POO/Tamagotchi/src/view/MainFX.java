package view;

import controller.TamagotchiController;
import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class MainFX extends Application {
    private TextArea statusArea;
    private TextArea logArea;
    private TamagotchiController controller;

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

        // Botões com imagens PNG
        Button btnAlimentar = criarBotaoComImagem("/assets/images/alimentar.png");
        Button btnBrincar = criarBotaoComImagem("/assets/images/brincar.png");
        Button btnDormir = criarBotaoComImagem("/assets/images/dormir.png");
        Button btnLimpar = criarBotaoComImagem("/assets/images/limpar.png");

        // Ações dos botões
        btnAlimentar.setOnAction(e -> {
            controller.alimentar();
            atualizarStatus("Alimentou");
        });

        btnBrincar.setOnAction(e -> {
            controller.brincar();
            atualizarStatus("Brincou");
        });

        btnDormir.setOnAction(e -> {
            controller.dormir();
            atualizarStatus("Dormiu");
        });

        btnLimpar.setOnAction(e -> {
            controller.limpar();
            atualizarStatus("Limpou");
        });

        // Layout
        HBox botoes = new HBox(10, btnAlimentar, btnBrincar, btnDormir, btnLimpar);
        VBox layout = new VBox(10, botoes, statusArea, logArea);
        layout.setPadding(new Insets(20));

        // Cena
        Scene scene = new Scene(layout, 500, 500);
        primaryStage.setTitle("TamagotchiFX");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private Button criarBotaoComImagem(String caminhoRelativo) {
        // Carrega imagem do caminho relativo ao classpath
        Image imagem = new Image(getClass().getResourceAsStream(caminhoRelativo));
        ImageView imageView = new ImageView(imagem);
        imageView.setFitHeight(50);
        imageView.setFitWidth(50);

        Button button = new Button();
        button.setGraphic(imageView);
        return button;
    }

    private void atualizarStatus(String acao) {
        String status = controller.getStatus(acao);
        statusArea.setText(status);

        LocalDateTime agora = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String timestamp = agora.format(formatter);

        String logMessage = "[" + timestamp + "] - O " + controller.getNome() + " " + acao.toLowerCase() + "\n";
        logArea.insertText(0, logMessage);
    }

    public static void main(String[] args) {
        launch(args);
    }
}
