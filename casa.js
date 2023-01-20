class casa {
    constructor(porta,janela,telhado){
        this.porta = porta;
        this.janela = janela;
        this.telhado = telhado;
    }
    contruir(){
        console.log('contruida');
    }
}
class Rancho extends casa {
    constructor(porta,janela,telhado,varanda){
        super(porta,janela,telhado,varanda);
        this.varanda = varanda;
    }
    galinha(){
        console.log('galinheiro');
    }
}
const familia = new casa ('porta','janela','telhado');
console.log(familia);
const primavera = new Rancho ('porta','janela','telhado','varanda');
console.log(primavera);

