'use strict';
var furl = require('fosify-url')(__dirname);
window.kibe = require('kibe');

kibe({
  'references': function(mode) {
    if (mode === 'debug') {
      return furl('./decode.js');
    }
  }
});