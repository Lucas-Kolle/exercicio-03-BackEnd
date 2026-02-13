/*********************************************************************************************************************************************************************
 * Objetivo: Criar um sistema para calcular as principais operações matemáticas.
 * Autor: Lucas kolle
 * Data: 13/02/2026
 * Versão: 1.0.02.26
 *******************************************************************************************************************************************************************/

console.log("******INICIANDO APLICAÇÃO******")

// importando biblioteca readline
const readline = require("readline")

//import da "biblioteca" de calculos que eu criei
const calculos = require("./modulo/calculos.js")

// criando objeto para entrada de dados
const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

// criando entrada de dados
entradaDeDados.question("Digite o primeiro número:", function(valor1){

    //criando variável para trabalhar com o valor 1 
    let numero1 = valor1

    entradaDeDados.question("Digite o segundo número:", function(valor2){

        //criando variável para trabalhar com o valor 2
        let numero2 = valor2

        entradaDeDados.question("Digite a operação desejada (adição / subtração / multiplicação / divisão):", function(operacao){

            //criando variável para trabalhar com a operação
            let operacaoMatematica = operacao

            //corrigindo os dados numéricos para continual o programa

            numero1 = calculos.padronizarNumero(numero1)
            numero2 = calculos.padronizarNumero(numero2)

            //verificando resultado dos numeros
            if(numero1 && numero2){

                if(operacao == ""){
                    console.log("ERRO: Não é possível realizar o cálculo se algum campo estiver vazio!!!")
                    return false
            
                //bloquando números com o contrario de isNaN = !isNaN 
                }else if(!isNaN(operacao)){
                    console.log("ERRO: A operação deve ser escrita por extenso!!!")
            
                //continuando programa
                }else{
                    
                    //criando condiconal da soma
                    if(operacao == "somar" || operacao == "soma" || operacao == "mais" || operacao == "adição"){
    
                        //criando variavle para guardar o resultado e ja chamra a soma
                       let resultadoOperacao = calculos.realizarSoma(numero1,numero2)
    
                       //se der tudo certo na soma ele entra aqui e exibe o resultado
                       if(resultadoOperacao){
                            console.log("O resultado da soma é:" + resultadoOperacao)
                            console.log("******FINALIZANDO PROGRAMA****")
    
                        //se der algo errado na soma ele entra aqui e fecha o programa
                        }else{
                            console.log("Algo deu errado no precesso, infelizmento o calculo não pôde ser realizado!")
                            entradaDeDados.close()
                        }
    
                    //criando condicional da subtração
                    }else if(operacao == "menos" || operacao == "subtração" || operacao == "subtrair"){
    
                        //criando variavle para guardar o resultado
                        let resultadoOperacao = calculos.realizarSubtracao(numero1,numero2)
    
                        //se der tudo certo na soma ele entra aqui e exibe o resultado
                        if(resultadoOperacao){
                            console.log("O resultado da subtrção é:" + resultadoOperacao)
                            console.log("******FINALIZANDO PROGRAMA****")
    
                        //se der algo errado na soma ele entra aqui e fecha o programa
                        }else{
                            console.log("Algo deu errado no precesso, infelizmento o calculo não pôde ser realizado!")
                            entradaDeDados.close()
                        }
    
                    //criando condicional da divisão
                    }else if(operacao == "dividir" || operacao == "divisão"){
    
                        //criando variavel para guardar resultado
                        let resultadoOperacao = calculos.realizarDivisao(numero1,numero2)
    
                        //se der tudo certo na soma ele entra aqui e exibe o resultado
                        if(resultadoOperacao){
                            console.log("O resultado da divisão é:" + resultadoOperacao)
                            console.log("******FINALIZANDO PROGRAMA****")
    
                        //se der algo errado na soma ele entra aqui e fecha o programa
                        }else{
                            console.log("Algo deu errado no precesso, infelizmento o calculo não pôde ser realizado!")
                            entradaDeDados.close()
                        }
    
                    //cirando condicional para multiplicação
                    }else if(operacaoMatematica == "multiplicação" || operacaoMatematica == "vezes"){
    
                        //criando variavel para guardar resultado
                        let resultadoOperacao = calculos.realizarMultiplicacao(numero1,numero2)
    
                        //se der tudo certo na soma ele entra aqui e exibe o resultado
                        if(resultadoOperacao){
                            console.log("O resultado da multiplicação é:" + resultadoOperacao)
                            console.log("******FINALIZANDO PROGRAMA****")
    
                        //se der algo errado na soma ele entra aqui e fecha o programa
                        }else{
                            console.log("Algo deu errado no precesso, infelizmento o calculo não pôde ser realizado!")
                            entradaDeDados.close()
                        }
    
                    //se nenhuma opção for escolhida o programa não funciona
                    }else{
                        console.log("ERRO: Digite a operação conferme orientado!!!")
                        entradaDeDados.close
                    }
                }

            }else{
                console.log("Algo deu errado no precesso, infelizmento o calculo não pôde ser realizado!")
                entradaDeDados.close()
            }

        })//fecha operacao
    }) //fecha valor2
}) //fecha valor1