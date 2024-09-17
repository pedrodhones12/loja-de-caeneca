// Função para redirecionar para as páginas (portais) correspondentes
function redirecionarParaPagina(portal) {
  window.location.href = portal;
}

// Adicionar um evento de clique a todos os elementos <div> com a classe "category__card"
const cards = document.querySelectorAll(".category__card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    // Determinar para qual portal redirecionar com base no ID do elemento clicado
    switch (card.id) {
      case "canecas-card":
        redirecionarParaPagina("index2.html");
        break;
      case "almofadas-card":
        redirecionarParaPagina("index3.html");
        break;
      case "capinhas-card":
        redirecionarParaPagina("index4.html");
        break;
      case "chaveiros-card":
        redirecionarParaPagina("index5.html");
        break;
      case "garrafas-card":
        redirecionarParaPagina("index6.html");
        break;
      case "canecas-universitarias-card":
        redirecionarParaPagina("index7.html");
        break;
      default:
        // Redirecionar para um portal padrão se o ID não corresponder a nenhum dos casos anteriores
        redirecionarParaPagina("index2.html"); // Altere para o portal padrão desejado
    }
  });
});
