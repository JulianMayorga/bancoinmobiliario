'use strict';

var gulp = require('gulp');

var symlink = require('gulp-symlink');

gulp.task('hook', function () {
  return gulp.src('./pre-commit')
  .pipe(symlink('.git/hooks/'));
});
