(function() {
  'use strict';

  function decoder(dict) {
    if (!dict) {
      throw new Error('dict is required');
    }
    
    return function(bundleName) {
      return function(textCode) {
        return dict[bundleName][textCode];
      }
    }
  }
  
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = decoder;
  } else {
    window.decoder = decoder;
  }
})();
