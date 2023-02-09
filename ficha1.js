const quest = require("readline-sync")

/*1. Desenvolva um algoritmo que solicite ao usuário seu nome.
Em seguida, imprima na tela uma mensagem de boas vindas ao
usuário.*/

/*
var nome = quest.question("informe seu nome: ")
console.log("seja bem vindo,", nome)
*/


/*2. Elabore um algoritmo que receba o nome e o sobrenome de um
usuário, e em seguida informe: “Seu nome completo é ___”*/

/*
var nome = quest.question("informe seu nome: ")
var sobrenome = quest.question("informe seu sobre nome: ")
console.log("seu nome completo é:", nome, sobrenome)
*/


/*3. Elabore um algoritmo que receba dois números, e retorne ao
usuário a soma desses dois números.*/

/*
var n1 = parseInt(quest.question("informer um valor numerico: "))
var n2 = parseInt(quest.question("informer mais um valor numerico: "))
var soma = n1 + n2
console.log("a soma dos valores é de:", soma)
*/


/*4. Escreva um algoritmo que solicite ao usuário as notas de 3
disciplinas. Em seguida, exiba a média das notas.*/

/*
var nota1 = parseFloat(quest.question("informer o valor da primeira nota: "))
var nota2 = parseFloat(quest.question("informer o valor da segunda nota: "))
var nota3 = parseFloat(quest.question("informer o valor da terceira nota: "))
var soma = nota1 + nota2 + nota3
var media = soma / 3
console.log("sua media é de:", media)
*/


/*5. Elabore um algoritmo que solicite ao usuário dois números.
Em seguida imprima na tela se é verdadeiro ou falso que os
números são diferentes.*/

/*
var n1 = parseInt(quest.question("digite um numero: "))
var n2 = parseInt(quest.question("digite mais um numero: "))
if(n1 == n2){
    console.log("os valores sao iguais!")
}
else(
    console.log("os valores nao sao iguais!")
)
*/


/*6. Elabore um algoritmo que receba um número, e informe se esse
número é ímpar. (Lembre do operador %)*/


/*
var n = parseInt(quest.question("digite uma valor para saber se e par ou impar: "))
if(n % 2 == 0){
    console.log("o valor é par!")
}
else{
    console.log("o valor é impar!")
}
*/


/*7. Elabore um algoritmo que solicite ao usuário as idades de três
irmãos, A, B e C. Em seguida diga se é verdadeiro ou falso que a
idade de A é menor que as idades de B e C juntas.*/


/*
var irmaoA = parseInt(quest.question("informe a idade do primeiro irmao: "))
var irmaoB = parseInt(quest.question("informe a idade do segundo irmao: "))
var irmaoC = parseInt(quest.question("informe a idade do terceiro irmao: "))
var soma = irmaoB + irmaoC
if(soma > irmaoA){
    console.log("verdadeiro!")
}
else{
    console.log("falso!")
}
*/


/*8. Elabore um algoritmo que solicite ao usuário o valor do lado de
um quadrado e retorne em tela o valor de sua área.*/


/*
var lado = parseFloat(quest.question("informe o valor do lado do quadrado: "))
var area = lado * lado
console.log("a areaa do quadrado é de:", area)
*/


/*9. Elabore um algoritmo que solicite ao usuário os valores de
largura e comprimento de um terreno retangular, e a largura e
comprimento de uma casa construída neste terreno. Em seguida
retorne à tela a área não construída. (Terreno 15mx20, casa
9mx12m) além desses valores use outros de sua preferência.*/


/*
var comprimentoTerreno = parseFloat(quest.question("informe o comprimento do terreno: "))
var larguraTerreno = parseFloat(quest.question("informe o largura do terreno: "))
var comprimentoCasa = parseFloat(quest.question("informe o comprimento da casa: "))
var larguraCasa = parseFloat(quest.question("informe o largura da casa: "))

var areaTerreno = comprimentoTerreno * larguraTerreno
var areacasa = comprimentoCasa * larguraCasa
var areaNaoConstruida = areaTerreno - areacasa

console.log("a area nao construida do terreno e de:", areaNaoConstruida,"m²")

*/


/*10. Elabore um algoritmo que recebe o raio de uma circunferência, e
retorna sua área. Considere π=3,14.*/


/*
var raio = parseFloat(quest.question("informe o valor do raio da circunferencia: "))
var pi = 3.14
var area = 3.14 * (raio**2)
// (**) é o mesmo que raio elevado ao quadrado
console.log("a area da circunferenncia é de:", area)
*/


/*11. Elabore um algoritmo que estime a quantidade de caixas de
cerâmicas necessárias para revestir um piso de 10x15m. Cada caixa
cobre uma área de 2,20m2. Imprima na tela a estimativa da quantidade
de caixas necessárias.*/


/*
var piso = parseInt(10) * parseInt(15)
var caixaCeramica = 2.20
var quantidadeDeCeramica = piso / caixaCeramica
console.log(quantidadeDeCeramica)
*/


/*12. Elabore um algoritmo que retorne o valor correspondente a 75% do
número digitado pelo usuário.*/


/*
var n = parseInt(quest.question("informe um valor: "))
var porcentagem = (n * 75) / 100
console.log("70% do valor é:", porcentagem)
*/




















