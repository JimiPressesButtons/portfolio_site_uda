var gulp = require('gulp'),
	uglify= require('gulp-uglify'),
	minifyCSS=require('gulp-minify-css'),
	browserSync = require('browser-sync').create(),
	rename=require('gulp-rename');
var reload = browserSync.reload;


gulp.task('scripts-watch',function(){
	gulp.src('scripts/**/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('scripts/'));
});

gulp.task('styles-watch',function(){
	gulp.src('styles/**/*.css')
		.pipe(minifyCSS())
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('styles/'));
});

gulp.task('watch',function(){
	gulp.watch('*.html').on('change',reload);
	gulp.watch('scripts/*.js'['scripts-watch']);
	gulp.watch('styles/**/*.css'['styles-watch']);
});

gulp.task('serve',['scripts-watch','styles-watch','watch'],function(){
	browserSync.init({
		notify: false,
		port:9000,
		server:{
			baseDir:"./"
		}
	});
});

// gulp.task('default',['scripts','styles','watch']);
