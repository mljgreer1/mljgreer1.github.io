// Logo header 
$("#hand").mouseover( function(){
  $(this).attr("src","handclose.png");
});

$("#hand").mouseout( function(){
  $(this).attr("src","handopen.png")
});

// Show poem button
$(".show").click( function(){
  $(this).parent().find(".poem").slideToggle();
    if ($(this).text() == "less") {
       $(this).text("more");
    } else {
       $(this).text("less");
     }
});

// Events
$(".event").hover( function(){
  $(this).parent().find(".details").fadeToggle();
});

$(".event").mouseover( function(){
  $(this).parent().find("img").css("opacity","0.2");
});

$(".event").mouseout( function(){
  $(this).parent().find("img").css("opacity","1");
});


// Submit buttons
$("#submitPoem").click(function(){
  alert("Thank you for submitting your poem, we will respond to you shortly if your poem has successfully made it into one of our issues :)");
});

$("#submitMessage").click(function(){
  alert("Thank you, we will be in touch shortly");
});
