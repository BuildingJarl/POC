var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  nodemon({
    script: 'server.js',
    ext: '',
    env: { 'NODE_ENV': 'development' }
  })
});
