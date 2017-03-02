$(function() {

  if (Modernizr.touchevents) {
    actionString = 'Tap on a letter of my name.'
  } else {
    actionString = 'Click on a letter of my name.'
  }

  document.querySelector(".my-name-bottom").textContent = actionString;

  if (sessionStorage.getItem('theme') == null) {
    sessionStorage.setItem('theme', 'default');
  };

  if (sessionStorage.getItem('theme') !== 'default') {
    document.body.classList.remove('first-time');
    document.body.classList.remove('theme-select-is-active');
  };

  document.body.dataset.currentTheme = sessionStorage.getItem('theme');

  document.querySelector('link[rel="icon"]')
    .setAttribute('href', "img/favicon-"+sessionStorage.getItem('theme')+".png");

  var changeTheme = function(newTheme) {
      document.body.dataset.currentTheme = newTheme;
      document.querySelector('link[rel="icon"]')
        .setAttribute('href', "img/favicon-"+newTheme+".png");
      sessionStorage.setItem('theme', newTheme);
  };

  $(".theme-select a").on("mouseenter", function() {
    newTheme = $(this).attr('data-theme-key');
    $(".theme-select .tagline-bottom").text($(this).attr("data-theme-desc"));
    $(".theme-select .tagline-top").text($(this).attr("data-alex-desc"));
    $("body").removeClass("first-time");
    changeTheme(newTheme);
  });

  $(".theme-select").on('mouseleave', function() {
    if ($('body').hasClass('first-time')) {
    } else {
      $("body").removeClass('theme-select-is-active');
    }
  });

  $(".theme-select a").on("click", function() {
    var newTheme = $(this).attr("data-theme-key");
    changeTheme(newTheme);
    $("body").removeClass('theme-select-is-active');
  });

  $("body").on("click", ".trigger-theme-select", function() {
    $("body").addClass('theme-select-is-active');
    $('.theme-select a').removeClass('is-active');
    $(".theme-select .tagline-top").text("UI Developer");
    $(".theme-select .tagline-bottom").text(actionString);
  });

  $(".my-name a").on('mouseenter', function() {
    $(".my-name .my-name-bottom").text($(this).attr("data-theme-desc"));
    $(".my-name .my-name-top").text($(this).attr("data-alex-desc"));
  });

  $(".my-name a").on('mouseleave', function() {
    $(".my-name .my-name-top").text("UI Developer");
    $(".my-name .my-name-bottom").text(actionString);
  });

  $(".my-name a").on("click", function() {
    var newTheme = $(this).attr("data-theme-key");

    $("body").addClass('transitions-active');

    setTimeout(function() {
      $("body").removeClass('transitions-active');
    }, 1000);

    changeTheme(newTheme);
  });

  $(".about-this-design-show").on("click", function() {
    $("body").toggleClass('about-this-design-is-active');
  });

  $('.content-wrap').on('click', function() {
    $("body").removeClass("first-time theme-select-is-active");
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
