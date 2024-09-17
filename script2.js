document.addEventListener("DOMContentLoaded", function () {
  const startLoadingBtn = document.getElementById("startLoading");
  const overlay = document.querySelector(".overlay");

  startLoadingBtn.addEventListener("click", function () {
    overlay.style.display = "block"; // Mostra o overlay branco
    setTimeout(() => {
      overlay.style.display = "none"; // Esconde o overlay
    }, 10000); // Esconde o overlay após 3 segundos (simulando carregamento)
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const startLoadingBtn = document.getElementById("startLoading2");
  const overlay = document.querySelector(".overlay2");

  startLoadingBtn.addEventListener("click", function () {
    overlay.style.display = "block"; // Mostra o overlay branco
    setTimeout(() => {
      overlay.style.display = "none"; // Esconde o overlay
    }, 10000); // Esconde o overlay após 3 segundos (simulando carregamento)
  });
});
