var gulp = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');

var sources = ['./bonjour.js'];

console.log(sources);

gulp.task('browserify', function () {
	browserify(sources)
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch(sources, ['browserify']);
});


gulp.task('default', ['browserify']);
