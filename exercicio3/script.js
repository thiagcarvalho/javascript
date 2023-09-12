function contar(){

    var inicio = Number(window.document.getElementById('inputinicio').value)
    var final = Number(window.document.getElementById('inputfinal').value)
    var passo = Number(window.document.getElementById('inputpasso').value)
    var resultado = window.document.getElementById('resultado')

    if (inicio.length == 0 || final.length == 0 || passo.length == 0)
        window.alert('Verifique os valores digitados e tente novamente!')
    else {

        resultado.innerHTML = `Contando... <br>`

        if (passo <= 0){
            
            window.alert('Impossível ter um passo com valor igual ou menor a zero')

        } else if(inicio < final){

            for(inicio; inicio <= final; inicio += passo){
                resultado.innerHTML += ` ${inicio} \u{1F449}`
            }

        } else {

            for(inicio; inicio >= final; inicio -= passo){
                resultado.innerHTML += ` ${inicio} \u{1F449}`
            }
    
        }

        
        resultado.innerHTML += `\u{1F3C1}`
    }
    

}