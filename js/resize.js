function autoSizeText() {
  var el, elements, _i, _len, _results;
  elements = document.querySelectorAll('.resize');
  // console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    // console.log(el.scrollHeight, el.offsetHeight);
    _results.push((function(el) {
      el.style.fontSize = "300px";
      var resizeText, _results1;
      resizeText = function() {
        // console.log(el.style)
        var elNewFontSize;
        // elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        // console.log(el.style.fontSize);
        elNewFontSize = (parseInt(el.style.fontSize.slice(0, -2)) - 1) + 'px';
        // console.log(elNewFontSize);
        el.style.fontSize = elNewFontSize;
        // return $(el).css('font-size', elNewFontSize);
        return 1;
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;
};
