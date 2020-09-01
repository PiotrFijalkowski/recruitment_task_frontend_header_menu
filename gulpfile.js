'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('app/src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('app/src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('dev', gulp.parallel('watch'));
