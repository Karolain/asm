'use strict';
let gulp = require('gulp');
let watch = require('gulp-watch');
let config = require('./config');

module.exports = function (singleRun) {
    return function () {
        if (!singleRun) {
            watch(config.resource, () => copyResources());
        }
        return copyResources();

        function copyResources() {
            // gulp.src(config.base + '/**/*.html').pipe(gulp.dest(config.destination));
            gulp.src(config.base + '/resources/fonts/**/*.*').pipe(gulp.dest(config.destination + '/resources/fonts'));
            gulp.src(config.base + '/resources/images/**/*.*').pipe(gulp.dest(config.destination+ '/resources/images'));
        }

    }
};