import estoque from "./estoque.json" with { type: "json" };

let encerrar = false;
let identificador = 1;

while (!encerrar) {
  console.log("\n=== MOVIMENTAÇÃO DE ESTOQUE ===");

  console.log("\nProdutos disponíveis:");

  for (let i = 0; i < estoque.estoque.length; i++) {
    console.log(
      `${estoque.estoque[i].codigoProduto} - ${estoque.estoque[i].descricaoProduto} - Estoque: ${estoque.estoque[i].estoque}`,
    );
  }

  const codigoProduto = Number(prompt("Digite o código do produto:"));

  const produto = estoque.estoque.find(
    (produto) => produto.codigoProduto === codigoProduto,
  );

  if (!produto) {
    console.log("Produto não encontrado.");
    continue;
  }

  console.log("\n1 - Entrada");
  console.log("2 - Saída");

  const tipoMovimentacao = Number(prompt("Digite o tipo de movimentação:"));

  if (tipoMovimentacao !== 1 && tipoMovimentacao !== 2) {
    console.log("Tipo de movimentação inválido.");
    continue;
  }

  const quantidade = Number(prompt("Digite a quantidade:"));

  if (quantidade <= 0 || isNaN(quantidade)) {
    console.log("Quantidade inválida.");
    continue;
  }

  if (tipoMovimentacao === 1) {
    produto.estoque += quantidade;
  } else {
    if (quantidade > produto.estoque) {
      console.log("Não há estoque suficiente para realizar essa saída.");
      continue;
    }

    produto.estoque -= quantidade;
  }

  const descricao =
    tipoMovimentacao === 1 ? "Entrada de mercadoria" : "Saída de mercadoria";

  console.log("\n=== MOVIMENTAÇÃO REALIZADA ===");
  console.log(`Identificador: ${identificador}`);
  console.log(`Produto: ${produto.descricaoProduto}`);
  console.log(`Descrição: ${descricao}`);
  console.log(`Quantidade movimentada: ${quantidade}`);
  console.log(`Estoque final: ${produto.estoque}`);

  identificador++;

  const opcao = Number(
    prompt("\nDigite 1 para realizar outra movimentação ou 2 para encerrar:"),
  );

  if (opcao === 2) {
    encerrar = true;
  }
}

console.log("\nPrograma encerrado.");
