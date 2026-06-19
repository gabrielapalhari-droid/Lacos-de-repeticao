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
console.log('Maior venda é:', MaiorVenda);



