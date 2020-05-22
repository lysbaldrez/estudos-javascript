var titulo = document.querySelector(".titulo");
// coloquei uma classe no h1 chamada titulo
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];


  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  // criando uma condição para verificar se os dados do paciente são válidos para calcular o imc corretamente 
  if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.style.backgroundColor = "orange";
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 300) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);

}
// titulo.addEventListener("click", function () {

// }); // exemplo de funçaõ anônima 


// function mostraMensagem() {
//  console.log("Olá eu fui clicado!")
//} exemplo de função nomeada