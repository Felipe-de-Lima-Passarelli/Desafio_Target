import vendas from "./vendas.json" with { type: "json" };

let comissaoJoao = 0;
let comissaoMaria = 0;
let comissaoCarlos = 0;
let comissaoAna = 0;

for (let i = 0; i < vendas.vendas.length; i++) {
  switch (vendas.vendas[i].vendedor) {
    case "João Silva":
      if (vendas.vendas[i].valor >= 100 && vendas.vendas[i].valor < 500) {
        comissaoJoao += vendas.vendas[i].valor * 0.01;
      } else if (vendas.vendas[i].valor >= 500) {
        comissaoJoao += vendas.vendas[i].valor * 0.05;
      }
      break;
    case "Maria Souza":
      if (vendas.vendas[i].valor >= 100 && vendas.vendas[i].valor < 500) {
        comissaoMaria += vendas.vendas[i].valor * 0.01;
      } else if (vendas.vendas[i].valor >= 500) {
        comissaoMaria += vendas.vendas[i].valor * 0.05;
      }
      break;
    case "Carlos Oliveira":
      if (vendas.vendas[i].valor >= 100 && vendas.vendas[i].valor < 500) {
        comissaoCarlos += vendas.vendas[i].valor * 0.01;
      } else if (vendas.vendas[i].valor >= 500) {
        comissaoCarlos += vendas.vendas[i].valor * 0.05;
      }
      break;
    case "Ana Lima":
      if (vendas.vendas[i].valor >= 100 && vendas.vendas[i].valor < 500) {
        comissaoAna += vendas.vendas[i].valor * 0.01;
      } else if (vendas.vendas[i].valor >= 500) {
        comissaoAna += vendas.vendas[i].valor * 0.05;
      }
      break;

    default:
      console.log("Vendedor não encontrado");
      break;
  }
}

console.log(`Comissão do João Silva: R$${comissaoJoao.toFixed(2)}`);
console.log(`Comissão da Maria Souza: R$${comissaoMaria.toFixed(2)}`);
console.log(`Comissão do Carlos Oliveira: R$${comissaoCarlos.toFixed(2)}`);
console.log(`Comissão da Ana Lima: R$${comissaoAna.toFixed(2)}`);
