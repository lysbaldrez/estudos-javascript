var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

// removendo os pacientes se o usuário der um duplo click


tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function () {
    event.target.parentNode.remove();
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
  }, 500);

});

// o this está sempre atrelado ao dono do evento 
// pacientes.forEach(function (paciente) {
//  paciente.addEventListener("dblclick", function () {
//    console.log("Fui clicado com um duplo click");
//    this.remove();
//  });
// });