function showContent(contentId) {
  // Oculta todos os conteúdos
  var contents = document.querySelectorAll('.content');
  contents.forEach(function (content) {
    content.classList.remove('active');
  });

  // Mostra o conteúdo selecionado
  document.getElementById(contentId).classList.add('active');
}
