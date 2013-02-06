organization = new function () {
    var canvasId = "#canvas";
    var headerFont = '16px Arial';
    var textFont = '12px Arial';

    function drawHeader(context, headerText) {
        var canvas = $(canvasId);
        var textInfo = interactiveText.getTextSize(headerText, headerFont);
        var x = (canvas.width() / 2) - (textInfo.width / 2);
        var y = 10;

        interactiveText.addTextToCanvas(context, headerText, { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });
    }

    function drawWhatWhenWhyHow(context, whatText, whenText, whyText, howText) {
        var y = 60;
        var x = 20;
        var maxWidth = 450;
        var headerSize = interactiveText.getTextSize('What is it?', headerFont);
        var sectionPadding = 40;

        interactiveText.addTextToCanvas(context, 'What is it?', { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });
        y += headerSize.height + 10;
        y = drawWrappedText(context, whatText, x, y, maxWidth);

        y += sectionPadding;
        interactiveText.addTextToCanvas(context, 'When to use it?', { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });
        y += headerSize.height + 10;
        y = drawWrappedText(context, whenText, x, y, maxWidth);

        y += sectionPadding;
        interactiveText.addTextToCanvas(context, 'Why use it?', { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });
        y += headerSize.height + 10;
        y = drawWrappedText(context, whyText, x, y, maxWidth);

        y += sectionPadding;
        interactiveText.addTextToCanvas(context, 'How to use it?', { 'x': x, 'y': y, 'fillstyle': 'black', 'font': headerFont });
        y += headerSize.height + 10;
        y = drawWrappedText(context, howText, x, y, maxWidth);

    }

    function drawWrappedText(context, text, x, y, maxWidth) {
        var words = text.split(' ');
        var textInfo = interactiveText.getTextSize(text, textFont);
        var lineHeight = textInfo.height;
        var line = '';

        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;

            if (testWidth > maxWidth) {
                interactiveText.addTextToCanvas(context, line, { 'x': x, 'y': y, 'fillstyle': 'black', 'font': textFont });
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        interactiveText.addTextToCanvas(context, line, { 'x': x, 'y': y, 'fillstyle': 'black', 'font': textFont });

        return y;
    }

    function drawNewsStream(context) {
        drawHeader(context, 'News Stream');
        drawWhatWhenWhyHow(context, 'Used to show time sensitive items in a reverse chronological list.',
            'Use if your site delivers timely content to your users.  It may also be good for it to be personal or "owned" by someone',
            'Use it so people can keep up with your stream easily, since the latest items appear on top.',
            'Display the items in reverse order.  If you can, "push" new items onto the list without the user having to refresh the page');
    }


    function drawFeatureSearchBrowse(context) {
        drawHeader(context, 'Feature, Search, Browse');
        drawWhatWhenWhyHow(context,
            'Used to display the main page of a site or app.  A featured item, capibility to search for item, and a list of browsable items.',
            'If your site has a lot of browsable and searchable items.  Also if there are items you want to feature immedately upon landing on your site.',
            'Searching and browsing both give your users the capibility of finding items either directly via searching, or open-ended via browsing.  Featured items can entice or hook the user immediately without a ton of extra work.',
            'Put the search in a prominent location such as the upper corner & make it stand out.  The features should be important and eye catching (video, images, etc.).  It should take the bulk of the page.  Place selectable features, categories, etc. in the left nav.  When desiging, think of using subcategories and breadcrumbs to help with the design.');
    }

    function drawPicureManager(context) {
        drawHeader(context, "Picture Manager");
        drawWhatWhenWhyHow(context,
            'Used to display a collection of pictures, videos, etc.  May allow editing, commenting, or just viewing.',
            'It is a good way to display visual items that a user will immediately recognize.',
            "Set up two views on the screen.  The first one is a thumbnail grid or list that will allow the user to select an item.  Once selected present the enlarged item either in fullscreen or the majority of the screen.");
    }

    function drawOrganizationHome(context) {
        var y = 10;
        var leftMargin = 200;

        drawHeader(context, 'The Big Picture');
        var textInfo = interactiveText.getTextSize('The Big Picture', headerFont);

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
                        drawFeatureSearchBrowse(context);
                    }),
                    new canvasState('organization_news', [], 'News Stream', function (context) {
                        drawNewsStream(context);
                    }),
                    new canvasState('organization_picture', [], 'Picture Manager', function (context) {
                        drawPicureManager(context);
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