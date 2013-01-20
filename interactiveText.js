interactiveText = new function () {

    var clickEventList = [];

    var hiddenContainer = null;

    function init() {
      
        // add a div to find the length/height in pixels for the text
        $('body').append('<span class="interactiveText" style="visibility: hidden;display: inline-block; white-space: nowrap;"></span>')
        hiddenContainer = $('.interactiveText');
    }
            
    this.addTextToCanvas = function (context, text, options) {

        var xStart = options["x"];
        var yStart = options["y"];
        var fillStyle = options['fillstyle'];
        var font = options['font'];
        var clickEvent = options['onclick'];
        if (fillStyle) {
            context.fillStyle = fillStyle;

        }
        // Here is what I need to do to figure out the height and width of the text based on font and whatnot
        // 1. add a hidden div when the interactiveText class is created
        // 2. make sure I can parse out the font and whatnot from what the canvas expects to what the div expects
        // 3. grab the height and width from the div
        // 4. store a "block" around the text so I know whereabouts the text shoudl be. 
        // 5. need a quick way of checking to see if the item is being interacted with.
        hiddenContainer.css('font', font);
        hiddenContainer.text(text);

        var actualHeight = hiddenContainer.height();
        var actualWidth = hiddenContainer.width();
        
        if (clickEvent) {
            // if first click event added then add the generic event to the canvas
            if (clickEventList.length == 0)
                $(context.canvas).click(function (e) {
                    var x = Math.floor((e.pageX - $("#canvas").offset().left));
                    var y = Math.floor((e.pageY - $("#canvas").offset().top));

                    //TODO: Somehow figure out who is on top eventually
                    for (var i = 0; i < clickEventList.length; i++) {
                        if (clickEventList[i].x0 < x && clickEventList[i].x1 > x &&
                            clickEventList[i].y0 < y && y < clickEventList[i].y1) {

                            clickEventList[i].event(e, clickEventList[i]);
                            break;
                        }
                    }

                });

            // add event to the list
            // change the Y, based on position of the text... assumes normal right now.
            clickEventList.push({
                'x0': xStart, 'x1': actualWidth + xStart, 'y0': yStart - yStart, 'y1': yStart,
                'text': text, 'event': clickEvent
            });
            
        }
        if (font)
            context.font = font;
        context.fillText(text, xStart, yStart);
    }

    $(document).ready(function () { init() });
};