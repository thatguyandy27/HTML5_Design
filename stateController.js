
stateController = new function () {
    this._contextId = null;
    this._isAnimating = false;

    this.initDrawing = function (contextId) {
        this._contextId = contextId;
        this.drawHome();
    }

    // draws the background or any static text you want to be redrawn
    this.drawBackground = function() {
        var canvas = $("#" + this._contextId);
        var context = this.getDrawingContext();
        context.clearRect(0, 0, canvas.height(), canvas.width());
        html5Drawer.drawRoundedRectangle(
            context,
            {
                'height': canvas.height() - 20,
                'width': canvas.width() - 20,
                'radius': 30,
                'x': 10,
                'y': 10,
                'fillstyle': '#fb7a3c'
            });

      
    }

    this.drawHomeButton = function() {
        interactiveText.addTextToCanvas(this.getDrawingContext(), "Home",
            {
                'x': 20,
                'y': 10,
                'fillstyle': 'black',
                'font': "20px Arial",
                'onclick': function (e, element, index) {
                    stateController.drawHome();
                }
        });
    }

    this.drawLeftNav = function(navOptions) {
        var context = this.getDrawingContext();
        var i = 0;
        var canvas = $("#" + this._contextId);

        for (var opt in navOptions) {
            interactiveText.addTextToCanvas(context, navOptions[opt].text, {
                'x': 20,
                'y': 60 + (i * 17),
                'fillstyle': 'blue',
                'font': "12px Arial",
                'onclick': function (e, element, index) {

                   // this._isAnimating = true;
                    interactiveText.clickEventList = [];
                    interactiveText.clickEventList.push(element);
                    stateController.drawHomeButton();
                    index = 0;
                    setTimeout(function () { stateController.moveText(index, canvas.width() / 2, 60); }, 100);
                    //                            alert(element.text + ' was clicked.');
                }
            });
            i++;
        }
    }

    // draws the initial state
    this.drawHome = function() {
        this.drawBackground();
        this.drawHomeButton();
        this.drawLeftNav([{ 'text': 'Overview' },
            { 'text': 'Organizing Content' },
            { 'text': 'Navigation' },
            { 'text': 'Page Layout' },
            { 'text': 'Lists' },
            { 'text': 'Actions' },
            { 'text': 'Complex Data' },
            { 'text': 'Input' },
            { 'text': 'Social' },
            { 'text': 'Mobile' },
            { 'text': 'Finishing Touches' }
        ]);
    }

    this.getDrawingContext = function () {
        return $("#" + this._contextId ).get(0).getContext("2d");
    }


    this.moveText = function(index, xposition, yposition) {
        // if canceled then just stop
//        if (!this._isAnimating)
  //           return;

        var isComplete = true;
        var rate = 5;
        this.drawBackground();

        if (interactiveText.clickEventList[index].x0 < xposition) {
            // console.log('x: ' +  interactiveText.clickEventList[index].x0);
            interactiveText.clickEventList[index].x0 += 4;
            interactiveText.clickEventList[index].x1 += 4;
            isComplete = false;
        }
        if (interactiveText.clickEventList[index].y0 > yposition) {
            //   console.log('y: ' +  interactiveText.clickEventList[index].y0);
            interactiveText.clickEventList[index].y0 -= 4;
            interactiveText.clickEventList[index].y1 -= 4;
            isComplete = false;
        }

        interactiveText.redrawCanvas(this.getDrawingContext());
        if (!isComplete) {
            this._isAnimating = false;
            setTimeout(function () { stateController.moveText(index, xposition, yposition); }, 30);
        }
    }

};