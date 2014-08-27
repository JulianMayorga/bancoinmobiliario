'use strict';

var AdminPage = require('./pages/admin.page.js');

describe('Admin', function () {
	var page;

	beforeEach(function () {
		page = new AdminPage();
	});

	it('should say Admin in the title', function () {
		expect(page.title).toEqual('Admin');
	});

});
