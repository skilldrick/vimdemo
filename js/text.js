var VIM = VIM || {};


VIM.textEngine = (function () {

  var that = {};

  that.init = function () {
    VIM.canvasEngine.write(
      { line: 1, text: 'Hi.' },
      { line: 2, text: 'I mean, Hello, world' },
      { line: 3, text: "Yeah, that's what I meant to say." },
      { line: 4, text: "    * * * * * * *"},
      { line: 5, text: "   * * * * * * *", indent: 1  },
      { line: 6, text: "  * * * * * * *", indent: 2  },
      { line: 7, text: " * * * * * * *", indent: 3  },
      { line: 8, text: "* * * * * * *", indent: 4  }
    );
  };

  return that;
})();
