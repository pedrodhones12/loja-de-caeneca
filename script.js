document.addEventListener("DOMContentLoaded", function () {
  const startLoadingLinks = document.querySelectorAll(".start-loading");
  const overlay = document.querySelector(".overlay");

  startLoadingLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o comportamento padrão do link
      overlay.style.display = "block"; // Mostra o overlay branco
      setTimeout(() => {
        overlay.style.display = "none"; // Esconde o overlay
      }, 3000); // Esconde o overlay após 3 segundos (simulando carregamento)
    });
  });
});
