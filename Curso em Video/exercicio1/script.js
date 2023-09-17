function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()

    var hora = data.getHours()
    var minutes = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutes} minutos.`

    if(hora >= 6 && hora < 12){
        img.src = 'img/fotomanha.png'
        window.document.body.style.background = '#F8D6BA'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/fototarde.png'
        window.document.body.style.background = '#9B7566'
    } else if (hora >= 18 && hora <= 20){
        img.src = 'img/fotonoitinha.png'
        window.document.body.style.background = '#895061'
    } else {
        img.src = 'img/fotonoite.png'
        window.document.body.style.background = '#141D2C'
    }


}
