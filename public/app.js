(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  console.log('yo, this is a test');
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVTtBQUFPLFVBQVEsR0FBUixDQUFZLG9CQUFaO0FBQ2xCLElBQUUsOEJBQUYsRUFBa0MsS0FBbEMsQ0FBd0MsWUFBVztBQUNoRCxRQUFJLFNBQVMsUUFBVCxDQUFrQixPQUFsQixDQUEwQixLQUExQixFQUFnQyxFQUFoQyxLQUF1QyxLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLEtBQXRCLEVBQTRCLEVBQTVCLENBQXZDLElBQTBFLFNBQVMsUUFBVCxJQUFxQixLQUFLLFFBQXhHLEVBQWtIO0FBQ2hILFVBQUksU0FBUyxFQUFFLEtBQUssSUFBUCxDQUFiO0FBQ0EsZUFBUyxPQUFPLE1BQVAsR0FBZ0IsTUFBaEIsR0FBeUIsRUFBRSxXQUFXLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLFVBQUksT0FBTyxNQUFYLEVBQW1CO0FBQ2pCLFVBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixxQkFBVyxPQUFPLE1BQVAsR0FBZ0I7QUFETCxTQUF4QixFQUVHLElBRkg7QUFHQSxlQUFPLEtBQVA7QUFFRDtBQUNGO0FBQ0YsR0FaRjs7QUFjQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUUsQ0F4Q0YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChmdW5jdGlvbigpeyAgICAgIGNvbnNvbGUubG9nKCd5bywgdGhpcyBpcyBhIHRlc3QnKTtcblx0JCgnYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIFxuICAvLyBmdW5jdGlvbiB0b2dnbGVfY29sb3IoY29sb3IxLCBjb2xvcjIsIGN5Y2xlX3RpbWUsIHdhaXRfdGltZSkge1xuXG4gIC8vICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gZmlyc3RfY29sb3IoKSB7XG4gIC8vICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IxO1xuICAvLyAgICAgICBzZXRUaW1lb3V0KGNoYW5nZV9jb2xvciwgd2FpdF90aW1lKTtcbiAgLy8gICB9LCBjeWNsZV90aW1lKTtcblxuICAvLyAgIGZ1bmN0aW9uIGNoYW5nZV9jb2xvcigpIHtcbiAgLy8gICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjI7XG4gIC8vICAgfVxuXG5cbi8vIChmdW5jdGlvbigpIHtcbi8vICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZVRhYmxlJykuc3R5bGUsXG4vLyAgICAgICAgIGYgPSBmYWxzZSxcbi8vICAgICAgICAgYzEgPSAnIzAwMDAwMCcsXG4vLyAgICAgICAgIGMyID0gJyNmZmZmZmYnO1xuXG4vLyAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIHMuYmFja2dyb3VuZENvbG9yID0gZiA/IGMxIDogYzI7XG4vLyAgICAgICAgIHMuY29sb3IgPSBmID8gYzIgOiBjMTtcbi8vICAgICAgICAgZiA9ICFmO1xuLy8gICAgIH0sIDUwMCk7XG4vLyB9KSgpO1xuXG4gfSk7ICJdfQ==
