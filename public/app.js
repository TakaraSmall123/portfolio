(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {

  $('.fa-bars').click(function () {
    $('.show').slideToggle();
    $('#next').slideToggle();
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVTs7QUFFVixJQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDOUIsTUFBRSxPQUFGLEVBQVcsV0FBWDtBQUNBLE1BQUUsT0FBRixFQUFXLFdBQVg7QUFDQyxHQUhEOztBQUtBOzs7QUFHQSxVQUFRLEdBQVIsQ0FBWSxpR0FBWjtBQUNBLElBQUUsOEJBQUYsRUFBa0MsS0FBbEMsQ0FBd0MsWUFBVztBQUNqRCxRQUFJLFNBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixLQUExQixFQUFnQyxFQUFoQyxLQUF1QyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQTRCLEVBQTVCLENBQXZDLElBQTBFLFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBQXhHLEVBQWtIO0FBQ2hILFVBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EsZUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLFVBQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLFVBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixxQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxTQUF4QixFQUVHLElBRkg7QUFHQSxlQUFPLEtBQVA7QUFFRDtBQUNGO0FBQ0YsR0FaRDtBQWFHLENBeEJMOztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJRTtBQUNBOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGZ1bmN0aW9uKCl7ICAgICAgXG5cbiAgJCgnLmZhLWJhcnMnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcuc2hvdycpLnNsaWRlVG9nZ2xlKCk7XG4gICQoJyNuZXh0Jykuc2xpZGVUb2dnbGUoKTtcbiAgfSk7XG5cbiAgLy8gJCgnLlQnKS5jc3Moc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChraXR0ZW56LmpwZyknIDIwMCk7XG5cblxuICBjb25zb2xlLmxvZygnV2VsY29tZSB0byBteSBzaXRlLiBNYWtlIHN1cmUgdG8gZW1haWwgbWUgYXQgVGFrYXJhLlNtYWxsQGdtYWlsLmNvbSBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zLiAnKTtcbiAgJCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gICAgfSk7XG5cbi8vICAgJCgnLnRlc3QnKS5jbGljayhmdW5jdGlvbigpIHtcbi8vICAgLy8gJCgnI3Nob3cnKS5oaWRlKCk7XG4vLyAgIGNvbnNvbGUubG9nKCd5bywgbmF2Jylcbi8vIH0pO1xuLy8gICAgIGNvbnNvbGUubG9nKCd5bywgbmF2JylcblxuXG5cbiAgLy8gfSk7XG4gIC8vIGh0dHA6Ly9jb2RlcGVuLmlvL2Fub24vcGVuL3ZFYlh3R1xuXG4vLyAgIHRvZ2dsZV9waG90b3MgKFwiIzYxYmViM1wiLCBcIiM5MGEyYzZcIiwgNDAwMCwgMjAwMCk7XG4vLyAvLyB0b2dnbGVfY29sb3IoY29sb3IxLCBjb2xvcjIsIGN5Y2xlX3RpbWUsIHdhaXRfdGltZSkge1xuLy8gICAgIHNldEludGVydmFsKGZ1bmN0aW9uIGZpcnN0X2NvbG9yKCkge1xuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yMTtcbi8vICAgICAgICAgc2V0VGltZW91dChjaGFuZ2VfY29sb3IsIHdhaXRfdGltZSk7XG4vLyAgICAgfSwgY3ljbGVfdGltZSk7XG5cbi8vICAgICBmdW5jdGlvbiBjaGFuZ2VfY29sb3IoKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IyO1xuLy8gICAgIH1cbi8vICAgfVxuXG5cbi8vIChmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVRhYmxlJykuc3R5bGUsXG4vLyAgICAgICAgIGYgPSBmYWxzZSxcbi8vICAgICAgICAgYzEgPSAnIzAwMDAwMCcsXG4vLyAgICAgICAgIGMyID0gJyNmZmZmZmYnO1xuXG4vLyAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHMuYmFja2dyb3VuZENvbG9yID0gZiA/IGMxIDogYzI7XG4vLyAgICAgICAgIHMuY29sb3IgPSBmID8gYzIgOiBjMTtcbi8vICAgICAgICAgZiA9ICFmO1xuLy8gICAgIH0sIDUwMCk7XG4vLyB9KSgpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk3NTAzNDYvanF1ZXJ5LXRvZ2dsZS1kaXYtc3R5bGUtZGlzcGxheW5vbmUtdG8tZGlzcGxheWlubGluZVxuLy8gaHR0cDovL2pzZmlkZGxlLm5ldC80cmZZQi81L1xuXG4iXX0=
