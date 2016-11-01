$(function() {
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
    $("body").attr("data-current-theme", $(this).attr("data-theme-key"));
    $("body").removeClass('theme-select-is-active');
    $("body").addClass('about-this-design-is-active');
  });

  $(".trigger-theme-select").on("click", function() {
    $("body").addClass('theme-select-is-active');
    $("body").removeClass('about-this-design-is-active');
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
    $("body").attr("data-current-theme", $(this).attr("data-theme-key"));
    $("body").addClass('about-this-design-is-active');
  });

  $(".about-this-design-close").on("click", function() {
    $("body").removeClass('about-this-design-is-active');
  });
});
