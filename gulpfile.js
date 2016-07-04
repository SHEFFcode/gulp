var gulp 										= require('gulp');
var uglify 									= require('gulp-uglify');
var livereload 							= require('gulp-livereload');
var concat 									= require('gulp-concat');
var minifyCSS								= require('gulp-minify-css');
var autoprefixer						= require('gulp-autoprefixer');
var plumber									= require('gulp-plumber');
var sourcemaps							= require('gulp-sourcemaps');
var sass 										= require('gulp-sass');
//less plugins
var less										= require('gulp-less');
var LessAutoprefix					= require('less-plugin-autoprefix');
//babel
var babel										= require('gulp-babel');
//handlebars plugins
var handlebars							= require('gulp-handlebars');
var handlebarsLib						= require('handlebars');
var declare									= require('gulp-declare');
var wrap										= require('gulp-wrap');
//Image Compression
var imagemin								= require('gulp-imagemin');
var imageminPngQuant 				= require('imagemin-pngquant');
var imageminJpegRecompress 	= require('imagemin-jpeg-recompress');
//deleting files
var del											= require('del');
//zipping up files
var zip											= require('gulp-zip');
//file paths
var DIST_PATH				= 'public/dist';
var SCRIPTS_PATH 		= 'public/scripts/**/*.js';
var CSS_PATH 				= 'public/css/**/*.css';
var TEMPLATES_PATH	= 'templates/**/*.hbs';
var IMAGES_PATH			= 'public/images/**/*.{png, jpeg, jpg, svg, gif}';
//init calls
var lessAutoprefix = new LessAutoprefix({
	browsers: ['last 2 versions']
});
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
// //styles for scss
// gulp.task('styles', function () {
// 	console.log('starting styles task');
// 	return gulp.src('public/scss/styles.scss')
// 		.pipe(plumber(function (err) {
// 			console.log('Styles task error');
// 			console.log(err);
// 			this.emit('end');
// 		}))
// 		.pipe(sourcemaps.init())
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions', 'ie 8']
// 		}))
// 		.pipe(sass({
// 			outputStyle: 'compressed'
// 		}))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest(DIST_PATH))
// 		.pipe(livereload());
// });
//styles for less
gulp.task('styles', function () {
	console.log('starting styles task');
	return gulp.src('public/less/styles.less')
		.pipe(plumber(function (err) {
			console.log('Styles task error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(less({
			plugins: [lessAutoprefix]
		}))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});
//scripts
gulp.task('scripts', function () {
	console.log('starting srcipts task');
	return gulp.src([SCRIPTS_PATH])
		.pipe(plumber(function (err) {
			console.log('Scripts task error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});
//images
gulp.task('images', function () {
	console.log('starting images task');
	return gulp.src(IMAGES_PATH)
		.pipe(imagemin([
			imagemin.gifsicle(),
			imagemin.jpegtran(),
			imagemin.optipng(),
			imagemin.svgo(),
			imageminPngQuant(),
			imageminJpegRecompress()
		]))
		pipe(gulp.dest(DIST_PATH + '/images'))
});
//templates
gulp.task('templates', function () {
	return gulp.src(TEMPLATES_PATH)
		.pipe(handlebars({
			handlebars: handlebarsLib
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'templates',
			noRedeclare: true
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest(DIST_PATH))
		.pipe(livereload());
});
//deleting
gulp.task('clean', function () {
	return del.sync([
		DIST_PATH
	]);
});
//default
gulp.task('default', ['clean', 'images', 'templates', 'styles', 'scripts'], function () {
	console.log('default task ran');
});
//zipping up
gulp.task('export', function () {
	return gulp.src('public/**/*')
		.pipe(zip('website.zip'))
		.pipe(gulp.dest('./'));
});
//watch
gulp.task('watch', ['default'], function () {
	console.log('running watch task');
	require('./server.js');
	livereload.listen();
	gulp.watch(SCRIPTS_PATH, ['scripts']);
	// gulp.watch(CSS_PATH, ['styles']);
	// gulp.watch('public/scss/**/*.scss', ['styles']);
	gulp.watch('public/less/**/*.less', ['styles']);
	gulp.watch(TEMPLATES_PATH, ['templates']);
});
