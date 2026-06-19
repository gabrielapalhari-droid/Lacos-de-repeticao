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

let temperI = 17
let temperF = 25
  for() 

