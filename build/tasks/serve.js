var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function( done ) {

  nodemon({
    script: 'server.js',
    ext: '',
    ignore: [ '' ],
    watch: ['server.js'],
    env: { 'NODE_ENV': 'development' }
  }).on('start', function() {
  });

  browserSync.init({
    proxy: 'localhost:4000',
    port: 9000,
    open: false
  }, done);
});
