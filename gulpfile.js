"use strict";

var gulp 				= require('gulp');
var jshint			= require('gulp-jshint');
var nodemon			=	require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var	less 				=	require('gulp-less');
var minifyCSS		= require('gulp-minify-css');
var livereload	= require('gulp-livereload');
var path				= require('path');

var config = {
	bootstrapDir: './public/vendors/bootstrap/less',
	publicDir: './public'
};

gulp.task('jshint', function () {
	return gulp.src('public/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task( 'less', function() {
	return gulp.src('./less/**/*.less')
						.pipe(less({
							paths: [path.join(__dirname, config.bootstrapDir)]
						}))
						.pipe(minifyCSS())
						.pipe(gulp.dest('./public/stylesheets'));
})

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('public/js/**/*.js', ['jshint']);
	gulp.watch('less/**/*.less', ['less']);
})

gulp.task('nodemon', ['less'], function () {
	nodemon({
		tasks: ['less'],
		script: 'app.js',
		ext: 'js less',
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('restart', function() {
		console.log('Restarting Server...');
	})
})

// configure which files to watch and what tasks to use on file changes
gulp.task('serve', ['nodemon']);

function exitHandler() { process.exit(0); }
process.once('SIGINT', exitHandler);