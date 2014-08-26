'use strict';

describe('Admin', function () {

	beforeEach(function () {
		browser.get('http://localhost:3000/#/admin');
	});

	it('should say Admin in the title', function () {
		expect(browser.getTitle()).toEqual('Admin');
	});

	xdescribe('Given there are no registered users', function () {
		it('should be able to register', function () {
			
		});
	});

});
