const { Console } = require('console')

       let prompt = require('prompt-sync')()
//01
 let nome= prompt("Digite seu nome : ")
 let idade1= prompt("Digite sua idade: ")

  console.log(`Olá, meu nome é ${nome} e eu
  tenho ${idade1} anos `)

console.log("------------------")

       
 let num1 =parseFloat( prompt("Digite o primeiro numero: "))
 let num2 =parseFloat( prompt("Digite o segundo numero: "))

 soma=num1+num2;
 subtraçao=num1-num2;
 multiplicaçao=num1*num2;
 divisao=num1/num2;
 
 
 
let escolha = prompt("Escolha uma opção: + ,- ,* ou / ");


switch (escolha.toUpperCase()) {
    case '+':
        console.log("Você escolheu a Soma o total e ", soma );
        break;

    case '-':
        console.log("Você escolheu a subtraçao o total e ", subtraçao);
        break;

    case '*':
        console.log("Você escolheu  a Multiplicaçao o total e ", multiplicaçao );
        break;

    case '/':
        console.log("Você escolheu a divisao ", divisao );
        break;

    default:
        console.log("Escolha errada");
 }

console.log("------------------")

    let idade= prompt("Escreva sua idade ");

    if(idade>=18){
            console.log("Voce e maior de idade");
    }else{
            console.log(" Voce e menor de idade")
    }

    console.log("------------------")

    let numero1 =parseFloat( prompt("Digite o primeiro numero: "))
    let numero2 =parseFloat( prompt("Digite o segundo numero: "))
    let numero3 =parseFloat( prompt("Digite o terceiro numero: "))

       media=(numero1+numero2+numero3) / 3;

       
    console.log(`A media dos numeros e ${media}`);

    console.log("------------------")

    let salarioFun= prompt("Escreva o salrio ")
    salarioNovo= salarioFun * 1.1;
    console.log(`O seu salario atualizado e ${salarioNovo}`)

    console.log("------------------")

 let valorA=parseInt(prompt("Digite um valor "));
 let valorB=parseInt(prompt("Digite um valor "));
       valorC1=valorA+valorB
       valorC2=valorA*valorB


   if(valorA==valorB){
       console.log(`Os dois valore sao iquais entao vao ser somado o resultado ${valorC1}`)
   }else{
       console.log(`Os valores são diferentes entao o primeiro valor ${valorA} e o segundo valor ${valorB} vão ser multiplicado o resultado e ${valorC2} `)
   }

     console.log("------------------")

       let preço=parseFloat( prompt("Escreva o preço ") );
       let prestaçoes=parseInt(prompt("Escreva o numero de parcelas de 3 vezes ou 5 vezes "));


       let parcelamento3 = (preço *1.1 ) / 3 ;
       let parcelamento5 = (preço *1.2 ) / 5 ;
       
       if (prestaçoes ==3) {
              console.log(`Voce escolheu parcelar de 3 vezes entao o valor das prestaçoes e ${parcelamento3}`)
              
       }else if(prestaçoes==5){
              console.log(`Voce escolheu parcelar de 5 vezes entao o valor das prestaçoes e ${parcelamento5}`)
              

       }else{
              console.log("Opção errada volte e escolha o parcelamento de 3 ou 5 vezes ")
       }

       console.log("------------------")

            let  nomeDiciplina= prompt("Escreva o nome da disciplina ");
              
            let nota1= parseFloat(prompt("Escreva a nota1 de 0 a 10 "))
            let nota2= parseFloat(prompt("Escreva a nota2 de 0 a 10 "))
            let nota3=parseFloat(prompt("Escreva a nota3 de 0 a 10 "))
            
            


            let nomeAluno=prompt("Escreva o nome do aluno ")

            let mediaNota= (nota1+nota2+nota3) / 3

              if(mediaNota >=8){
                    console.log(`Ola ${nomeAluno} voce  foi aprovado e a sua media e ${mediaNota}`) 
              }else{
                     console.log(`Ola ${nomeAluno} voce  foi reprovado`);
              }
       

       // console.log("------------------")

              let numer1 = parseFloat( prompt ("Escreva o primeiro numero "))
              let numer2 =parseFloat( prompt ("Escreva o segundo numero "))
              let escolh = parseFloat(prompt("Escolha a operçao 1 soma 2 para multiplicaçao e 3 para divisao "))
              soma=numer1+numer2
              multi=numer1*numer2
              divisao=numer1/numer2
       
               
       

              switch (escolh) {
                     case 1:
                            console.log(`O total da soma e ${soma}`);
                            break;
                     case 2:
                            console.log(`O total da multiplicação e ${multi}`);
                            break;
                     case 3:
                            console.log(`O total da divição e ${divisao}`);
                            break;

                     default:
                            console.log("Opção errada")
                            break;
              }


console.log("----------------------------------------------");



let n1=100
let n2=20

if (n1>n2) {
    console.log("O n1 e maior que n2")
}else{
    console.log("O n2 e maior que n1")
}

console.log("----------------------------------------------");


let pessoa = "m"


if (pessoa == "M") { 
    console.log("Seu sexo e Masculino")
}else{
    console.log("Seu sexo e feminino")
}

console.log("----------------------------------------------");

let notaAluno=4

if(notaAluno==10){
    console.log("Aprovado com Distinção")
}else if(notaAluno>=7){
    console.log("Aprovado")
}else{
        console.log("Reprovado")

}