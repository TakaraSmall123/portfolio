(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {

  $('.fa-bars').click(function () {
    $('.nav').toggleClass('show');
    $('.nav').toggleClass('hide');
  });

  //   $('.navBurger').on('click', function(){
  //     $('.bar').toggleClass('active');
  //     $('nav').toggleClass('hide');
  //   });


  // $('.T').css(style.backgroundImage = 'url(kittenz.jpg)' 200);


  console.log('Welcome to my site. Make sure to email me at Takara.Small@gmail.com if you have any questions. ');
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVTs7QUFFVixJQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDOUIsTUFBRSxNQUFGLEVBQVUsV0FBVixDQUFzQixNQUF0QjtBQUNBLE1BQUUsTUFBRixFQUFVLFdBQVYsQ0FBc0IsTUFBdEI7QUFDQyxHQUhEOztBQU1GO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRTs7O0FBR0EsVUFBUSxHQUFSLENBQVksaUdBQVo7QUFDQSxJQUFFLDhCQUFGLEVBQWtDLEtBQWxDLENBQXdDLFlBQVc7QUFDakQsUUFBSSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixLQUF0QixFQUE0QixFQUE1QixDQUF2QyxJQUEwRSxTQUFTLFFBQVQsSUFBcUIsS0FBSyxRQUF4RyxFQUFrSDtBQUNoSCxVQUFJLFNBQVMsRUFBRSxLQUFLLElBQVAsQ0FBYjtBQUNBLGVBQVMsT0FBTyxNQUFQLEdBQWdCLE1BQWhCLEdBQXlCLEVBQUUsV0FBVyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBK0IsR0FBakMsQ0FBbEM7QUFDQSxVQUFJLE9BQU8sTUFBWCxFQUFtQjtBQUNqQixVQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdEIscUJBQVcsT0FBTyxNQUFQLEdBQWdCO0FBREwsU0FBeEIsRUFFRyxJQUZIO0FBR0EsZUFBTyxLQUFQO0FBRUQ7QUFDRjtBQUNGLEdBWkQ7QUFhRyxDQS9CTDs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUU7QUFDQTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpeyAgICAgIFxuXG4gICQoJy5mYS1iYXJzJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XG4gICQoJy5uYXYnKS50b2dnbGVDbGFzcygnaGlkZScpO1xuICB9KTtcblxuXG4vLyAgICQoJy5uYXZCdXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICQoJy5iYXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4vLyAgICAgJCgnbmF2JykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcbi8vICAgfSk7XG5cblxuICAvLyAkKCcuVCcpLmNzcyhzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGtpdHRlbnouanBnKScgMjAwKTtcblxuXG4gIGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIG15IHNpdGUuIE1ha2Ugc3VyZSB0byBlbWFpbCBtZSBhdCBUYWthcmEuU21hbGxAZ21haWwuY29tIGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMuICcpO1xuICAkKCdhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgICB9KTtcblxuLy8gICAkKCcudGVzdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xuLy8gICAvLyAkKCcjc2hvdycpLmhpZGUoKTtcbi8vICAgY29uc29sZS5sb2coJ3lvLCBuYXYnKVxuLy8gfSk7XG4vLyAgICAgY29uc29sZS5sb2coJ3lvLCBuYXYnKVxuXG5cblxuICAvLyB9KTtcbiAgLy8gaHR0cDovL2NvZGVwZW4uaW8vYW5vbi9wZW4vdkViWHdHXG5cbi8vICAgdG9nZ2xlX3Bob3RvcyAoXCIjNjFiZWIzXCIsIFwiIzkwYTJjNlwiLCA0MDAwLCAyMDAwKTtcbi8vIC8vIHRvZ2dsZV9jb2xvcihjb2xvcjEsIGNvbG9yMiwgY3ljbGVfdGltZSwgd2FpdF90aW1lKSB7XG4vLyAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZmlyc3RfY29sb3IoKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IxO1xuLy8gICAgICAgICBzZXRUaW1lb3V0KGNoYW5nZV9jb2xvciwgd2FpdF90aW1lKTtcbi8vICAgICB9LCBjeWNsZV90aW1lKTtcblxuLy8gICAgIGZ1bmN0aW9uIGNoYW5nZV9jb2xvcigpIHtcbi8vICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjI7XG4vLyAgICAgfVxuLy8gICB9XG5cblxuLy8gKGZ1bmN0aW9uKCkge1xuLy8gICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlVGFibGUnKS5zdHlsZSxcbi8vICAgICAgICAgZiA9IGZhbHNlLFxuLy8gICAgICAgICBjMSA9ICcjMDAwMDAwJyxcbi8vICAgICAgICAgYzIgPSAnI2ZmZmZmZic7XG5cbi8vICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbi8vICAgICAgICAgcy5iYWNrZ3JvdW5kQ29sb3IgPSBmID8gYzEgOiBjMjtcbi8vICAgICAgICAgcy5jb2xvciA9IGYgPyBjMiA6IGMxO1xuLy8gICAgICAgICBmID0gIWY7XG4vLyAgICAgfSwgNTAwKTtcbi8vIH0pKCk7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTc1MDM0Ni9qcXVlcnktdG9nZ2xlLWRpdi1zdHlsZS1kaXNwbGF5bm9uZS10by1kaXNwbGF5aW5saW5lXG4vLyBodHRwOi8vanNmaWRkbGUubmV0LzRyZllCLzUvXG5cbiJdfQ==
