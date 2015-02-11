var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var serve      = require('gulp-serve');

var sources = ['./src/bonjour.js', './src/run.js'];

console.log(sources);

gulp.task('browserify', function () {
	browserify({ entries: sources, paths: ['./src'] })
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch(sources, ['browserify']);
});

gulp.task('serve', ['browserify'], serve('dist'));

gulp.task('default', ['browserify']);
