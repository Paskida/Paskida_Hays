// Header autoplay carousel - Slick
$(".header__fade").slick({
  infinite: true,
  fade: true,
  cssEase: "linear",
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Nav Bar icons manipulation
$(".nav__links__img__social").mouseover(function (event) {
  let imgsrc = $(this).attr("src");
  let newURL = imgsrc.replace("_wild_watermelon.svg", ".svg");
  $(this).attr("src", newURL);
  event.preventDefault();
});

$(".nav__links__img__social").mouseout(function () {
  let imgsrc = $(this).attr("src");
  let newURL = imgsrc.replace(".svg", "_wild_watermelon.svg");
  $(this).attr("src", newURL);
});

// Navigation open and close
$(".js-nav-close").click(function () {
  $(".navigation").css("visibility", "hidden");
});

$(".js-nav-open").click(function () {
  $(".navigation").css("visibility", "visible");
});
