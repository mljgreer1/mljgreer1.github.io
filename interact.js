$(document).ready(function() {
  $('.carousel').slick({
    centerMode: true,
    slidesToShow: 3, //Not sure if this is working, but make sure to have odd
    slidesToScroll: 1,
    infinite: true,
    accessibility: true,
    arrows: false,
    dots: false,
    touchMove: true,
    useCSS: true
    //prevArrow and nextArrow settings

  });
});
// $('.center').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

$("header").click(function(){
  $("small").slideDown();
});

$("#submitPoem").click(function(){
  alert("Thank you for submitting your poem, we will respond to you shortly if your poem has successfully made it into one of our issues :)");
});



