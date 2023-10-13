document.addEventListener("DOMContentLoaded", function () {
  var botao = document.getElementById("botao-navbar");
  var navbar = document.querySelector(".navbar");
  var logo = document.querySelector(".logo");
  var corpoPagina = document.querySelector(".corpo-pagina");

  botao.addEventListener("click", function () {
    if (navbar.classList.contains("visivel")) {
      // Se a classe "visivel" estiver presente no navbar, fecha o navbar, mostra o conteúdo e mostra o corpo da página.
      navbar.classList.remove("visivel");
      logo.style.display = "block";
      corpoPagina.classList.remove("visivel");
    } else {
      // Caso contrário, abre o navbar, oculta o conteúdo e oculta o corpo da página.
      navbar.classList.add("visivel");
      logo.classList.add("sem-logo");
      corpoPagina.classList.add("visivel");
    }
  });
});
