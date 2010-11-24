var VIM = VIM || {};


VIM.canvasEngine = (function () {
  function saveRestore(func) {
    that.ctx.save();
    func(that.ctx);
    that.ctx.restore();
  }

  /* Convenience functions to make the canvas API slightly nicer */

  function font(weight, size, family) {
    if (!weight) {
      weight = 'normal';
    }
    if (!size) {
      size = 12;
    }
    if (!family) {
      family = 'monospace';
    }

    return weight + ' ' + parseInt(size, 10) + 'px ' + family;
  }


  var that = {};

  that.init = function () {
    that.canvas = $('#demo')[0];
    that.width = that.canvas.width;
    that.height = that.canvas.height;
    that.ctx = that.canvas.getContext('2d');
    that.fontsize = 10;
    that.fontwidth = that.fontsize / 1.75;
    that.lineheight = that.fontsize * 1.4;
    that.topmargin = 20;
    that.leftmargin = 20;
    
    saveRestore(function (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, that.width, that.height);
    });
  };

  that.write = function (args) {
    //if more than one argument, call this function on each item
    if (arguments.length > 1) { 
      for (var i = 0; i < arguments.length; i++) {
        that.write(arguments[i]);
      }
    }
    if (!args.indent) {
      args.indent = 0;
    }
    saveRestore(function (ctx) {
      var xoffset = that.leftmargin + args.indent * that.fontwidth;
      var yoffset = (args.line - 1) * that.lineheight + 
                    that.topmargin;
      ctx.fillStyle = 'white';
      ctx.textBaseline = "top";
      ctx.font = font('normal', that.fontsize);
      ctx.fillText(args.text, xoffset, yoffset);
    });
  };

  return that;
})();



