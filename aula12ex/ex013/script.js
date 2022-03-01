function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 21
    msg.innerHTML = `<b>Agora são ${hora} horas.</b>`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha2.png'
        document.body.style.background = '#208fe1'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde2.png'
        document.body.style.background = '#b9804b'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite2.png'
        document.body.style.background = '#01244c'
    }
}
