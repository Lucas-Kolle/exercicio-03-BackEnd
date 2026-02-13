/*********************************************************************************************************************************************************************
 * Objetivo: Guardar as funções que realizam as operações matemáticas.
 * Autor: Lucas kolle
 * Data: 13/02/2026
 * Versão: 1.0.02.26
 *******************************************************************************************************************************************************************/

//criando função para calular a soma
function realizarSoma(numero1,numero2){

    //criando funções para receber os valores e realizar os calculos
    let valor1 = numero1
    let valor2 = numero2

    //bloqueando campos vazios
    if(valor1 == "" || valor2 == "" ){
        
        console.log("ERRO: Não é possível realizar o cálculo se algum campo estiver vazio!!!")
        return false
    
    //bloqueando a entrada de letras nos campos numericos
    }else if(isNaN(valor1) || isNaN(valor2)){

        console.log("ERRO: Não é permitida a entrada de caracteres nos campos numéricos!!!")
        return false
    
    //continuar programa
    }else{

        //criando variável para guardar o resultado
        let resustadoOperacao

        //realizando o calculo
        resustadoOperacao = Number(valor1) + Number(valor2)

        return Number(resustadoOperacao.toFixed(2))
    }
}

function realizarSubtracao(numero1,numero2){

    //criando funções para receber os valores e realizar os calculos
    let valor1 = numero1
    let valor2 = numero2

    //bloqueando campos vazios
    if(valor1 == "" || valor2 == "" ){

        console.log("ERRO: Não é possível realizar o cálculo se algum campo estiver vazio!!!")
        return false

    //bloquando a entrada de letras 
    }else if(isNaN(valor1) || isNaN(valor2)){

        console.log("ERRO: Não é permitida a entrada de caracteres nos campos numéricos!!!")
        return false
    
    //continuar programa
    }else{

        //criando variável para guardar o resultado
        let resustadoOperacao

        //realizar cálculo
        resustadoOperacao = Number(valor1) - Number(valor2)

        return Number(resustadoOperacao.toFixed(2))
    }
}

function realizarMultiplicacao(numero1, numero2){

    //criando funções para receber os valores e realizar os calculos
    let valor1 = numero1
    let valor2 = numero2

    //validando campos vazios
    if(valor1 == "" || valor2 == "" ){
        console.log("ERRO: Não é possível realizar o cálculo se algum campo estiver vazio!!!")
        return false
    
    //validando entrada de letras
    }else if (isNaN(valor1) || isNaN(valor2)){
        console.log("ERRO: Não é permitida a entrada de caracteres nos campos numéricos!!!")
        return false

    //continuando programa
    }else{

        //criando variável para guatdar os resultado
        let resustadoOperacao

        //realizando cálculo
        resustadoOperacao = Number(valor1) * Number(valor2)

        return Number(resustadoOperacao.toFixed(2))
    }

}

function realizarDivisao(numero1,numero2){

    //criando funções para receber os valores e realizar os calculos
    let valor1 = numero1
    let valor2 = numero2

    //bloquando campos vazios
    if(valor1 == "" || valor2 == ""){
        console.log("ERRO: Não é possível realizar o cálculo se algum campo estiver vazio!!!")
        return false

    //bloquando letras nos campos numericos
    }else if(isNaN(valor1) || isNaN(valor2)){
        console.log("ERRO: Não é permitida a entrada de caracteres nos campos numéricos!!!")
        return false

    //bloquando divisão por 0
    }else if(valor1 <= 0 || valor2 <= 0){
        console.log("ERRO: Não é possível realizar a divisão com números menores ou iguais a zero (0)!!!")
        return false

    //continuar programa
    }else{

        //criando variável para guardar o resultado
        let resustadoOperacao

        //realizando cálculo
        resustadoOperacao = Number(numero1) / Number(numero2)

        return Number(resustadoOperacao.toFixed(2))
    }
}

//criando função para resolver os problemas com pontos e virgulas
function padronizarNumero(numero1){

    let valor1 = numero1

    //mudando todos as virgulas por pontos utilizando o replaceAll (mudas todos os pontos, diferente do replace que muda só o primeiro)
    valor1 = valor1.replaceAll(",",".")

    //bloquar mais de um ponto 
    if((valor1.match(/\./g) || []).length > 1){
        console.log("ERRO: Não é permitida a entrada de números com mais de um ponto ou virgula!!!")
        return false
    }else{

        return Number(valor1)
    }

}

module.exports = {
    padronizarNumero,
    realizarDivisao,
    realizarMultiplicacao,
    realizarSubtracao,
    realizarSoma
}