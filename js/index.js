var maxElements = 25;
var colors = ['#F25F5C', '#FFE066', '#247BAO', '#70C1B3'];
var bg = '#50514F';
var display = 'HAYOP KA'.split('');

var createElements = (function() {
  var sections = Array.prototype.slice.call(document.querySelectorAll('section'));
  sections.forEach( function (sectionEl, l) {
    var letter = getLetter(display[l]);
    for (var i = 0; i < maxElements; i++) {
      var el = document.createElement('div');
      if (letter[i] === 1) {
        el.style.background = colors[anime.random(0, 3)];
      }
      else {
        el.style.opacity = 0.0;
      }
      sectionEl.appendChild(el);
    }
    document.body.appendChild(sectionEl);
  });
})();

anime({
  targets: 'div',
  translateX: function() { return anime.random(-6, 6) + 'rem'; },
  translateY: function() { return anime.random(-6, 6) + 'rem'; },
  scale: function() { return anime.random(10, 20) / 10; },
  rotate: function() { return anime.random(-360, 360); },
  delay: function() { return 400 + anime.random(0, 500); },
  duration: function() { return anime.random(1000, 2000); },
  direction: 'alternate'
});


