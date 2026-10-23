(function () {
  var botao = document.getElementById('alternador-menu');
  var nav = document.getElementById('menu-principal');
  if (!botao || !nav) return;

  function definirEstado(aberto) {
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    nav.classList.toggle('cabecalho__nav--aberto', aberto);
    var rotulo = botao.querySelector('.visualmente-oculto');
    if (rotulo) {
      var t = window.FitocropsI18n && window.FitocropsI18n.t;
      rotulo.textContent = t
        ? t(aberto ? 'nav.close' : 'nav.open')
        : (aberto ? 'Close menu' : 'Open menu');
    }
  }

  botao.addEventListener('click', function () {
    definirEstado(botao.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
      definirEstado(false);
      botao.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) definirEstado(false);
  });

  definirEstado(false);

  document.addEventListener('idioma-alterado', function () {
    definirEstado(botao.getAttribute('aria-expanded') === 'true');
  });
})();
