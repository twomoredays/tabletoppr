var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var browserify = require('browserify');
var watchify = require('watchify');


gulp.task('default', function () {
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'))
});