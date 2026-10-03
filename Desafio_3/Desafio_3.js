const valor = 100;
const dataVencimento = new Date("2026-09-28");
const hoje = new Date();

const diferenca = hoje - dataVencimento;
const diasAtraso = Math.floor(diferenca / (1000 * 60 * 60 * 24));

if (diasAtraso > 0) {
  const jurosPorDia = 0.025;
  const juros = valor * jurosPorDia * diasAtraso;
  const valorTotal = valor + juros;

  console.log(`Dias de atraso: ${diasAtraso}`);
  console.log(`Juros: R$ ${juros.toFixed(2)}`);
  console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
} else {
  console.log("A conta ainda não está atrasada.");
}
