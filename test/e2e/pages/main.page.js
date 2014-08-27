'use strict';

var MainPage = function () {
	browser.get('http://localhost:3000');
};

MainPage.prototype = Object.create({}, {
	title: {
		get: function () {
			return browser.getTitle();
		}
	} 
});

module.exports = MainPage;