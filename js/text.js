var VIM = VIM || {};


VIM.textEngine = (function () {

  var that = {};

  that.init = function () {
    VIM.canvasEngine.write(
      { line: 1, text: " _|      _|  _|_|_|  _|      _|      _|_|_|    _|_|_|_|  _|      _|    _|_|    " },
      { line: 2, text: " _|      _|    _|    _|_|  _|_|      _|    _|  _|        _|_|  _|_|  _|    _|  " },
      { line: 3, text: " _|      _|    _|    _|  _|  _|      _|    _|  _|_|_|    _|  _|  _|  _|    _|  " },
      { line: 4, text: "   _|  _|      _|    _|      _|      _|    _|  _|        _|      _|  _|    _|  " },
      { line: 5, text: "     _|      _|_|_|  _|      _|      _|_|_|    _|_|_|_|  _|      _|    _|_|    " },
      { line: 7,  text: "                         _" },
      { line: 8,  text: "                        //" },
      { line: 9,  text: "                       //" },
      { line: 10,  text: "          /\\_/\\       //" },
      { line: 11, text: "          (@.@ )_.-._//" },
      { line: 12, text: "ejm97     > O < .-.  )" },
      { line: 13, text: "              |/   |/" }

    );
  };

  return that;
})();
