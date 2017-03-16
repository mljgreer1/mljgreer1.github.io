$(document).ready(function() {
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    infinite: true,
    accessibility: true,
    arrows: true,
    dots: true,
    touchMove: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          arrows:false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          accessibility: true,
          dots: true,
          touchMove: true,
          useCSS: true
        }
      },
      { 
        breakpoint: 480,
        settings: {
          arrows:false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          accessibility: true,
          dots: true,
          touchMove: true,
          useCSS: true
        }
      }
    ]
  });
});

$(".show").click(function(){
  $(this).parent().find(".poem").slideToggle();
    if ($(this).text() == "less")
       $(this).text("more")
    else
       $(this).text("less");
});

$("#hand").mouseover(function(){
  $(this).attr("src","handclose.png");
})

$("#hand").mouseout(function(){
  $(this).attr("src","handopen.png")
})

$("#submitPoem").click(function(){
  alert("Thank you for submitting your poem, we will respond to you shortly if your poem has successfully made it into one of our issues :)");
});





