'use strict';
let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let autoprefixer = require('gulp-autoprefixer');
let config = require('./config');

module.exports = function (singleRun) {
  return function () {
    if (!singleRun) {
      watch(config.base + '/**/*.scss', () => transformSass());
    }

    return transformSass();

    function transformSass() {
      return gulp.src(config.base + '/styles.scss')
          .pipe(sass({style: 'compressed'}).on('error', sass.logError))
          .pipe(autoprefixer({
            browsers: [
              'last 2 versions',
              'iOS >= 7',
              'Android >= 4',
              'Firefox >= 20',
              'Explorer >= 9',
              'ExplorerMobile >= 11'
            ],
            cascade: false
          }))
          .pipe(gulp.dest(config.destination));
    }
  }
};