'use strict';

describe('Main', function () {

	beforeEach(function () {
		browser.get('http://localhost:3000');
	});

	it('should say Main in the title', function () {
		expect(browser.getTitle()).toEqual('Main');
	});

});
