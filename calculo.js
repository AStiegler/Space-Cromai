

const n1 = document.getElementById("ladoA")
const n2 = document.getElementById("ladoB")
const hipotenusa = document.getElementById("input3")


function limparCampos() {
    
    /*função para limpar os inputs que foram preenchidos ao apertar o botão ''Calcular''
     ou ao dar erro por ter preenchido os 3 inputs */ 

    document.getElementById("ladoA").value = "";
    document.getElementById("ladoB").value = "";
    document.getElementById("input3").value = "";
}


function calcular() {


    //Validação para ter ao menos 2 inputs preenchidos
    
    let inputs = document.querySelectorAll("input[type='number']");
    let preenchidos = 0;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
            preenchidos++;
        }
    }

    if (preenchidos < 2) {
        return alert("Pelo menos dois campos devem ser preenchidos");
    } else if (preenchidos > 2) {
        limparCampos()
        return alert("No máximo dois campos devem ser preenchidos")
    }


/*variáveis para adicionar ou remover classes no CSS para os títulos
 dos resultados aparecerem de acordo com cada situação nos "ifs" da linha 55 em diante */

    const resultadoH2 = document.getElementById("resultadoH2")

    const H2Hidden = document.getElementById("resultadoH2")
    H2Hidden.classList.remove("resultadoH2Hide")

    const H1Hipotenusa = document.getElementById("resultadoH1Hipotenusa")
    const H1LadoA = document.getElementById("resultadoH1LadoA")
    const H1LadoB = document.getElementById("resultadoH1LadoB")



    if (hipotenusa.value == 0) {

        const ladoA = n1.value * n1.value
        const ladoB = n2.value * n2.value

        let ladoCAoQuadrado = ladoA + ladoB

        let ladoCResultado = Math.sqrt(ladoCAoQuadrado)

        resultadoH2.innerHTML = `${ladoCResultado}`


        H1Hipotenusa.classList.remove("resultadoHide")
        H1LadoA.classList.add("resultadoHide")
        H1LadoB.classList.add("resultadoHide")

    } else if (n1.value == 0) {

        const ladoB = n2.value * n2.value
        const ladoC = hipotenusa.value * hipotenusa.value

        let ladoAAoQuadrado = ladoC - ladoB

        let ladoAResultado = Math.sqrt(ladoAAoQuadrado)

        resultadoH2.innerHTML = `${ladoAResultado}`


        H1LadoA.classList.remove("resultadoHide")
        H1Hipotenusa.classList.add("resultadoHide")
        H1LadoB.classList.add("resultadoHide")

    } else if (n2.value == 0) {

        const ladoA = n1.value * n1.value
        const ladoC = hipotenusa.value * hipotenusa.value

        let ladoBAoQuadrado = ladoC - ladoA

        let ladoBResultado = Math.sqrt(ladoBAoQuadrado)

        resultadoH2.innerHTML = `${ladoBResultado}`



        H1LadoB.classList.remove("resultadoHide")
        H1Hipotenusa.classList.add("resultadoHide")
        H1LadoA.classList.add("resultadoHide")

    }

    limparCampos()
}




