function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var ano_do_formulario = Number(window.document.getElementById('inputano').value)
    var resultado = window.document.getElementById('resultado')

    if (ano_do_formulario == 0 || ano_do_formulario > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var formulario_sex = window.document.getElementsByName('radiosex')
        var idade = ano - ano_do_formulario

        var genero = ''

        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (formulario_sex[0].checked){
            genero = 'Homem'

            window.document.body.style.background = '#100148'

            if (idade >=0 && idade < 10){
                imagem.setAttribute('src', 'img/homemcrianca.png')
            } else if(idade < 21 ){
                imagem.setAttribute('src', 'img/homemjovem.png')
            } else if(idade < 51){
                imagem.setAttribute('src', 'img/homemadulto.png')
            } else{
                imagem.setAttribute('src', 'img/homemvelho.png')
            }
        } else{
            genero = 'Mulher'

            window.document.body.style.background = '#ff83ff'

            if (idade >=0 && idade < 10){
                imagem.setAttribute('src', 'img/mulhercrianca.png')
            } else if(idade < 21 ){
                imagem.setAttribute('src', 'img/mulherjovem.png')
            } else if(idade < 51){
                imagem.setAttribute('src', 'img/mulheradulto.png')
            } else{
                imagem.setAttribute('src', 'img/mulhervelha.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectado ${genero} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}