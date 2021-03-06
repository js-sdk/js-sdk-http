(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './status'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./status'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.status);
    global.index = mod.exports;
  }
})(this, function (exports, _status) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'HttpStatus', {
    enumerable: true,
    get: function () {
      return _status.HttpStatus;
    }
  });
});
