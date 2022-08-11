function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6  && hora < 12) {
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#f4d2c6'
    } else if ( hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#d9680c'
    } else {
        img.src ='imagens/noite.jpg'
        document.body.style.background = '#07418a'
    }
}