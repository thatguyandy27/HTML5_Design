
stateController = new function () {
    var _contextId = null;
    var _isAnimating = false;
    var _stateContainer = null;

    function initDrawing(contextId, stateList) {
        _contextId = contextId;
        createStateContainer(stateList);
        drawHome();
    }
    function createStateContainer(stateList) {
        _stateContainer = {};

        //Add all to the container by ID
        for (var state in stateList) {
            _stateContainer[stateList[state].stateId] = stateList[state]
        }
    }

    // draws the background or any static text you want to be redrawn
    function drawBackground() {
        var canvas = $("#" + _contextId);
        var context = getDrawingContext();
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

    function drawHomeButton() {
        interactiveText.addTextToCanvas(getDrawingContext(), "Home",
            {
                'x': 20,
                'y': 10,
                'fillstyle': 'black',
                'font': "20px Arial",
                'onclick': function (e, element, index) {
                    drawHome();
                }
            });
    }

    function drawLeftNav(navOptions) {
        var context = getDrawingContext();
        var i = 0;
        var canvas = $("#" + _contextId);

        for (var opt in navOptions) {
            interactiveText.addTextToCanvas(context, navOptions[opt].navText, {
                'x': 20,
                'y': 60 + (i * 17),
                'fillstyle': 'blue',
                'font': "12px Arial",
                'onclick': function (e, element, index) {
                    
                    // this._isAnimating = true;
                    interactiveText.clickEventList = [];
                    drawState(navOptions[opt].nextState);
                    //interactiveText.clickEventList.push(element);
                    //drawHomeButton();
                    //index = 0;
                    //setTimeout(function () { moveText(index, canvas.width() / 2, 60); }, 100);
                    //                            alert(element.text + ' was clicked.');
                }
            });
            i++;
        }
    }

    // draws the initial state
    function drawHome() {
        drawBackground();
        drawHomeButton();
        drawState('home');
        //        drawLeftNav([{ 'text': 'Overview' },
        //            { 'text': 'Organizing Content' },
        //            { 'text': 'Navigation' },
        //            { 'text': 'Page Layout' },
        //            { 'text': 'Lists' },
        //            { 'text': 'Actions' },
        //            { 'text': 'Complex Data' },
        //            { 'text': 'Input' },
        //            { 'text': 'Social' },
        //            { 'text': 'Mobile' },
        //            { 'text': 'Finishing Touches' }
        //        ]);
    }

    function getDrawingContext() {
        return $("#" + _contextId).get(0).getContext("2d");
    }


    function moveText(index, xposition, yposition) {
        // if canceled then just stop
        //        if (!this._isAnimating)
        //           return;

        var isComplete = true;
        var rate = 5;
        drawBackground();

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

        interactiveText.redrawCanvas(getDrawingContext());
        if (!isComplete) {
            _isAnimating = false;
            setTimeout(function () { moveText(index, xposition, yposition); }, 30);
        }
        else {
        }
    }

    function updateCrumbTrail(stateId, headerText) {
    }

    function drawState(stateId) {
        var currentState = _stateContainer[stateId];
        if (currentState == null) {
            alert('State ' + stateId + ' does not exist');
            return;
        }
        drawBackground();

        //draw crumb trail somehow.
        updateCrumbTrail(stateId, currentState.headerText);
        if (currentState.leftNavOptions != null)
            drawLeftNav(currentState.leftNavOptions);

        if (currentState.drawCommand != null)
            currentState.drawCommand();
    }

    return {
        initDrawing: initDrawing
    };

};

function navOption(navText, nextState) {
    this.navText = navText;
    this.nextState = nextState;
}

function canvasState(stateId, navOptions, headerText, drawCommand) {
    this.stateId = stateId;
    this.leftNavOptions = navOptions;
    this.headerText = headerText;
    this.drawCommand = drawCommand;
}