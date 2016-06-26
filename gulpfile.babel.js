'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import del from 'del';
import gutil, {PluginError} from 'gulp-util';
import assign from 'object-assign';
import watch from 'gulp-watch';
import watchify from 'watchify';
import source from 'vinyl-source-stream';

const dirs = {
    src: 'src',
    dest: 'build'
};

gulp.task('build', ['sass', 'copy'], function () {
    let b = browserify(dirs.src + '/index.js').transform(babelify);
    return bundle(b);
});

gulp.task('sass', () => transformSass());

gulp.task('copy', () => copyFiles());

gulp.task('watch', () => {
	watch(dirs.src + '/**/*.scss', () => transformSass());
	watch([dirs.src + '/**/*.html'], () => copyFiles());

    const b = browserify(dirs.src + '/index.js', assign({debug: true}, watchify.args))
        .transform(babelify);
    const w = watchify(b)
        .on('update', () => bundle(w))
        .on('log', gutil.log);
    return bundle(w);
});

gulp.task('clean', function () {
    del(dirs.dest);
});

gulp.task('default', ['sass', 'copy', 'watch']);

function bundle(b) {
    b.bundle()
        .on('error', e => gutil.log(e.stack))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest(dirs.dest));
}

function transformSass() {
	return gulp.src(dirs.src + '/styles.scss')
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
		.pipe(gulp.dest(dirs.dest));
}

function copyFiles() {
	gulp.src(dirs.src + '/**/*.html').pipe(gulp.dest(dirs.dest));
	gulp.src(dirs.src + '/resources/fonts/**/*.*').pipe(gulp.dest(dirs.dest + '/resources/fonts'));
	gulp.src(dirs.src + '/resources/images/**/*.*').pipe(gulp.dest(dirs.dest + '/resources/images'));
	// gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*.*').pipe(gulp.dest(dirs.dest + '/resources/fonts/bootstrap'));
}
