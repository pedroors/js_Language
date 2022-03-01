function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoadolescente-m.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotocriança-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoadolescente-f.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'fotoadulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoidoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}