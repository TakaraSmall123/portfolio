$(function(){      console.log('yo, this is a test');
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;

      }
    }
  });
  
  // function toggle_color(color1, color2, cycle_time, wait_time) {

  //   setInterval(function first_color() {
  //       document.body.style.backgroundColor = color1;
  //       setTimeout(change_color, wait_time);
  //   }, cycle_time);

  //   function change_color() {
  //       document.body.style.backgroundColor = color2;
  //   }


// (function() {
//     var s = document.getElementById('titleTable').style,
//         f = false,
//         c1 = '#000000',
//         c2 = '#ffffff';

//     setInterval(function() {
//         s.backgroundColor = f ? c1 : c2;
//         s.color = f ? c2 : c1;
//         f = !f;
//     }, 500);
// })();

 }); 