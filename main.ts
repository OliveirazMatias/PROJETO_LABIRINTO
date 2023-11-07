const color = require("cli-color");
const input = require("prompt-sync")();

const planta: number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const colorir = (text: number): string => {
    if (text == 22) {
        return color.red.bgRed("  ")
    }
    else if (text == 11) {
        return color.blue.bgBlue("  ")
    }
    else if (text == 33) {
        return color.green.bgGreen("  ")
    }
    else {
        return color.yellow.bgYellow("  ")
    }
}

var x: number = 0;
var y: number = 5;

const mostrarPlanta = (): void => {
    console.clear();
    for (let i of planta) {
        let linha: any[] = [];
        for (let e of i) {
            linha.push(colorir(e));
        }
        console.log(linha.toString().replaceAll(",", ""))
    }
}

const descer = (): void => {
    planta[x][y] = 11;
    x = x + 1
    planta[x][y] = 33;
}


const subir = (): void => {
    planta[x][y] = 11;
    x = x - 1
    planta[x][y] = 33;
}


const esquerda = (): void => {
    planta[x][y] = 11;
    y = y - 1
    planta[x][y] = 33;
}

const direita = (): void => {
    planta[x][y] = 11;
    y = y + 1
    planta[x][y] = 33;
}

while (true){
 mostrarPlanta();
 let escolha = input("Digite uma direção (w, a, s, d) ou (q) para sair: ");
 if (escolha.toUpperCase() == 'Q'){
    break
 } else if (escolha.toUpperCase() == "W"){
    subir()
 } else if (escolha.toUpperCase() == "A"){
    esquerda()
 } else if (escolha.toUpperCase() == "D"){
    direita()
 } else if (escolha.toUpperCase() == "S"){
    descer()
 } 
}
