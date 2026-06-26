// Alunos e notas 
const alunos = ['Kauan', 'Malakai', 'Jude', 'Paedyn', 'Aaron', 'kenji', 'Cardan', 'Damon', 'Juliett', 'Kai'];
const notas = [9,10,10,10,10,9,7,6,8,9];

// Média da Sala
let soma = 0;
for(let i = 0; i < notas.length; i++) {
    soma += notas[i];};  
let media = soma / alunos.length; 
//console.log(media);


//Maior nota
let NumeroMaior = Math.max(...notas);
//console.log(NumeroMaior);


//Menor nota
let NumeroMenor = Math.min(...notas);
//console.log(NumeroMenor);


//Alunos acima de 7 
let notaSete = notas.filter(notas => notas >=7);
//console.log(notaSete);

//Temperatura 
/* const readline = require('readline-sync');
let inicio = Number(readline.question('Valor inicial: '));
let final = Number(readline.question('Valor final: '));
let fInicio = (inicio * 9 / 5) + 32;
let fFinal = (final * 9 / 5) + 32; */

//console.log(`${inicio}°C equivale a ${fInicio.toFixed(2)}°F`);
//console.log(`${final}°C equivale a ${fFinal.toFixed(2)}°F`);

//Loja Carros 
//Total vendido ao ano 
const totalVendas = [200000, 27000, 130000, 150000, 65000, 100000, 30000, 19000, 87000, 310000, 45000, 500000];
let Anual = 0;
for(let i = 0; i < totalVendas.length; i++){
  Anual += totalVendas[i];};
  //console.log('Valor Anual:', Anual);

//Media Mensal
let Mensal = 0;
for(let i = 0; i < totalVendas.length; i++){
  Mensal += totalVendas[i];};

let MediaCarros = Mensal / totalVendas.length;
//console.log('O valor Mensal é:', MediaCarros);


//Maior Venda
let MaiorVenda = Math.max(...totalVendas);
//console.log('Maior venda é:', MaiorVenda);


//Menor venda 
let MenorVenda = Math.min(...totalVendas);
//console.log('A menor venda é:', MenorVenda);

/* //Caixa eletrônico 
const readline = require('readline-sync');
function PuxarSaldo() {
let saldo = 2000;
//console.log('Seu saldo atual é de 2000');
  do {
let retirar = Number(readline.question('Escolha uma quantia para sacar: '));
    if (retirar < saldo) {
    let SaldoAtt = saldo -= retirar;
    //console.log('Seu saldo é de', + SaldoAtt);
    return;
    } else {
    //console.log('Quantia insuficiente, escolha outro valor');
    continue;
    }
  }
  while(true);
};
//console.log(PuxarSaldo()); */


//Produtos Fim 

/* const readline = require('readline-sync'); 

let cadastrados = 0, totalEstoque = 0, maiorQtd = 0, maisPreenchido = "";

while (true) {
  
    let nome = readline.question("Produto (ou 'FIM' para sair): ");
    
    if (!nome || nome.toUpperCase() === "FIM") break;

    let qtd = +readline.question(`Quantidade de ${nome}: `);

    cadastrados++;
    totalEstoque += qtd;

    if (qtd > maiorQtd) {
        maiorQtd = qtd;
        maisPreenchido = nome;
    }
}

console.log(`\nProdutos cadastrados: ${cadastrados}`);
console.log(`Maior quantidade: ${maisPreenchido} (${maiorQtd} un)`);
console.log(`Total no estoque: ${totalEstoque}`); */


//Senha 

/* const readline = require('readline-sync');

function VerifSenha() {
  const senhaCorreta = 1234;
  let tentativa = 0;
  let statusSenha = "F"

  do {
    tentativa = tentativa + 1;
    let n1 = Number(readline.question('Digite uma senha: '));

    if(n1 === senhaCorreta){
      console.log("Senha Correta!");
      statusSenha = "T";
    } 
    else{
      console.log('Senha incorreta, tente nomavente');
      statusSenha = "F";
    }

    if(tentativa >= 3){
      return 'Máximo de tentativas atingido';
    }

  }while(statusSenha === "F");

  return "Verificado senha!"
};

console.log(VerifSenha());
 */


//Cadastro de produtos

/* const readline = require('readline-sync');

function cadastrarProdutos() {
    const produtos = [];
    let continuar = "S";

    // Loop de cadastro
    do {
        let nome = readline.question('Digite o nome do produto: ');
        let preco = Number(readline.question(`Digite o preco de ${nome}: `));

        // Validação simples de preço
        if (!isNaN(preco) && preco >= 0) {
            produtos.push({ nome: nome, preco: preco });
        } else {
            console.log('Preco invalido! Produto nao cadastrado.');
        }

        continuar = readline.question('Deseja cadastrar outro produto? (S/N): ').toUpperCase();
        console.log(''); 

    } while (continuar === "S");

    // Processamento e exibição dos resultados
    if (produtos.length > 0) {
        let total = 0;
        let maisCaro = produtos[0];
        let maisBarato = produtos[0];

        // Loop simples para as estatísticas
        for (let i = 0; i < produtos.length; i++) {
            total += produtos[i].preco;

            if (produtos[i].preco > maisCaro.preco) maisCaro = produtos[i];
            if (produtos[i].preco < maisBarato.preco) maisBarato = produtos[i];
        }

        let media = total / produtos.length;

        console.log('Resumo');
        console.log(`Quantidade de produtos: ${produtos.length}`);
        console.log(`Valor medio: R$ ${media.toFixed(2)}`);
        console.log(`Mais caro: ${maisCaro.nome} (R$ ${maisCaro.preco.toFixed(2)})`);
        console.log(`Mais barato: ${maisBarato.nome} (R$ ${maisBarato.preco.toFixed(2)})`);
    } else {
        console.log('Nenhum produto cadastrado.');
    }

    return "Sistema finalizado!";
}

console.log(cadastrarProdutos()); */



//Voltas 


/* const readline = require('readline-sync');

function registrarVoltas() {
    const voltas = [];
    let continuar = "S";

    // Loop de registro
    do {
        let tempo = Number(readline.question('Digite o tempo da volta (em segundos): '));

        // Validação simples do tempo
        if (!isNaN(tempo) && tempo > 0) {
            voltas.push(tempo);
        } else {
            console.log('Tempo invalido! Volta nao registrada.');
        }

        continuar = readline.question('Registrar outra volta? (S/N): ').toUpperCase();
        console.log(''); // Linha em branco para organizar o terminal

    } while (continuar === "S");

    // Processamento e exibição dos resultados
    if (voltas.length > 0) {
        let totalTempo = 0;
        let melhorTempo = voltas[0]; // O menor tempo é o melhor
        let piorTempo = voltas[0];   // O maior tempo é o pior

        // Loop simples para as estatísticas
        for (let i = 0; i < voltas.length; i++) {
            totalTempo += voltas[i];

            if (voltas[i] < melhorTempo) melhorTempo = voltas[i];
            if (voltas[i] > piorTempo) piorTempo = voltas[i];
        }

        let media = totalTempo / voltas.length;

        console.log('Resumo final');
        console.log(`Numero de voltas: ${voltas.length}`);
        console.log(`Melhor tempo: ${melhorTempo} segundos`);
        console.log(`Pior tempo: ${piorTempo} segundos`);
        console.log(`Tempo medio: ${media.toFixed(2)} segundos`);
    } else {
        console.log('Nenhuma volta foi registrada.');
    }

    return "Corrida finalizada!";
}

console.log(registrarVoltas()); */