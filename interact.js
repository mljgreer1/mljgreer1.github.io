$(document).ready(function() {
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    accessibility: true,
    arrows: true,
    dots: true,
    touchMove: true,
    useCSS: true
    //prevArrow and nextArrow settings
  });
});


$(".show").click(function(){
$(this).parent().find(".poem").slideToggle();
if ($(this).text() == "less")
   $(this).text("more")
else
   $(this).text("less");
});


$("#submitPoem").click(function(){
  alert("Thank you for submitting your poem, we will respond to you shortly if your poem has successfully made it into one of our issues :)");
});



