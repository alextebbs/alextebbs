document.addEventListener("DOMContentLoaded", function(event) {

  if (Modernizr.touchevents) {
    var ACTION_STRING = 'Tap on a letter of my name.'
  } else {
    var ACTION_STRING = 'Click on a letter of my name.'
  }

  var body = document.body;

  var Q = document.querySelector.bind(document);
  var QA = document.querySelectorAll.bind(document);

  Q(".my-name-bottom").textContent = ACTION_STRING;
  Q(".tagline-bottom").textContent = ACTION_STRING;

  if (sessionStorage.getItem('theme') == null) {
    sessionStorage.setItem('theme', 'default');
  };

  if (sessionStorage.getItem('theme') !== 'default') {
    body.classList.remove('first-time');
    body.classList.remove('theme-select-is-active');
  };

  body.dataset.currentTheme = sessionStorage.getItem('theme');

  Q('link[rel="icon"]')
    .setAttribute('href', "img/favicon-"+sessionStorage.getItem('theme')+".png");

  var changeTheme = function(newTheme) {
      body.dataset.currentTheme = newTheme;
      Q('link[rel="icon"]')
        .setAttribute('href', "img/favicon-"+newTheme+".png");
      sessionStorage.setItem('theme', newTheme);
  };

  var themeLinks = QA('.theme-select a');
  for (var i = 0; i < themeLinks.length; i++) {
    themeLinks[i].addEventListener('mouseenter', function() {
      newTheme = this.dataset.themeKey;
      themeDesc = this.dataset.themeDesc;
      alexDesc = this.dataset.alexDesc;

      Q('.theme-select .tagline-bottom').textContent = this.dataset.themeDesc;
      Q('.theme-select .tagline-top').textContent = this.dataset.alexDesc;

      body.classList.remove('first-time');
      changeTheme(newTheme);
    });

    themeLinks[i].addEventListener('click', function() {
      var newTheme = this.dataset.themeKey;
      changeTheme(newTheme);
      body.classList.remove('theme-select-is-active');
    });
  };

  Q('.theme-select').addEventListener('mouseleave', function() {
    if (!body.classList.contains('first-time')) {
      body.classList.remove('theme-select-is-active');
    };
  });

  body.addEventListener('click', function(e) {
    if (e.target.classList.contains('trigger-theme-select')) {
      body.classList.add('theme-select-is-active');
      Q('.theme-select .tagline-top').textContent('UI Developer');
      Q('.theme-select .tagline-bottom').textContent(ACTION_STRING);
    };
  });

  Q('.trigger-theme-select').addEventListener('click', function() {
    body.classList.add('theme-select-is-active');
    Q('.theme-select .tagline-top').textContent('UI Developer');
    Q('.theme-select .tagline-bottom').textContent(ACTION_STRING);
  });

  var nameLinks = QA('.my-name a');
  for (var i = 0; i < nameLinks.length; i++) {
    nameLinks[i].addEventListener('mouseenter', function() {
      Q('.my-name .my-name-top').textContent = this.dataset.themeDesc;
      Q('.my-name .my-name-bottom').textContent = this.dataset.alexDesc;
    });

    nameLinks[i].addEventListener('mouseleave', function() {
      Q('.my-name .my-name-top').textContent = "UI Developer"
      Q('.my-name .my-name-bottom').textContent = ACTION_STRING;
    });

    nameLinks[i].addEventListener('click', function() {
      var newTheme = this.dataset.themeKey;

      body.classList.add("transitions-active");

      setTimeout(function() {
        body.classList.remove("transitions-active");
      }, 1000);

      changeTheme(newTheme);
    });
  };

  Q('.about-this-design-show').addEventListener('click', function() {
    body.classList.toggle('about-this-design-is-active');
  });

  Q('.content-wrap').addEventListener('click', function() {
    body.classList.remove('first-time');
    body.classList.remove('theme-select-is-active');
  });

  console.log(
    'Hi Developer, \n\n'+
    'This site is built using purely HTML/CSS/JS. A data attribute on the body \n'+
    'element controls what theme is selected. Other than that attribute, when \n'+
    'switching themes the DOM remains entirely unaffected. All styles for each \n'+
    'theme are scoped under this attribute. Your chosen theme is persisted to \n'+
    'sessionStorage so you can refresh the page. I’m using page.js \n'+
    '(https://visionmedia.github.io/page.js/) to manage history and routing, so \n'+
    'this is a single index.html file. No images are used for any of the visual \n'+
    'effects, everything is done with CSS.'
  )

  page.base('');
  page('*', showActiveLink);
  page('/', showHome);
  page('/about', showAbout);
  page('/portfolio', showPortfolio);
  page('/resume', showResume);
  page('*', notfound);
  page({hashbang:true});

  function showActiveLink(ctx, next) {
    deactiveate();
    a(ctx.path).classList.add('is-active');

    var currentTheme = body.dataset.currentTheme;

    var transitionTime;

    switch(currentTheme) {
      case 'swiss':
        transitionTime = 300;
        break;

      default:
          transitionTime = 150;
    }

    if (ctx.init) {
      next();
      scroll(0,0);
    } else {
      body.classList.add('is-transitioning-out');
      setTimeout(function(){
        body.classList.remove('is-transitioning-out');
        body.classList.add('is-transitioning-in');
        next();
        scroll(0,0);
        setTimeout(function(){
          body.classList.remove('is-transitioning-in');
        }, transitionTime);
      }, transitionTime);
    }
  }

  function showHome(ctx) { render(template('home'), !ctx.init); }
  function showAbout(ctx) { render(template('about'), !ctx.init); }
  function showPortfolio(ctx) { render(template('portfolio'), !ctx.init); }
  function showResume(ctx) { render(template('resume'), !ctx.init); }
  function notfound(ctx) { render(template('not-found'), !ctx.init); }

  function render(html, hide) {
    var el = document.getElementById('content');
    el.innerHTML = html;
  }

  function deactiveate() {
    var el = Q('.main-navigation .is-active')
    if (el) el.classList.remove('is-active');
  }

  function a(href) {
    return Q('[href="' + href + '"]');
  }

  function template(name) {
    return document
      .getElementById(name + '-template')
      .innerHTML;
  }
});
