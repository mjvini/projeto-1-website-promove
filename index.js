
/*Controla o botão*/
document.addEventListener("DOMContentLoaded", function () {
  var botaoAberto = document.getElementById("aberto");
  var botaoFechado = document.getElementById("fechado");
  var navbar = document.querySelector(".navbar");
  var logo = document.querySelector(".logo");

  botaoAberto.addEventListener("click", function () {
    navbar.classList.toggle("visivel");
    logo.classList.add("sem-logo");
  });

  botaoFechado.addEventListener("click", function () {
    navbar.classList.remove("visivel"); 
    logo.style.display = "block";
  });
});
