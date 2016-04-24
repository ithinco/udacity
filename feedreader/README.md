# Testing steps

####RSS Feeds tests

1. use toBeDefined() to test if each element in allFeeds exist.
2. use length and not.toBe to test if element's url is empty.

####The menu tests

1. Whether the menu hidden is controlled by class menu-hidden,so if menu-hidden exits in body class, the menu is hidden.
2. When the DOM is loaded, use JQuery's trigger method to simulate click event, then the menu-hidden value should disappear from body class, and the menu appears, vice versa.

####Initial Entries tests
1. use beforeEach to start async request.

####New Feed Selection
1. first store the default feed nodes, the use beforeAll to load another feed resource.
