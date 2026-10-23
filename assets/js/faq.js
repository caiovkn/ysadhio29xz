(function () {
  function itensDe(contêiner) {
    var gatilhos = contêiner.querySelectorAll('.acordeao__gatilho');
    var lista = [];
    for (var i = 0; i < gatilhos.length; i++) {
      var gatilho = gatilhos[i];
      var painelId = gatilho.getAttribute('aria-controls');
      var painel = painelId ? document.getElementById(painelId) : null;
      if (painel) {
        lista.push({ gatilho: gatilho, painel: painel });
      }
    }
    return lista;
  }

  function estaAberto(item) {
    return item.gatilho.getAttribute('aria-expanded') === 'true';
  }

  function definirAberto(item, aberto) {
    item.gatilho.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    if (aberto) {
      item.painel.removeAttribute('hidden');
    } else {
      item.painel.setAttribute('hidden', '');
    }
  }

  function iniciarContêiner(contêiner) {
    var itens = itensDe(contêiner);
    if (!itens.length) return;

    var exclusivo = contêiner.hasAttribute('data-acordeao-exclusivo');

    itens.forEach(function (item) {
      definirAberto(item, false);
      item.gatilho.addEventListener('click', function () {
        var abrir = !estaAberto(item);
        if (exclusivo && abrir) {
          itens.forEach(function (outro) {
            definirAberto(outro, outro === item);
          });
        } else {
          definirAberto(item, abrir);
        }
      });
    });

    contêiner.addEventListener('keydown', function (evento) {
      var alvo = evento.target;
      if (!alvo.classList || !alvo.classList.contains('acordeao__gatilho')) return;

      var tecla = evento.key;
      if (tecla !== 'ArrowDown' && tecla !== 'ArrowUp' && tecla !== 'Home' && tecla !== 'End') {
        return;
      }

      evento.preventDefault();
      var indice = -1;
      for (var i = 0; i < itens.length; i++) {
        if (itens[i].gatilho === alvo) {
          indice = i;
          break;
        }
      }
      if (indice < 0) return;

      var destino = 0;
      if (tecla === 'ArrowDown') destino = (indice + 1) % itens.length;
      else if (tecla === 'ArrowUp') destino = (indice - 1 + itens.length) % itens.length;
      else if (tecla === 'Home') destino = 0;
      else destino = itens.length - 1;

      itens[destino].gatilho.focus();
    });

    var hash = location.hash ? location.hash.slice(1) : '';
    if (hash) {
      for (var j = 0; j < itens.length; j++) {
        if (itens[j].painel.id === hash || itens[j].gatilho.id === hash) {
          definirAberto(itens[j], true);
          itens[j].gatilho.focus();
          break;
        }
      }
    }
  }

  function iniciar() {
    var conteineres = document.querySelectorAll('[data-acordeao]');
    for (var i = 0; i < conteineres.length; i++) {
      iniciarContêiner(conteineres[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
