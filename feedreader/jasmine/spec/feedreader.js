/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed url is defined and not empty', function(){
            expect(allFeeds).toBeDefined();
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]).toBeDefined();
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed name is defined and not empty', function(){
            expect(allFeeds).toBeDefined();
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i]).toBeDefined();
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        //Whether the menu hidden is controlled by class menu-hidden,
        //so if menu-hidden exits in body class, the menu is hidden.
        it('The menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        //When the DOM is loaded, use JQuery's trigger method to simulate click
        //event, then the menu-hidden value should disappear from body class, and
        //the menu appears, vice versa.
        it('The menu changes visibility when the menu icon is clicked', function() {

            //click once
            $(document).ready(function(){
                $('.menu-icon-link').trigger('click');
            });
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //click again
            setTimeout($('.menu-icon-link').trigger('click'), 5000);
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //use beforeEach to start async request.
         beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
         });

         it('there is at least a .entry element within the .feed container', function(done) {
            expect($('.feed').children()[0]).toBeDefined();
            done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var feedEntries_changed;

         //first store the default feed nodes, the use beforeAll to
         //load another feed resource.
         var feedEntries_default = $('.feed').children();

         beforeAll(function(done) {
            loadFeed(1, function() {
                feedEntries_changed = $('.feed').children();
                done();
            });
         });

         it('when a new feed is loaded, the content actually changes.', function(done) {
            expect(feedEntries_changed[0]).toBeDefined();
            expect(feedEntries_default[0]).not.toEqual(feedEntries_changed[0]);
            done();
         });
    });
    
}());
