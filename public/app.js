(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {

  $('.fa-bars').click(function () {
    $('.show').slideToggle();
    $('#next').slideToggle();
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVTs7QUFFVixJQUFFLFVBQUYsRUFBYyxLQUFkLENBQW9CLFlBQVU7QUFDOUIsTUFBRSxPQUFGLEVBQVcsV0FBWDtBQUNBLE1BQUUsT0FBRixFQUFXLFdBQVg7QUFDQyxHQUhEOztBQU9BLFVBQVEsR0FBUixDQUFZLGlHQUFaO0FBQ0EsSUFBRSw4QkFBRixFQUFrQyxLQUFsQyxDQUF3QyxZQUFXO0FBQ2pELFFBQUksU0FBUyxRQUFULENBQWtCLE9BQWxCLENBQTBCLEtBQTFCLEVBQWdDLEVBQWhDLEtBQXVDLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUsU0FBUyxRQUFULElBQXFCLEtBQUssUUFBeEcsRUFBa0g7QUFDaEgsVUFBSSxTQUFTLEVBQUUsS0FBSyxJQUFQLENBQWI7QUFDQSxlQUFTLE9BQU8sTUFBUCxHQUFnQixNQUFoQixHQUF5QixFQUFFLFdBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixDQUFoQixDQUFYLEdBQStCLEdBQWpDLENBQWxDO0FBQ0EsVUFBSSxPQUFPLE1BQVgsRUFBbUI7QUFDakIsVUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3RCLHFCQUFXLE9BQU8sTUFBUCxHQUFnQjtBQURMLFNBQXhCLEVBRUcsSUFGSDtBQUdBLGVBQU8sS0FBUDtBQUVEO0FBQ0Y7QUFDRixHQVpEO0FBYUcsQ0F2Qkw7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlFO0FBQ0E7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24oKXsgICAgICBcblxuICAkKCcuZmEtYmFycycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5zaG93Jykuc2xpZGVUb2dnbGUoKTtcbiAgJCgnI25leHQnKS5zbGlkZVRvZ2dsZSgpO1xuICB9KTtcblxuXG5cbiAgY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gbXkgc2l0ZS4gTWFrZSBzdXJlIHRvIGVtYWlsIG1lIGF0IFRha2FyYS5TbWFsbEBnbWFpbC5jb20gaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucy4gJyk7XG4gICQoJ2FbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAgIH0pO1xuXG4vLyAgICQoJy50ZXN0JykuY2xpY2soZnVuY3Rpb24oKSB7XG4vLyAgIC8vICQoJyNzaG93JykuaGlkZSgpO1xuLy8gICBjb25zb2xlLmxvZygneW8sIG5hdicpXG4vLyB9KTtcbi8vICAgICBjb25zb2xlLmxvZygneW8sIG5hdicpXG5cblxuXG4gIC8vIH0pO1xuICAvLyBodHRwOi8vY29kZXBlbi5pby9hbm9uL3Blbi92RWJYd0dcblxuLy8gICB0b2dnbGVfcGhvdG9zIChcIiM2MWJlYjNcIiwgXCIjOTBhMmM2XCIsIDQwMDAsIDIwMDApO1xuLy8gLy8gdG9nZ2xlX2NvbG9yKGNvbG9yMSwgY29sb3IyLCBjeWNsZV90aW1lLCB3YWl0X3RpbWUpIHtcbi8vICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiBmaXJzdF9jb2xvcigpIHtcbi8vICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjE7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoY2hhbmdlX2NvbG9yLCB3YWl0X3RpbWUpO1xuLy8gICAgIH0sIGN5Y2xlX3RpbWUpO1xuXG4vLyAgICAgZnVuY3Rpb24gY2hhbmdlX2NvbG9yKCkge1xuLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yMjtcbi8vICAgICB9XG4vLyAgIH1cblxuXG4vLyAoZnVuY3Rpb24oKSB7XG4vLyAgICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVUYWJsZScpLnN0eWxlLFxuLy8gICAgICAgICBmID0gZmFsc2UsXG4vLyAgICAgICAgIGMxID0gJyMwMDAwMDAnLFxuLy8gICAgICAgICBjMiA9ICcjZmZmZmZmJztcblxuLy8gICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBzLmJhY2tncm91bmRDb2xvciA9IGYgPyBjMSA6IGMyO1xuLy8gICAgICAgICBzLmNvbG9yID0gZiA/IGMyIDogYzE7XG4vLyAgICAgICAgIGYgPSAhZjtcbi8vICAgICB9LCA1MDApO1xuLy8gfSkoKTtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85NzUwMzQ2L2pxdWVyeS10b2dnbGUtZGl2LXN0eWxlLWRpc3BsYXlub25lLXRvLWRpc3BsYXlpbmxpbmVcbi8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvNHJmWUIvNS9cblxuIl19
