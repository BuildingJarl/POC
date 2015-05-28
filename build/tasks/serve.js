var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', ['build'], function() {
  nodemon({
    script: 'server.js',
    ext: [],
    env: { 'NODE_ENV': 'development' },
    nodeArgs: []
  });
});