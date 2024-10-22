class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    // DispositivoEletronico methods

    ligar() {
        if (this.ligado) {
            console.log(`O ${this.nome} já está ligado!`);
            return;
        }
        console.log(`Ligando o ${this.nome}.`);
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`O ${this.nome} já está desligado!`);
            return;
        }
        console.log(`Desligando o ${this.nome}.`);
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
    // Smartphone methods
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    // Tablet methods

    ligar() {
        console.log("Você alterou o método ligar");
    }

    falaOi() {
        console.log(`${this.nome} fala oi!`);
    }
}

const iphone = new Smartphone("iPhone", "Azul Celeste", "13");
console.log(iphone);
// iphone.ligar();
// console.log(iphone);
// console.log(
//     `Parabéns! Você possui um ${iphone.nome} ${iphone.modelo} - ${iphone.cor}`
// );
const novoTablet = new Tablet("iPad", true);
novoTablet.ligar();
novoTablet.ligar();
novoTablet.falaOi();
console.log(novoTablet);
