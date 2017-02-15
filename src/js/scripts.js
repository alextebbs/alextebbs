$(function() {

  if (Modernizr.touchevents) {
    actionString = 'Tap on a letter of my name.'
  } else {
    actionString = 'Click on a letter of my name.'
  }

  $(".my-name .my-name-bottom").text(actionString);

  if (sessionStorage.getItem('theme') == null) {
    sessionStorage.setItem('theme', 'default');
  };

  if (sessionStorage.getItem('theme') !== 'default') {
    $("body").removeClass("first-time theme-select-is-active");
  };

  $('body').attr('data-current-theme', sessionStorage.getItem('theme'));
  $('link[rel="icon"]').attr('href', "img/favicon-"+sessionStorage.getItem('theme')+".png");

  var changeTheme = function(newTheme) {
      $("body").attr("data-current-theme", newTheme);
      $('link[rel="icon"]').attr('href', "img/favicon-"+newTheme+".png");
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

  $(".theme-select a").on("click touchstart", function() {
    var newTheme = $(this).attr("data-theme-key");
    changeTheme(newTheme);
    $("body").removeClass('theme-select-is-active');
  });

  $(".trigger-theme-select").on("click touchstart", function() {
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

  $(".my-name a").on("click touchstart", function() {
    var newTheme = $(this).attr("data-theme-key");

    $("body").addClass('transitions-active');

    setTimeout(function() {
      $("body").removeClass('transitions-active');
    }, 1000);

    changeTheme(newTheme);
  });

  $(".about-this-design-show").on("click touchstart", function() {
    $("body").toggleClass('about-this-design-is-active');
  });
});
