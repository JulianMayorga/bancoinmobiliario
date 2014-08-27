'use strict';

var AdminPage = function () {
	browser.get('http://localhost:3000/#/admin');
};

AdminPage.prototype = Object.create({}, {
	title: {
		get: function () {
			return browser.getTitle();
		}
	} 
});

module.exports = AdminPage;