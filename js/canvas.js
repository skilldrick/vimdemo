var VIM = VIM || {};

VIM.canvas = function () {
  var that = {};

  that.init = function () {
    that.canvas = $('#demo')[0];
    that.width = that.canvas.width;
    that.height = that.canvas.height;
    that.ctx = that.canvas.getContext('2d');
    that.ctx.save();
    that.ctx.fillStyle = 'black';
    that.ctx.fillRect(0, 0, that.width, that.height);
    that.ctx.restore();
  }

  return that;
}();

$(document).ready(function () {
  VIM.canvas.init();
});


