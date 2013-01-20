interactiveText = new function () {

    var textList = [];
  
    this.addTextToCanvas = new function (context, text, options) {
        var xStart = options["x"];
        var yStart = options["y"];
        var fillStyle = options['fillstyle'];
        var font = options['font'];
        if (fillStyle) {
            context.fillStyle = fillStyle;

        }

        if (font)
            context.font = font;
        context.fillText(text, xStart, yStart);
    }
};