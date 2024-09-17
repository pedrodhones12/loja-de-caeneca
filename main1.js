// Lista de URLs das imagens que você deseja exibir
var imagens = [
  "./img2/88.png",
  "./img2/83.png",
  "./img2/4.png",
  "./img2/4.png",
  "./img2/4.png",
  // Adicione mais URLs conforme necessário
];

var index = 0;
var imagemElement = document.getElementById("logo1");

function alterarImagem() {
  imagemElement.src = imagens[index];
  index = (index + 1) % imagens.length;
}

setInterval(alterarImagem, 4000); // 3000 milissegundos = 3 segundos
