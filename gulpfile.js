var gulp = require('gulp');
var minify = require('gulp-minify');
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('default', ['build']);

gulp.task('build', ['clean'], () => {

  var json = JSON.parse(fs.readFileSync('./package.json'));
  gulp.src('src/*.js')
    .pipe(replace(/@PACKAGE_JSON_VERSION@/, json.version))
    .pipe(replace(/@PACKAGE_DESCRIPTION@/, json.description))
    .pipe(minify({
      ext:{
        min:'.user.js'
      },
      noSource: true,
      preserveComments: 'all'
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', () => {
  gulp.src('dist/*.*', {read: false})
    .pipe(clean());
});
