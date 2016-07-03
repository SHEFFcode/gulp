var gulp 					= require('gulp');
var uglify 				= require('gulp-uglify');
var livereload 		= require('gulp-livereload');
var concat 				= require('gulp-concat');
var minifyCSS			= require('gulp-minify-css');
var autoprefixer	= require('gulp-autoprefixer');
var plumber				= require('gulp-plumber');
var sourcemaps		= require('gulp-sourcemaps');
var sass 					= require('gulp-sass');
//file paths
var DIST_PATH			= 'public/dist';
var SCRIPTS_PATH 	= 'public/scripts/**/*.js';
var CSS_PATH 			= 'public/css/**/*.css'

// //styles - no scss
// gulp.task('styles', function () {
// 	console.log('starting styles task');
// 	return gulp.src(CSS_PATH)
// 		.pipe(plumber(function (err) {
// 			console.log('Styles task error');
// 			console.log(err);
// 			this.emit('end');
// 		}))
// 		.pipe(sourcemaps.init())
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions', 'ie 8']
// 		}))
// 		.pipe(concat('styles.css'))
// 		.pipe(minifyCSS())
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest(DIST_PATH))
// 		.pipe(livereload());
// });
//styles for scss
gulp.task('styles', function () {
	console.log('starting styles task');
	return gulp.src('public/scss/styles.scss')
		.pipe(plumber(function (err) {
			console.log('Styles task error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie 8']
		}))
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write())
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
	// gulp.watch(CSS_PATH, ['styles']);
	gulp.watch('public/scss/**/*.scss', ['styles']);
});
