// Lista de URLs das imagens que você deseja exibir
var imagens = [
  "./portal/1.png",
  "./portal/3.png",
  "./portal/10.png",
  "./portal/22.png",
  "./portal/23.png",
  // Adicione mais URLs conforme necessário
];

var index = 0;
var imagemElement = document.getElementById("imagem");

function alterarImagem() {
  imagemElement.src = imagens[index];
  index = (index + 1) % imagens.length;
}

setInterval(alterarImagem, 4000); // 3000 milissegundos = 3 segundos
