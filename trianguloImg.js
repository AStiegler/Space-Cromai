
    //script para mudar a imagem do triângulo de acordo com o input que esteja selecionado

 teorema = document.getElementById("teorema")
 teoremaA = document.getElementById("teoremaA")
 teoremaB = document.getElementById("teoremaB")
 teoremaC = document.getElementById("teoremaC")

function teoremaAClick() {

    teoremaA.classList.remove("teoremaHide")

    teorema.classList.add("teoremaHide")
    teoremaB.classList.add("teoremaHide")
    teoremaC.classList.add("teoremaHide")
}

function teoremaBClick() {

    teoremaB.classList.remove("teoremaHide")

    teorema.classList.add("teoremaHide")
    teoremaA.classList.add("teoremaHide")
    teoremaC.classList.add("teoremaHide")

}

function teoremaCClick() {

    teoremaC.classList.remove("teoremaHide")

    teorema.classList.add("teoremaHide")
    teoremaA.classList.add("teoremaHide")
    teoremaB.classList.add("teoremaHide")
}

function teoremaButtonReset() {

    teorema.classList.remove("teoremaHide")

    teoremaA.classList.add("teoremaHide")
    teoremaB.classList.add("teoremaHide")
    teoremaC.classList.add("teoremaHide")
}