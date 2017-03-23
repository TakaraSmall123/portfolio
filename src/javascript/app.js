$("h1 span").hover(function(){
       $(this).animate({fontSize: "32px"}, 300)
   }, function() {
      $(this).animate({fontSize: "20"}, 300)  
   })