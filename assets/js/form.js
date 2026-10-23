(function () {
  var REGRAS = {
    nome:     { obrigatorio: true,  min: 2,  max: 120,  tipo: 'texto' },
    email:    { obrigatorio: true,  max: 180, tipo: 'email' },
    telefone: { obrigatorio: false, max: 40,  tipo: 'texto' },
    empresa:  { obrigatorio: false, max: 120, tipo: 'texto' },
    assunto:  { obrigatorio: true,  tipo: 'selecao' },
    mensagem: { obrigatorio: true,  min: 20, max: 2000, tipo: 'texto' }
  };

  var PADRAO_EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
  var LIMITE_MAILTO = 1900;
  function tx(chave) {
    return window.FitocropsI18n && window.FitocropsI18n.t
      ? window.FitocropsI18n.t(chave)
      : chave;
  }

  function mensagens() {
    return {
      nome: {
        vazio: tx('form.err.nome.vazio'),
        curto: tx('form.err.nome.curto'),
        longo: tx('form.err.nome.longo')
      },
      email: {
        vazio: tx('form.err.email.vazio'),
        formato: tx('form.err.email.formato'),
        longo: tx('form.err.email.longo')
      },
      telefone: {
        longo: tx('form.err.telefone.longo')
      },
      empresa: {
        longo: tx('form.err.empresa.longo')
      },
      assunto: {
        vazio: tx('form.err.assunto.vazio')
      },
      mensagem: {
        vazio: tx('form.err.mensagem.vazio'),
        curto: tx('form.err.mensagem.curto'),
        longo: tx('form.err.mensagem.longo')
      }
    };
  }

  var CAMPOS = ['nome', 'email', 'telefone', 'empresa', 'assunto', 'mensagem'];

  function validar(valores) {
    var erros = {};
    var msgs = mensagens();
    Object.keys(REGRAS).forEach(function (campo) {
      var regra = REGRAS[campo];
      var valor = (valores[campo] || '').trim();
      if (regra.obrigatorio && valor === '') {
        erros[campo] = msgs[campo].vazio;
      } else if (valor !== '' && regra.tipo === 'email' && !PADRAO_EMAIL.test(valor)) {
        erros[campo] = msgs.email.formato;
      } else if (valor !== '' && regra.min && valor.length < regra.min) {
        erros[campo] = msgs[campo].curto;
      } else if (regra.max && valor.length > regra.max) {
        erros[campo] = msgs[campo].longo;
      }
    });
    return { valido: Object.keys(erros).length === 0, erros: erros };
  }

  function codificar(valor) {
    return encodeURIComponent(valor == null ? '' : String(valor));
  }

  function rotuloAssunto(valor) {
    var sel = document.getElementById('campo-assunto');
    if (sel) {
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === valor) return sel.options[i].textContent;
      }
    }
    return valor;
  }

  function corpoMensagem(v) {
    return [
      tx('form.body.nome') + ': ' + v.nome,
      tx('form.body.email') + ': ' + v.email,
      tx('form.body.telefone') + ': ' + (v.telefone || tx('form.body.naotel')),
      tx('form.body.empresa') + ': ' + (v.empresa || tx('form.body.naoemp')),
      tx('form.body.assunto') + ': ' + rotuloAssunto(v.assunto),
      '',
      tx('form.body.mensagem') + ':',
      v.mensagem
    ].join('\r\n');
  }

  function urlMailto(destino, v) {
    return 'mailto:' + encodeURIComponent(destino).replace(/%40/g, '@')
      + '?subject=' + codificar(tx('form.mail.subject') + rotuloAssunto(v.assunto))
      + '&body=' + codificar(corpoMensagem(v));
  }

  function marcadorPendente(valor) {
    return /^\s*\[.*\]\s*$/.test(valor) || /\(A PREENCHER\)/.test(valor);
  }

  window.CJE = {
    validar: validar,
    corpoMensagem: corpoMensagem,
    urlMailto: urlMailto,
    marcadorPendente: marcadorPendente,
    codificar: codificar
  };

  var formulario = document.getElementById('formulario-contato');
  if (!formulario) return;

  var resumo = formulario.querySelector('.form__resumo');
  var areaCopia = document.getElementById('mensagem-copia');
  var blocoCopia = document.getElementById('bloco-copia');
  var botaoCopiar = document.getElementById('botao-copiar');
  var linkManual = document.getElementById('link-envio-manual');
  var ultimoCanal = null;
  var ultimoDisparo = 0;
  var tocados = {};

  function lerValores() {
    var valores = {};
    CAMPOS.forEach(function (campo) {
      var el = document.getElementById('campo-' + campo);
      valores[campo] = el ? el.value : '';
    });
    return valores;
  }

  function limparErro(campo) {
    var el = document.getElementById('campo-' + campo);
    var erro = document.getElementById('erro-' + campo);
    if (el) {
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    }
    if (erro) erro.textContent = '';
  }

  function aplicarErros(erros) {
    CAMPOS.forEach(function (campo) {
      var el = document.getElementById('campo-' + campo);
      var erro = document.getElementById('erro-' + campo);
      if (erros[campo]) {
        if (el) {
          el.setAttribute('aria-invalid', 'true');
          el.setAttribute('aria-describedby', 'erro-' + campo);
        }
        if (erro) erro.textContent = erros[campo];
      } else {
        limparErro(campo);
      }
    });
  }

  function primeiroInvalido(erros) {
    for (var i = 0; i < CAMPOS.length; i++) {
      if (erros[CAMPOS[i]]) {
        return document.getElementById('campo-' + CAMPOS[i]);
      }
    }
    return null;
  }

  function escreverResumo(texto, tipo) {
    if (!resumo) return;
    resumo.textContent = texto;
    resumo.className = 'form__resumo' + (tipo ? ' form__resumo--' + tipo : '');
  }

  function revelarCopia(texto) {
    if (areaCopia) {
      areaCopia.value = texto;
      areaCopia.hidden = false;
    }
    if (blocoCopia) blocoCopia.hidden = false;
  }

  function ocultarCopia() {
    if (blocoCopia) blocoCopia.hidden = true;
    if (linkManual) {
      linkManual.hidden = true;
      linkManual.removeAttribute('href');
    }
  }

  function copiarMensagem() {
    if (!areaCopia) return;
    var texto = areaCopia.value;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(function () {
        escreverResumo(tx('form.ok.copy'), 'sucesso');
      }).catch(selecionarParaCopia);
    } else {
      selecionarParaCopia();
    }
  }

  function selecionarParaCopia() {
    if (!areaCopia) return;
    areaCopia.hidden = false;
    areaCopia.focus();
    areaCopia.select();
    try {
      document.execCommand('copy');
      escreverResumo(tx('form.ok.copy'), 'sucesso');
    } catch (e) {
      escreverResumo(tx('form.warn.select'));
    }
  }

  if (botaoCopiar) {
    botaoCopiar.addEventListener('click', copiarMensagem);
  }

  CAMPOS.forEach(function (campo) {
    var el = document.getElementById('campo-' + campo);
    if (!el) return;
    el.addEventListener('blur', function () {
      if (!tocados[campo] && !el.getAttribute('aria-invalid')) return;
      tocados[campo] = true;
      var resultado = validar(lerValores());
      if (resultado.erros[campo]) {
        var parcial = {};
        parcial[campo] = resultado.erros[campo];
        var atuais = {};
        CAMPOS.forEach(function (c) {
          var erroEl = document.getElementById('erro-' + c);
          if (c === campo) atuais[c] = parcial[c];
          else if (erroEl && erroEl.textContent) atuais[c] = erroEl.textContent;
        });
        aplicarErros(Object.assign({}, atuais, parcial));
      } else {
        limparErro(campo);
      }
    });
    el.addEventListener('input', function () {
      if (el.getAttribute('aria-invalid') === 'true') {
        var resultado = validar(lerValores());
        if (resultado.erros[campo]) {
          var soEste = {};
          soEste[campo] = resultado.erros[campo];
          var mesclados = {};
          CAMPOS.forEach(function (c) {
            var erroEl = document.getElementById('erro-' + c);
            if (c === campo) mesclados[c] = soEste[c];
            else if (document.getElementById('campo-' + c) &&
                     document.getElementById('campo-' + c).getAttribute('aria-invalid') === 'true' &&
                     erroEl && erroEl.textContent) {
              mesclados[c] = erroEl.textContent;
            }
          });
          aplicarErros(mesclados);
        } else {
          limparErro(campo);
        }
      }
    });
  });

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var botao = evento.submitter || document.activeElement;
    var canal = botao && botao.getAttribute ? botao.getAttribute('data-canal') : null;
    if (!canal) return;

    var agora = Date.now();
    if (ultimoCanal === canal && agora - ultimoDisparo < 1000) return;
    ultimoCanal = canal;
    ultimoDisparo = agora;

    var valores = lerValores();
    CAMPOS.forEach(function (campo) { tocados[campo] = true; });
    var resultado = validar(valores);
    aplicarErros(resultado.erros);
    ocultarCopia();

    if (!resultado.valido) {
      var qtd = Object.keys(resultado.erros).length;
      escreverResumo(
        qtd === 1
          ? tx('form.warn.one')
          : tx('form.warn.many').replace('{n}', String(qtd))
      );
      var primeiro = primeiroInvalido(resultado.erros);
      if (primeiro) primeiro.focus();
      return;
    }

    var destinoEmail = formulario.getAttribute('data-email') || '';
    var corpo = corpoMensagem(valores);

    if (canal === 'email') {
      if (marcadorPendente(destinoEmail)) {
        escreverResumo(tx('form.warn.pending'));
        revelarCopia(corpo);
        return;
      }
      var url = urlMailto(destinoEmail, valores);
      if (url.length > LIMITE_MAILTO) {
        var reduzida = urlMailto(destinoEmail, {
          nome: valores.nome,
          email: valores.email,
          telefone: valores.telefone,
          empresa: valores.empresa,
          assunto: valores.assunto,
          mensagem: tx('form.warn.long')
        });
        escreverResumo(tx('form.warn.long'));
        revelarCopia(corpo);
        window.location.href = reduzida;
        return;
      }
      revelarCopia(corpo);
      escreverResumo(tx('form.ok.mail'), 'sucesso');
      window.location.href = url;
    }
  });
})();
