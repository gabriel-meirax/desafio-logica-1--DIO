console.log("Olá")

let nome = "jogador"
let xp = 1001
let hierarquia = ""
let hierarquiaSwitch = 0
let ferro = 1000
let bronze = 2000
let prata = 5000
let ouro = 7000
let platina = 8000
let ascendente = 9000
let imortal = 10000
let condicao = false

for (let i = 0; i <= 99999; i++) {

    if (i <= ferro) {
        hierarquiaSwitch = 0
    } else if (i <= bronze){
        hierarquiaSwitch = 1
    } else if (i <= prata){
        hierarquiaSwitch = 2
    } else if (i <=ouro){
        hierarquiaSwitch = 3
    } else if (i <= platina) {
        hierarquiaSwitch = 4
    } else if (i <= ascendente) {
        hierarquiaSwitch = 5
    } else if (i <= imortal) {
        hierarquiaSwitch = 6
    } else if (i > imortal) {
        hierarquiaSwitch = 7
    }

    condicao = i === xp
    if (condicao) {
        break
    }
}

switch (hierarquiaSwitch) {
    case 0:
        hierarquia = "Ferro"
        break;

    case 1:
        hierarquia = "Bronze"
        break;

    case 2:
        hierarquia = "Prata"
        break;

    case 3:
        hierarquia = "Ouro"
        break;

    case 4:
        hierarquia = "Platina"
        break;

    case 5:
        hierarquia = "Ascendente"
        break;

    case 6:
        hierarquia = "Imortal"
        break;

    case 7:
        hierarquia = "Radiante"
        break;
}

console.log("O Herói de nome " + nome + " está no nível de " + hierarquia)