// An example configuration file.
var capabilities;
if (process.env.TRAVIS === true) {
  capabilities = {
    'phantomjs.binary.path':'./node_modules/phantomjs/bin/phantomjs',
    'browserName': 'phantomjs'
  };
} else {
  capabilities = {
    'browserName': 'chrome'
  }
}

exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar', // Make use you check the version in the folder

  // Capabilities to be passed to the webdriver instance.
  capabilities: capabilitiesy,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
