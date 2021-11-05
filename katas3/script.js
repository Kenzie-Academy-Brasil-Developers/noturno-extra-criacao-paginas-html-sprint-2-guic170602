let interesse = document.getElementById('interesseDigitado')
let lista = document.getElementById('itens')
function addInteresse(){
    lista.innerHTML += `<li>${interesse.value}</li>`
}
let botao = document.getElementById('add')
botao.addEventListener("click", addInteresse)