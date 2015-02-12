var gulp       = require('gulp');
var browserify = require('browserify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var serve      = require('gulp-serve');

var browserSync = require('browser-sync');

var ActiveApps = ['dash', 'bonjour', 'hello'];
var FinalPaths =[];

var sources = ['./src/dash.js', './src/run.js'];

console.log(sources);

gulp.task('browserify', function () {
	browserify({ entries: sources, paths: ['./src', '../bonjour/src'] })
	.transform(reactify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('watch', function() {
	gulp.watch(sources, ['browserify']);
});

gulp.task('serve', ['browserify','watch', 'browser-sync']);
gulp.task('default', ['serve']);
