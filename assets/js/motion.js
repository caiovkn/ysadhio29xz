(function () {
  var reduzido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CHAVE_INTRO = 'fitocrops-intro';
  var tx = function (k) {
    return window.FitocropsI18n && window.FitocropsI18n.t ? window.FitocropsI18n.t(k) : k;
  };

  function malha() {
    if (document.querySelector('.malha')) return;
    var camada = document.createElement('div');
    camada.className = 'malha';
    camada.setAttribute('aria-hidden', 'true');

    var ceu = document.createElement('div');
    ceu.className = 'malha__ceu';
    var horizonte = document.createElement('div');
    horizonte.className = 'malha__horizonte';
    var grade = document.createElement('div');
    grade.className = 'malha__grade';
    var fileiras = document.createElement('div');
    fileiras.className = 'malha__fileiras';
    var vinheta = document.createElement('div');
    vinheta.className = 'malha__vinheta';

    var NS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'malha__curvas');
    svg.setAttribute('viewBox', '0 0 1440 900');
    svg.setAttribute('preserveAspectRatio', 'none');
    var ondas = [
      [160, 28, 0.013, 0.4, 'rgba(125,255,179,0.28)'],
      [280, 36, 0.01, 1.2, 'rgba(167,139,250,0.22)'],
      [430, 22, 0.016, 2.1, 'rgba(215,180,138,0.24)'],
      [590, 40, 0.009, 0.6, 'rgba(125,255,179,0.16)'],
      [760, 26, 0.014, 1.8, 'rgba(196,181,253,0.2)']
    ];
    for (var w = 0; w < ondas.length; w++) {
      var y0 = ondas[w][0];
      var amp = ondas[w][1];
      var freq = ondas[w][2];
      var fase = ondas[w][3];
      var d = '';
      for (var x = 0; x <= 1440; x += 20) {
        var y = y0 + Math.sin(x * freq + fase) * amp + Math.sin(x * freq * 0.41 + 1) * amp * 0.4;
        d += (x === 0 ? 'M' : 'L') + x + ' ' + y.toFixed(1) + ' ';
      }
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke', ondas[w][4]);
      svg.appendChild(path);
    }

    var canvas = document.createElement('canvas');
    canvas.className = 'malha__polen';

    camada.appendChild(ceu);
    camada.appendChild(grade);
    camada.appendChild(svg);
    camada.appendChild(fileiras);
    camada.appendChild(horizonte);
    camada.appendChild(canvas);
    camada.appendChild(vinheta);
    document.body.insertBefore(camada, document.body.firstChild);

    if (reduzido) return;

    var ctx = canvas.getContext('2d');
    var partes = [];
    var largura = 0;
    var altura = 0;

    function medida() {
      largura = window.innerWidth;
      altura = window.innerHeight;
      canvas.width = largura;
      canvas.height = altura;
    }

    function nascer() {
      partes = [];
      var n = Math.min(80, Math.round(largura / 18));
      for (var i = 0; i < n; i++) {
        partes.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
          r: Math.random() * 1.8 + 0.4,
          vx: (Math.random() - 0.5) * 0.22,
          vy: -0.08 - Math.random() * 0.22,
          c: i % 5 === 0 ? '215,180,138' : (i % 2 ? '125,255,179' : '196,181,253'),
          a: 0.25 + Math.random() * 0.55
        });
      }
    }

    medida();
    nascer();
    window.addEventListener('resize', function () {
      medida();
      nascer();
    });

    var parado = false;
    document.addEventListener('visibilitychange', function () {
      parado = document.hidden;
    });

    function quadro() {
      if (!parado) {
        ctx.clearRect(0, 0, largura, altura);
        for (var i = 0; i < partes.length; i++) {
          var p = partes[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -8) p.y = altura + 8;
          if (p.x < -8) p.x = largura + 8;
          if (p.x > largura + 8) p.x = -8;
          ctx.beginPath();
          ctx.fillStyle = 'rgba(' + p.c + ',' + (p.a * 0.35) + ')';
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = 'rgba(' + p.c + ',' + p.a + ')';
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      window.requestAnimationFrame(quadro);
    }
    window.requestAnimationFrame(quadro);

    if (!window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('scroll', function () {
        var y = window.scrollY || 0;
        svg.style.transform = 'translate3d(0,' + (y * 0.06) + 'px,0)';
        fileiras.style.transform = 'perspective(420px) rotateX(58deg) translate3d(0,' + (y * 0.04) + 'px,0)';
      }, { passive: true });
    }
  }

  function faixas() {
    var secoes = document.querySelectorAll('main .secao');
    for (var i = 0; i < secoes.length; i++) {
      if (secoes[i].classList.contains('secao--hero')) continue;
      secoes[i].classList.add(i % 2 ? 'secao--solo' : 'secao--ceu');
    }
  }

  function cabecalhoSolido() {
    var barra = document.querySelector('.cabecalho');
    if (!barra) return;
    function atualizar() {
      barra.classList.toggle('cabecalho--solido', window.scrollY > 12);
    }
    atualizar();
    window.addEventListener('scroll', atualizar, { passive: true });
  }

  function marcarLuz() {
    var seletor = '.card-servico, .fluxo__item, .botao, .painel, .secao-servico, .geo-item, .demo, .faixa-setores__item, .ficha, .pessoa, .talhao, .diario, .recorte, .chamada, .dor, .entrada, .caule, .metro-card';
    var nos = document.querySelectorAll(seletor);
    for (var i = 0; i < nos.length; i++) nos[i].classList.add('luz');
  }

  function revelar() {
    var seletor = '.hero__conteudo, .secao__intro, .card-servico, .fluxo__item, .geo-item, .secao-servico, .fecho-secao, .bloco-mapa, .acordeao, .vitrine__visual, .mapa-pontos, .nuvem, .demo, .painel, .ficha, .pessoa, .talhao, .diario, .recorte, .chamada, .dor, .entrada, .caule, .indice, .metro-card, .faixa-status';
    var nos = document.querySelectorAll(seletor);
    if (!nos.length) return;

    if (reduzido || !('IntersectionObserver' in window)) {
      for (var i = 0; i < nos.length; i++) nos[i].classList.add('revela--visivel');
      return;
    }

    for (var j = 0; j < nos.length; j++) {
      nos[j].classList.add('revela');
      nos[j].style.setProperty('--atraso', (j % 6) * 70 + 'ms');
    }

    var obs = new IntersectionObserver(function (entradas) {
      for (var k = 0; k < entradas.length; k++) {
        if (entradas[k].isIntersecting) {
          entradas[k].target.classList.add('revela--visivel');
          obs.unobserve(entradas[k].target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    for (var n = 0; n < nos.length; n++) obs.observe(nos[n]);
  }

  function brilho() {
    if (reduzido || window.matchMedia('(pointer: coarse)').matches) return;
    var bola = document.createElement('div');
    bola.className = 'cursor-glow';
    bola.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bola);
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var txp = x;
    var typ = y;
    document.addEventListener('pointermove', function (e) {
      txp = e.clientX;
      typ = e.clientY;
      var alvo = e.target.closest('.luz');
      if (alvo) {
        var r = alvo.getBoundingClientRect();
        alvo.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        alvo.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }
    }, { passive: true });
    function passo() {
      x += (txp - x) * 0.12;
      y += (typ - y) * 0.12;
      bola.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      window.requestAnimationFrame(passo);
    }
    window.requestAnimationFrame(passo);
  }

  function redeIntro(campo) {
    var NS = 'http://www.w3.org/2000/svg';
    var w = 360;
    var h = 260;
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    var nos = [];
    var i;
    for (i = 0; i < 20; i++) {
      var ang = (Math.PI * 2 * i) / 20 - Math.PI / 2;
      var r = 36 + (i % 5) * 22;
      nos.push({ x: w / 2 + Math.cos(ang) * r, y: h / 2 + Math.sin(ang) * r });
    }
    for (i = 0; i < nos.length; i++) {
      var a = nos[i];
      var b = nos[(i + 3) % nos.length];
      var linha = document.createElementNS(NS, 'line');
      linha.setAttribute('x1', a.x.toFixed(1));
      linha.setAttribute('y1', a.y.toFixed(1));
      linha.setAttribute('x2', b.x.toFixed(1));
      linha.setAttribute('y2', b.y.toFixed(1));
      linha.setAttribute('stroke', 'rgba(167,139,250,0.28)');
      linha.setAttribute('stroke-width', '1');
      linha.style.opacity = '0';
      linha.style.animation = 'nasce-ponto 700ms ' + (80 + i * 40) + 'ms ease forwards';
      svg.appendChild(linha);
    }
    for (i = 0; i < nos.length; i++) {
      var c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', nos[i].x.toFixed(1));
      c.setAttribute('cy', nos[i].y.toFixed(1));
      c.setAttribute('r', i % 4 === 0 ? 3.2 : 2.2);
      c.setAttribute('fill', '#A78BFA');
      c.style.opacity = '0';
      c.style.animation = 'nasce-ponto 620ms ' + (i * 35) + 'ms ease forwards';
      svg.appendChild(c);
    }
    campo.innerHTML = '';
    campo.appendChild(svg);
  }

  function escreverMarca(el, texto, feito) {
    if (!el) { if (feito) feito(); return; }
    el.textContent = '';
    el.classList.add('intro__marca--pronta');
    if (reduzido) {
      el.textContent = texto;
      if (feito) feito();
      return;
    }
    var i = 0;
    var t = window.setInterval(function () {
      i += 1;
      el.textContent = texto.slice(0, i);
      if (i >= texto.length) {
        window.clearInterval(t);
        if (feito) feito();
      }
    }, 70);
  }

  function fecharIntro(caixa) {
    if (!caixa || caixa.classList.contains('intro--sai')) return;
    caixa.classList.add('intro--sai');
    window.setTimeout(function () {
      caixa.setAttribute('hidden', '');
      document.documentElement.classList.remove('intro-aberta');
      document.documentElement.classList.add('intro-vista');
    }, 640);
    try { sessionStorage.setItem(CHAVE_INTRO, '1'); } catch (e) {}
  }

  function intro() {
    var caixa = document.getElementById('intro');
    if (!caixa) return;

    var jaViu = document.documentElement.classList.contains('intro-vista');
    try { jaViu = jaViu || sessionStorage.getItem(CHAVE_INTRO) === '1'; } catch (e1) {}

    if (reduzido || jaViu) {
      caixa.setAttribute('hidden', '');
      document.documentElement.classList.remove('intro-aberta');
      document.documentElement.classList.add('intro-vista');
      return;
    }

    document.documentElement.classList.add('intro-aberta');
    caixa.removeAttribute('hidden');
    var campo = caixa.querySelector('.intro__campo');
    if (campo) redeIntro(campo);
    var marca = caixa.querySelector('.intro__marca');
    window.setTimeout(function () { escreverMarca(marca, 'FITOCROPS'); }, 420);

    var pular = caixa.querySelector('.intro__pular');
    if (pular) pular.addEventListener('click', function () { fecharIntro(caixa); });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && !caixa.hasAttribute('hidden')) fecharIntro(caixa);
    });
    window.setTimeout(function () { fecharIntro(caixa); }, 2600);
  }

  function idioma() {
    var main = document.getElementById('conteudo');
    if (!main) return;
    document.addEventListener('idioma-alterado', function () {
      main.classList.add('conteudo--troca');
      window.setTimeout(function () { main.classList.remove('conteudo--troca'); }, 280);
    });
  }

  function contar() {
    var nos = document.querySelectorAll('[data-conta]');
    if (!nos.length) return;
    function rodar(el) {
      var fim = parseInt(el.getAttribute('data-conta'), 10);
      if (isNaN(fim)) return;
      if (reduzido || fim > 99) { el.textContent = String(fim); return; }
      var ini = 0;
      var dur = 900;
      var t0 = null;
      function passo(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        var ease = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(ini + (fim - ini) * ease));
        if (p < 1) window.requestAnimationFrame(passo);
      }
      window.requestAnimationFrame(passo);
    }
    if (!('IntersectionObserver' in window)) {
      for (var a = 0; a < nos.length; a++) rodar(nos[a]);
      return;
    }
    var obs = new IntersectionObserver(function (ents) {
      for (var i = 0; i < ents.length; i++) {
        if (ents[i].isIntersecting) {
          rodar(ents[i].target);
          obs.unobserve(ents[i].target);
        }
      }
    }, { threshold: 0.4 });
    for (var n = 0; n < nos.length; n++) obs.observe(nos[n]);
  }

  var demoTimer = 0;

  function limparDemo(caixa) {
    if (demoTimer) window.clearTimeout(demoTimer);
    var msgs = caixa.querySelectorAll('.demo__msg');
    for (var i = 0; i < msgs.length; i++) {
      msgs[i].setAttribute('hidden', '');
      msgs[i].textContent = '';
    }
  }

  function digitar(el, texto, depois) {
    el.removeAttribute('hidden');
    if (reduzido) {
      el.textContent = texto;
      if (depois) depois();
      return;
    }
    var i = 0;
    el.innerHTML = '<span class="demo__cursor"></span>';
    function passo() {
      i += 1;
      el.innerHTML = texto.slice(0, i) + '<span class="demo__cursor"></span>';
      if (i < texto.length) {
        demoTimer = window.setTimeout(passo, 18 + Math.random() * 22);
      } else {
        el.textContent = texto;
        if (depois) demoTimer = window.setTimeout(depois, 700);
      }
    }
    passo();
  }

  function demo() {
    var caixa = document.getElementById('demo-ia');
    if (!caixa) return;
    var inEl = caixa.querySelector('[data-demo="in"]');
    var outEl = caixa.querySelector('[data-demo="out"]');
    if (!inEl || !outEl) return;

    var ciclo = [
      ['demo.in1', 'demo.out1'],
      ['demo.in2', 'demo.out2']
    ];
    var passo = 0;

    function rodada() {
      limparDemo(caixa);
      var par = ciclo[passo % ciclo.length];
      passo += 1;
      digitar(inEl, tx(par[0]), function () {
        digitar(outEl, tx(par[1]), function () {
          demoTimer = window.setTimeout(rodada, 2200);
        });
      });
    }

    rodada();
    document.addEventListener('idioma-alterado', function () {
      passo = 0;
      rodada();
    });
  }

  function diario() {
    var caixa = document.querySelector('[data-diario]');
    if (!caixa) return;
    var lista = caixa.querySelector('.diario__lista');
    if (!lista) return;
    var chaves = ['log.1', 'log.2', 'log.3', 'log.4', 'log.5', 'log.6', 'log.7', 'log.8'];
    var i = 0;
    var timer = 0;

    function linha() {
      var li = document.createElement('li');
      li.textContent = tx(chaves[i % chaves.length]);
      lista.appendChild(li);
      while (lista.children.length > 6) lista.removeChild(lista.firstChild);
      i += 1;
    }

    function zerar() {
      if (timer) window.clearInterval(timer);
      lista.innerHTML = '';
      i = 0;
      if (reduzido) {
        for (var k = 0; k < chaves.length; k++) linha();
        return;
      }
      linha();
      timer = window.setInterval(linha, 1700);
    }

    zerar();
    document.addEventListener('idioma-alterado', zerar);
  }

  function metros() {
    var nos = document.querySelectorAll('[data-metro]');
    if (!nos.length) return;

    function encher(el) {
      var v = parseFloat(el.getAttribute('data-metro'));
      if (isNaN(v)) return;
      el.style.width = Math.max(0, Math.min(100, v)) + '%';
    }

    if (reduzido || !('IntersectionObserver' in window)) {
      for (var a = 0; a < nos.length; a++) encher(nos[a]);
      return;
    }

    var obs = new IntersectionObserver(function (ents) {
      for (var i = 0; i < ents.length; i++) {
        if (ents[i].isIntersecting) {
          encher(ents[i].target);
          obs.unobserve(ents[i].target);
        }
      }
    }, { threshold: 0.4 });

    for (var n = 0; n < nos.length; n++) obs.observe(nos[n]);
  }

  function iniciar() {
    malha();
    faixas();
    document.documentElement.classList.add('pagina-pronta');
    cabecalhoSolido();
    marcarLuz();
    revelar();
    brilho();
    intro();
    idioma();
    contar();
    demo();
    diario();
    metros();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
