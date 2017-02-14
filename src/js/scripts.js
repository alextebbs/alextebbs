$(function() {

  if (sessionStorage.getItem('theme') == null) {
    sessionStorage.setItem('theme', 'default');
    console.log('thing');
  };

  if (sessionStorage.getItem('theme') !== 'default') {
    $("body").removeClass("first-time theme-select-is-active");
  };

  $('body').attr('data-current-theme', sessionStorage.getItem('theme'));

  $(".theme-select a").hover(
    function() {
      $(".theme-select .tagline-bottom").text($(this).attr("data-theme-desc"));
      $(".theme-select .tagline-top").text($(this).attr("data-alex-desc"));
      $("body").attr("data-current-theme", $(this).attr("data-theme-key"));
      $("body").removeClass("first-time");
      $('.theme-select a').removeClass('is-active');
      $(this).addClass('is-active');
    }, function() {
    }
  );

  $(".theme-select a").on("click", function() {
    var newTheme = $(this).attr("data-theme-key");
    sessionStorage.setItem('theme', newTheme);
    $("body").attr("data-current-theme", newTheme);
    $("body").removeClass('theme-select-is-active');
  });

  $(".trigger-theme-select").on("click", function() {
    $("body").addClass('theme-select-is-active');
    $('.theme-select a').removeClass('is-active');
    $(".theme-select .tagline-top").text("UI Developer");
    $(".theme-select .tagline-bottom").text("Click on a letter of my name.");
  });

  $(".my-name a").hover(
    function() {
      $(".my-name .my-name-bottom").text($(this).attr("data-theme-desc"));
      $(".my-name .my-name-top").text($(this).attr("data-alex-desc"));
    }, function() {
      $(".my-name .my-name-top").text("UI Developer");
      $(".my-name .my-name-bottom").text("Click on a letter of my name.");
    }
  );

  $(".my-name a").on("click", function() {
    var newTheme = $(this).attr("data-theme-key");
    sessionStorage.setItem('theme', newTheme);

    $("body").addClass('transitions-active');
    setTimeout(function() {
      $("body").removeClass('transitions-active');
    }, 1000);

    $("body").attr("data-current-theme", newTheme);
  });

  $(".about-this-design-show").on("click", function() {
    $("body").toggleClass('about-this-design-is-active');
    console.log("why");
  });
});
