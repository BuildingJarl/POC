var path = require('path');

var appRoot = 'public/src/';
var outputRoot = 'public/dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'public/styles/**/*.css',
  output: outputRoot,
  sourceMapRelativePath: '../' + appRoot,
  e2eSpecsSrc: 'public/test/e2e/src/*.js',
  e2eSpecsDist: 'public/test/e2e/dist/'
};
