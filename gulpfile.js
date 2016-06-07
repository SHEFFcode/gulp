var gulp 		= require('gulp');
var uglify 		= require('gulp-uglify');
var livereload 	= require('gulp-livereload');
var concat 		= require('gulp-concat');
//file paths
var DIST_PATH		= 'public/dist';
var SCRIPTS_PATH 	= 'public/scripts/**/*.js';
var CSS_PATH 		= 'public/css/**/*.css'

//styles
gulp.task('styles', function () {
	console.log('starting styles task');
	return gulp.src(CSS_PATH)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});
//scripts
gulp.task('scripts', function () {
	console.log('starting srcipts task');

	return gulp.src(['public/css/reset.css', CSS_PATH])
		.pipe(uglify())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});
//images
gulp.task('images', function () {
	console.log('starting images task');
});
//default
gulp.task('default', function () {
	console.log('default task ran');
});

gulp.task('watch', function () {
	console.log('running watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
});