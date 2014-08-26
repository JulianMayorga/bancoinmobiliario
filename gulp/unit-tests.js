'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var bowerDeps = wiredep({
  directory: 'app/bower_components',
  exclude: ['bootstrap-sass-official'],
  dependencies: true,
  devDependencies: true
});

var testFiles = bowerDeps.js.concat([
  'app/scripts/**/*.js',
  'test/unit/**/*.js'
]);

var karmaConfig = 'test/karma.conf.js';

gulp.task('test', function() {
  return gulp.src(testFiles)
  .pipe($.karma({
    configFile: karmaConfig,
    action: 'run'
  }))
  .on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  });
});

gulp.task('test-watch', function() {

  return gulp.src(testFiles)
  .pipe($.karma({
    configFile: karmaConfig,
    action: 'watch'
  }))
  .on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  });
});

