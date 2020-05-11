$(document).ready(function() {
  var accordion = $("#accordion");

  var accordionImg = accordion.find("img");
  accordionImg.wrap("<span>");
  accordionImg.each(function() {
    var title = $(this).attr("title");
    $(this).after(title);
    $(this).removeAttr("title");
  });
  var slider = accordion.find("h3");
  var divs = accordion.find("div");

  divs
    .first()
    .siblings("div")
    .slideUp();
  slider.click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(this)
      .next("div")
      .slideDown(1000)
      .siblings("div")
      .slideUp(1000);
  });
});
