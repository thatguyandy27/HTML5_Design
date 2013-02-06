organization = new function () {
    var canvasId = "#canvas";
    var headerFont = '16px Arial';
    var textFont = '12px Arial';

    function drawOrganizationHome(context) {
        var canvas = $(canvasId);

        var textInfo = interactiveText.getTextSize('The Big Picture', headerFont);
        var x = (canvas.width() / 2) - (textInfo.width / 2);
        var y = 10;
        var leftMargin = 200;

        interactiveText.addTextToCanvas(context, 'The Big Picture', { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });

        y += textInfo.height + 30;
        interactiveText.addTextToCanvas(context, 'Any page in the application should primarily do one of these things:', { 'x': leftMargin, 'y': y, 'fillstyle': 'black',
            'font': textFont
        });
        var textInfo = interactiveText.getTextSize('The', textFont);
        y += textInfo.height + 10;
        interactiveText.addTextToCanvas(context, '1. Show one single thing, such as a map, book, video, or game.', { 'x': leftMargin, 'y': y, 'fillstyle': 'black',
            'font': textFont
        });
        y += textInfo.height + 10;
        interactiveText.addTextToCanvas(context, '2. Show a list or set of things.', { 'x': leftMargin, 'y': y, 'fillstyle': 'black',
            'font': textFont
        });
        y += textInfo.height + 10;
        interactiveText.addTextToCanvas(context, '3. Provide tools to create a thing.', { 'x': leftMargin, 'y': y, 'fillstyle': 'black',
            'font': textFont
        });
        y += textInfo.height + 10;
        interactiveText.addTextToCanvas(context, '4. Facilitate a task.', { 'x': leftMargin, 'y': y, 'fillstyle': 'black',
            'font': textFont
        });


    }

    function getStates() {
        return [new canvasState('organization_home', [
                    new navOption('Feature, Search, Browse', 'organization_feature'),
                    new navOption('News Stream', 'organization_news'),
                    new navOption('Picture Manager', 'organization_picture'),
                    new navOption('Dashboard', 'organization_dashboard'),
                    new navOption('Canvas + Palette', 'organization_canvas'),
                    new navOption('Wizard', 'organization_wizard'),
                    new navOption('Settings', 'organization_settings'),
                    new navOption('Alternative Views', 'organization_altviews'),
                    new navOption('Many Workspaces', 'organization_manyws'),
                    new navOption('Help', 'organization_help')],
                    'Organization', function (context) {
                        drawOrganizationHome(context);
                    }),
                    new canvasState('organization_feature', [], 'Feature, Search, Browse', function (context) {
                        drawHeaderAsText(context, "Placeholder for Feature, search, browse");
                    }),
                    new canvasState('organization_news', [], 'News Stream', function (context) {
                        drawHeaderAsText(context, "Placeholder for News Stream");
                    }),
                    new canvasState('organization_picture', [], 'Picture Manager', function (context) {
                        drawHeaderAsText(context, "Placeholder for Picture Manager");
                    }),
                    new canvasState('organization_dashboard', [], 'Dashboard', function (context) {
                        drawHeaderAsText(context, "Placeholder for Dashboard");
                    }),
                    new canvasState('organization_canvas', [], 'Canvas + Palette', function (context) {
                        drawHeaderAsText(context, "Placeholder for Canvas + Palette");
                    }),
                    new canvasState('organization_wizard', [], 'Wizard', function (context) {
                        drawHeaderAsText(context, "Placeholder for wizard");
                    }),
                    new canvasState('organization_settings', [], 'Settings', function (context) {
                        drawHeaderAsText(context, "Placeholder for Settings");
                    }),
                    new canvasState('organization_altviews', [], 'Alternative Views', function (context) {
                        drawHeaderAsText(context, "Placeholder for Alternative Views");
                    }),
                    new canvasState('organization_manyws', [], 'Many Workspaces', function (context) {
                        drawHeaderAsText(context, "Placeholder for Many Workspaces");
                    }),
                    new canvasState('organization_help', [], 'Help', function (context) {
                        drawHeaderAsText(context, "Placeholder for Help");
                    })];

    }
    return {
        getStates: getStates
    };
};