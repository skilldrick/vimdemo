var VIM = VIM || {};


VIM.textEngine = (function () {

  var that = {};

  that.init = function () {
    VIM.canvasEngine.write({
      line: 1,
      text: 'Blah'
    });
  };

  return that;
})();
