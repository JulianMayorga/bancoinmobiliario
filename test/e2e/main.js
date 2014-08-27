'use strict';

var MainPage = require('./pages/main.page.js');

describe('Main', function () {
	var page;

	beforeEach(function () {
		page = new MainPage();
	});

	it('should say Main in the title', function () {
		expect(page.title).toEqual('Main');
	});

});
