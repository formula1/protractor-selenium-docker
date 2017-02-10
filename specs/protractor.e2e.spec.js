describe('On Protractor page', function () {

    beforeAll(function () {
        browser.get('http://www.protractortest.org/#/')
    });

    it('should have the expected the title', function () {
        return browser.getTitle().then(function(title){
          console.log("title: ", title);
          expect(title).toBe(
	    'Protractor - end-to-end testing for AngularJS'
	  );
        });
    });
});
