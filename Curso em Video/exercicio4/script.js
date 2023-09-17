function tabuada(){

    let num = window.document.getElementById('inputnumber')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert(`Por favor digite um numero`)

    } else {
        
        let numero = Number(num.value)

        tab.innerHTML = ''

        for(let c = 1; c <=10; c++){
            let item = window.document.createElement('option')
            item.text = `${numero} x ${c} = ${numero * c}`
            item.value = `tab${c}`

            tab.appendChild(item)
        }

    }
}