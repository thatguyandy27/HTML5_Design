state_navigation = new function () {
    var canvasId = "#canvas";
    var headerFont = '16px Arial';
    var textFont = '12px Arial';
	
	 function getStates() {
        return [new canvasState('navigation_home', [
                    new navOption('Clear Entry Points', 'navigation_entrypoints'),
                    new navOption('Menu Page', 'navigation_menu'),
                    new navOption('Pyramid', 'navigation_pyramid'),
                    new navOption('Deep-linked State', 'navigation_linkedstate'),
                    new navOption('Escape Hatch', 'navigation_escapehatch'),
                    new navOption('Fat Menus', 'navigation_fatmenus'),
                    new navOption('Sitemap Footer', 'navigation_sitemapfooter'),
                    new navOption('Sign-in Tools', 'navigation_signin'),
                    new navOption('Sequence Map', 'navigation_sequencemap'),
                    new navOption('Breadcrumbs', 'navigation_breadcrumbs'),
                    new navOption('Annotated Scrollbar', 'navigation_annotatedscroll'),
                    new navOption('Animated Transition', 'navigation_animatedtransition')],
                    'Navigation', function (context) {
                        drawOrganizationHome(context);
                    }),
                    new canvasState('navigation_entrypoints', [], 'Clear Entry Points', function (context) {
                        drawHeaderAsText(context, "Clear Entry Points");
                    }),
                    new canvasState('navigation_menu', [], 'Menu Page', function (context) {
                        drawHeaderAsText(context, "Menu Page");
                    }),
                    new canvasState('navigation_pyramid', [], 'Pyramid', function (context) {
                        drawHeaderAsText(context, "Pyramid");
                    }),
                    new canvasState('navigation_linkedstate', [], 'Deep-linked State', function (context) {
                        drawHeaderAsText(context, "Placeholder for Deep-linked State");
                    }),
                    new canvasState('navigation_escapehatch', [], 'Escape Hatch', function (context) {
                        drawHeaderAsText(context, "Escape Hatch");
                    }),
                    new canvasState('navigation_fatmenus', [], 'Fat Menus', function (context) {
                        drawHeaderAsText(context, "Placeholder for Fat Menus");
                    }),
                    new canvasState('navigation_sitemapfooter', [], 'Sitemap Footer', function (context) {
                        drawHeaderAsText(context, "Placeholder for Sitemap Footer");
                    }),
                    new canvasState('navigation_signin', [], 'Sign-in Tools', function (context) {
                        drawHeaderAsText(context, "Placeholder for Sign-in Tools");
                    }),
                    new canvasState('navigation_sequencemap', [], 'Sequence Map', function (context) {
                        drawHeaderAsText(context, "Placeholder for Sequence Map");
                    }),
                    new canvasState('navigation_breadcrumbs', [], 'Breadcrumbs', function (context) {
                        drawHeaderAsText(context, "Placeholder for Breadcrumbs");
                    }),
                    new canvasState('navigation_annotatedscroll', [], 'Annotated Scrollbar', function (context) {
                        drawHeaderAsText(context, "Placeholder for Annotated Scrollbar");
                    }),
                    new canvasState('navigation_animatedtransition', [], 'Animated Transition', function (context) {
                        drawHeaderAsText(context, "Placeholder for Animated Transition");
                    })];

    }
	return {
        getStates: getStates
    };
};