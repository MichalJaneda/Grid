'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
