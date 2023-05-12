// calcula o IMC 
function calcular() {
    // Obtemos os valores digitados pelo usuário
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    // Calculamos o IMC
    let imc = peso / (altura * altura);

    // Verifica se o Usuário digitou algo 
    if (document.getElementById("altura").value == "" || document.getElementById("peso").value == "") {
        alert("Digite Algo!");
    }

    // Faz o Cálculo do IMC
    else {
        // Verificamos em qual faixa o IMC se encontra e exibimos o resultado
        let resultado;
        switch (true) {
            case (imc < 18.5):
                resultado = "Abaixo do peso";
                break;
            case (imc >= 18.5 && imc < 25):
                resultado = "Peso normal";
                break;
            case (imc >= 25 && imc < 30):
                resultado = "Sobrepeso";
                break;
            case (imc >= 30 && imc < 35):
                resultado = "Obesidade Grau II";
                break;
            case (imc >= 35 && imc < 40):
                resultado = "Obesidade Grau II";
                break;
            default:
                resultado = "Obesidade Grau III";
                break;
        }

        document.getElementById("resultado").value = `${"IMC: " + imc.toFixed(2)} - ${resultado}`;
    }

}

// apenas limpa o conteúdo dos campos peso e altura 
function limpar() {

    // = e não == porque está Atribuindo Valor
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";

    document.getElementById("resultado").value = "";
}