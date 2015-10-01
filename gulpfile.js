var gulp 				= require('gulp');
var gutil				= require('gulp-util');
var jshint			= require('gulp-jshint');
var sass				= require('gulp-sass');
var nodemon			=	require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var	watch 			=	require('gulp-watch');

var config = {
	bootstrapDir: './public/vendors/bootstrap-sass',
	publicDir: './public'
};

gulp.task('jshint', function () {
	return gulp.src('public/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
	return gulp.src('source/scss/styles.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: [config.bootstrapDir + '/assets/stylesheets']
		})
			.on('error', sass.logError))
		.pipe(gulp.dest('public/stylesheets'))
});

gulp.task('bs', function () {
	browserSync.init({
		file: ['public/**/*.*'],
		server: 'public/'
	});
})

gulp.task('nodemon', ['sass'], function (cb) {
	var started = false;

	return nodemon({
		script: 'app.js'
	})
	.on('start', function () {
		if (!started){
			cb();
			started = true;
		}
	})
})

// configure which files to watch and what tasks to use on file changes
gulp.task('serve', ['sass', 'jshint', 'nodemon'], function () {
	gulp.watch('public/js/**/*.js', ['jshint']);
	gulp.watch('source/scss/**/*.scss', ['sass']);
	gulp.watch('public/*.html').on('change', browserSync.reload);
});