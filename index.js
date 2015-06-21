(function() {
  'use strict';

  var notext;
  
  if (window.notext) {
    notext = window.notext;
  } else {
    notext = function(bundleName) {
      return function(textCode) {
        return '::' + bundleName + '.' textCode.toString() + '::';
      }
    };
  }
  
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = notext;
  } else {
    window.notext = notext;
  }
})();
