function showContent(contentId) {
  // Oculta todos os conteúdos
  var contents = document.querySelectorAll('.content');
  contents.forEach(function (content) {
    content.classList.remove('active');
  });

  // Mostra o conteúdo selecionado
  document.getElementById(contentId).classList.add('active');
}

function Utils() {}
Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    var pageTop = $(window).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  },
};

var Utils = new Utils();
$(window).on('load', addFadeIn());

$(window).scroll(function () {
  addFadeIn(true);
});

function addFadeIn(repeat) {
  var classToFadeIn = '.will-fadeIn';

  $(classToFadeIn).each(function (index) {
    var isElementInView = Utils.isElementInView($(this), false);
    if (isElementInView) {
      if (!$(this).hasClass('fadeInRight') && !$(this).hasClass('fadeInLeft')) {
        if (index % 2 == 0) $(this).addClass('fadeInRight');
        else $(this).addClass('fadeInLeft');
      }
    } else if (repeat) {
      $(this).removeClass('fadeInRight');
      $(this).removeClass('fadeInLeft');
    }
  });
}

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this);

    fetch('https://formsubmit.co/ajax/gabrielfurlanfogaca@gmail.com', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === 'true') {
          // Exibe a mensagem de confirmação
          document.getElementById('confirmationMessage').style.display =
            'block';
          // Fecha o modal após 3 segundos
          setTimeout(() => {
            $('#exampleModalCenter').modal('hide');
          }, 3000); // Aguarda 3 segundos antes de fechar o modal
        } else {
          alert('Houve um erro ao enviar o formulário.');
        }
      })
      .catch((error) => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o formulário.');
      });
  });
