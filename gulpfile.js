var gulp = require('gulp'),
	browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'); 

gulp.task('bundle', function(){
	return browserify('src/app.js')
	.transform('babelify', {presets: 'react'})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('static/'));
});

gulp.task('watch', function(){
	var b = browserify({
		entries: ['src/app.js'],
		cache: {}, packageCache: {},
		plugin: ['watchify']
	});

b.on('update', makeBundle);

function makeBundle(){
	b.transform('babelify', {presets:'react'})
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('static/'));
}

makeBundle();

return b;

});