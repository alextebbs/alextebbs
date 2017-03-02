document.addEventListener("DOMContentLoaded", function(event) {

  if (Modernizr.touchevents) {
    actionString = 'Tap on a letter of my name.'
  } else {
    actionString = 'Click on a letter of my name.'
  }

  var body = document.body;

  var Q = document.querySelector.bind(document);
  var QA = document.querySelectorAll.bind(document);

  Q(".my-name-bottom").textContent = actionString;

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
      Q('.theme-select .tagline-bottom').textContent(actionString);
    };
  });

  var nameLinks = QA('.my-name a');
  for (var i = 0; i < nameLinks.length; i++) {
    nameLinks[i].addEventListener('mouseenter', function() {
      Q('.my-name .my-name-top').textContent = this.dataset.themeDesc;
      Q('.my-name .my-name-bottom').textContent = this.dataset.alexDesc;
    });

    nameLinks[i].addEventListener('mouseleave', function() {
      Q('.my-name .my-name-top').textContent = "UI Developer"
      Q('.my-name .my-name-bottom').textContent = actionString;
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
});
