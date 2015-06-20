(function() {
  'use strict';

  var r;
  
  if (window.r) {
    r = window.r;
  } else {
    r = function(textCode) {
      return '::' + textCode.toString() + '::';
    }
  }
  
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = r;
  } else {
    window.r = r;
  }
})();
