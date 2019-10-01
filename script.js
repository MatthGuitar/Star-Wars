var lista = document.querySelectorAll('li')

function ImgChange(lista){
    document.querySelector('#center').src = lista.target.src

}

window.onload = function() {
    for(i=0; i<lista.length; i++){
        lista[i].addEventListener('click', this.ImgChange)
    }
}