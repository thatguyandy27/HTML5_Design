html5Drawer = new function () {

    this.drawRoundedRectangle = function drawRoundedRectangle(context, options) {
        var height = options["height"];
        var width = options["width"];
        var cornerRadius = options["radius"];
        var xStart = options["x"];
        var yStart = options["y"];
        var strokeStyle = options['strokestyle'];
        var fillStyle = options['fillstyle'];

        context.beginPath();

        if (strokeStyle)
            context.strokeStyle = strokeStyle;

    
        // start at x,y
        context.moveTo(xStart + cornerRadius, yStart);
        // Y stays constant, x goes to the width + the start - the corner radius
        context.lineTo(width + xStart - cornerRadius, yStart);
        // arc from that point down to the right side
        context.arcTo(width + xStart, yStart,
            width + xStart, yStart + cornerRadius, cornerRadius);

        // draw right line
        context.lineTo(width + xStart, height - cornerRadius + yStart);

        // arc from right to bottom
        context.arcTo(width + xStart, height + yStart,
            width + xStart - cornerRadius, height
            + yStart, cornerRadius);

        // draw bottom line
        context.lineTo(xStart  +  cornerRadius, height + yStart);

        // draw arc from bottom to left
        context.arcTo(xStart, height + yStart, xStart,
            height + yStart - cornerRadius, cornerRadius);
        
        // draw left line
        context.lineTo(xStart, yStart +  cornerRadius);


        // draw arc from left to top
        context.arcTo(xStart, yStart, xStart + cornerRadius,
            yStart, cornerRadius);


        context.stroke();

        if (fillStyle) {
            context.fillStyle = fillStyle;
            context.fill();
        }
    }

    this.drawText = function drawText(context, text, options) {

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



