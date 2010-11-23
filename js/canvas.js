var VIM = VIM || {};


VIM.canvasEngine = function () {
  function saveRestore(func) {
    that.ctx.save();
    func(that.ctx);
    that.ctx.restore();
  }

  var that = {};

  that.init = function () {
    that.canvas = $('#demo')[0];
    that.width = that.canvas.width;
    that.height = that.canvas.height;
    that.ctx = that.canvas.getContext('2d');
    
    saveRestore(function (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, that.width, that.height);
    });
  };

  that.write = function (args) {
    console.log(args.line, args.text);
  };

  return that;
}();



