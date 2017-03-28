$(function(){      

  $('.fa-bars').click(function(){
  $('.show').slideToggle();
  $('#next').slideToggle();
  });



  console.log('Welcome to my site. Make sure to email me at Takara.Small@gmail.com if you have any questions. ');
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
    });

//   $('.test').click(function() {
//   // $('#show').hide();
//   console.log('yo, nav')
// });
//     console.log('yo, nav')



  // });
  // http://codepen.io/anon/pen/vEbXwG

//   toggle_photos ("#61beb3", "#90a2c6", 4000, 2000);
// // toggle_color(color1, color2, cycle_time, wait_time) {
//     setInterval(function first_color() {
//         document.body.style.backgroundColor = color1;
//         setTimeout(change_color, wait_time);
//     }, cycle_time);

//     function change_color() {
//         document.body.style.backgroundColor = color2;
//     }
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

// http://stackoverflow.com/questions/9750346/jquery-toggle-div-style-displaynone-to-displayinline
// http://jsfiddle.net/4rfYB/5/

