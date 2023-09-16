var vetorValores = []
var tab = window.document.getElementById('seltab')

function adicionaselect(){

    var num = window.document.getElementById('inputnumber').value

    if(num == null || num == 0 || nao_e_num(num)) {
        window.alert('Por favor digite um número válido')
    } else {
        
        let numero = Number(num)


        if (vetorValores.indexOf(numero) != -1){
            window.alert(`Digite um valor que não esteja na lista`)
            
        } else {

            if (numero < 1 || numero > 100){
                window.alert('Digite um valor que esteja dentro do intervalo')
            } else {
    
                let item = window.document.createElement('option')
                item.text = `Valor ${numero} foi adicionado`
    
                tab.appendChild(item)

                vetorValores.push(numero)
            }
        }
       
    }
}

function calcula() {

    let maior, menor, soma, media
    let resultado = window.document.getElementById('res')
    let final = Number(tab.options.length)


    if (vetorValores.length == 0){
        window.alert("Por favor insira algum valor antes de finalizar")
        return
    }

    vetorValores.sort()

    maior = vetorValores[final-1]
    menor = vetorValores[0]

    soma = somadosvalores(vetorValores, final)
    media = soma/final

    resultado.innerHTML += `Ao todo, temos ${final} números cadastrados. </br>`
    resultado.innerHTML += `</br> O maior valor informado foi ${maior} </br>`
    resultado.innerHTML += `</br> O menor valor informado foi ${menor} </br>`
    resultado.innerHTML += `</br> A soma de todos os valores é ${soma} </br>`
    resultado.innerHTML += `</br> A média dos valores digitados é ${media.toFixed(2)}`

}

function somadosvalores() {

    var somadosnumeros = 0

    for(var c=0; c < vetorValores.length; c++){
        somadosnumeros += vetorValores[c]
    }

    return somadosnumeros
}

function nao_e_num(valor) {

    if (parseInt(valor) != valor){
        return true
    }

    return false
}