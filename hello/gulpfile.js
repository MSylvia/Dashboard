var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var serve      = require('gulp-serve');

var sources = ['./src/hello.js', './src/run.js'];

console.log(sources);

gulp.task('browserify', function () {
	browserify({ entries: sources, paths: ['./src'] })
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
    gulp.watch(sources, ['browserify']);
});

gulp.task('serve', ['browserify'], serve('public'));

gulp.task('default', ['browserify']);
