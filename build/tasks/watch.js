var gulp = require('gulp');
var paths = require('../paths');
var nodemon = require('gulp-nodemon');

function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

function restart() {
	nodemon({
    	script: 'server.js',
    	ext: [],
    	env: { 'NODE_ENV': 'development' },
    	nodeArgs: []
  	});
}

gulp.task('watch', ['serve'], function() {
  gulp.watch( paths.source, [ 'build-system', restart ]).on('change', reportChange );
  gulp.watch( paths.html, [ 'build-html', restart ]).on('change', reportChange );
  gulp.watch( paths.style, restart ).on( 'change', reportChange );
});