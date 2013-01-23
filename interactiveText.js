interactiveText = new function () {

    this.clickEventList = [];

    var hiddenContainer = null;

    function init() {

        // add a div to find the length/height in pixels for the text
        $('body').append('<span class="interactiveText" style="visibility: hidden;display: inline-block; white-space: nowrap;"></span>')
        hiddenContainer = $('.interactiveText');
    }




    function addTextToCanvas(context, textObject) {

        // Here is what I need to do to figure out the height and width of the text based on font and whatnot
        // 1. add a hidden div when the interactiveText class is created
        // 2. make sure I can parse out the font and whatnot from what the canvas expects to what the div expects
        // 3. grab the height and width from the div
        // 4. store a "block" around the text so I know whereabouts the text shoudl be. 
        // 5. need a quick way of checking to see if the item is being interacted with.

        if (textObject.fillstyle) {
            context.fillStyle = textObject.fillstyle;
        }
        if (textObject.font)
            hiddenContainer.css('font', textObject.font);

        hiddenContainer.text(textObject.text);

        var actualHeight = hiddenContainer.height();
        var actualWidth = hiddenContainer.width();

        // set the hight and width of the rectangle incase something has changed
        textObject.x1 = actualWidth + textObject.x0;
        textObject.y1 = actualHeight + textObject.y0;

        console.log("x0: " + textObject.x0 + "; x1: " + textObject.x1 +
            "; y0: " + textObject.y0 + "; y1: " + textObject.y1);

        if (textObject.font)
            context.font = textObject.font;


        context.fillText(textObject.text, textObject.x0, textObject.y1);
    }

    this.redrawCanvas = function (context) {

        for (var i = 0; i < this.clickEventList.length; i++) {
            addTextToCanvas(context, this.clickEventList[i]);
        }
    }


    this.addTextToCanvas = function (context, text, options) {

        var xStart = options["x"];
        var yStart = options["y"];
        var fillStyle = options['fillstyle'];
        var font = options['font'];
        var clickEvent = options['onclick'];



        if (clickEvent) {
            // if first click event added then add the generic event to the canvas
            if (this.clickEventList.length == 0)
                $(context.canvas).click(function (e) {
                    var x = Math.floor((e.pageX - $("#canvas").offset().left));
                    var y = Math.floor((e.pageY - $("#canvas").offset().top));

                    //TODO: Somehow figure out who is on top eventually
                    for (var i = 0; i < interactiveText.clickEventList.length; i++) {
                        if (interactiveText.clickEventList[i].x0 < x && interactiveText.clickEventList[i].x1 > x &&
                            interactiveText.clickEventList[i].y0 < y && y < interactiveText.clickEventList[i].y1) {

                            interactiveText.clickEventList[i].event(e, interactiveText.clickEventList[i], i);
                            break;
                        }
                    }

                });

            // add event to the list
            // change the Y, based on position of the text... assumes normal right now.
            this.clickEventList.push({
                'x0': xStart, 'x1': xStart, 'y0': yStart, 'y1': yStart,
                'text': text, 'event': clickEvent, 'font': font, 'fillstyle': fillStyle
            });

        }

        addTextToCanvas(context, this.clickEventList[this.clickEventList.length - 1]);
    }

    $(document).ready(function () { init() });
};