let alunos = [
     {nome : "Gui", nota : [10,8,7]}, 
     {nome : "sarah" , nota : [9,8,9]}, 
     {nome : "saulo", nota : [10,7,10]}
];

for (let i = 0; i < alunos.length; i++){
  let total = 0;
  for (let  m = 0; m < alunos[i].nota.length; m++)
    total += alunos[i].nota[m];
let media = (total / alunos[i].nota.length).toFixed(1);
console.log(alunos[i].nome, ":", media);
}