let vetorValores = []


function adicionaselect(){

    let numero = Number(window.document.getElementById('inputnumber').value)
    let tab = window.document.getElementById('seltab')

    if(numero == null || numero == 0) {
        window.alert('Por favor digite um número')
    } else {

        if (verificaValor(numero)){
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

    var maior, menor, soma, media
    var resultado = window.document.getElementById('res')
    let valores = window.document.getElementById('seltab')
    let final = Number(valores.options.length)

    vetorValores.sort()

    maior = vetorValores[final-1]
    menor = vetorValores[0]

    soma = somadosvalroes(vetorValores, final)
    media = soma/final

    resultado.innerHTML += `Ao todo, temos ${final} números cadastrados. </br>`
    resultado.innerHTML += `</br> O maior valor informado foi ${maior} </br>`
    resultado.innerHTML += `</br> O menor valor informado foi ${menor} </br>`
    resultado.innerHTML += `</br> A soma de todos os valores é ${soma} </br>`
    resultado.innerHTML += `</br> A média dos valores digitados é ${media}`

}

function somadosvalroes() {

    var somadosnumeros = 0

    for(var c=0; c < vetorValores.length; c++){
        somadosnumeros += vetorValores[c]
    }

    return somadosnumeros

}

function verificaValor(valor) {

    if(vetorValores.indexOf(valor) == -1){
        return false
    }
    else{
        return true
    }

}
