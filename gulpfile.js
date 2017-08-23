var gulp = require('gulp')
  , header = require('gulp-header')
  , uglify = require('gulp-uglify')
  , prettify = require('gulp-jsbeautifier')
  , rename = require('gulp-rename')
  , zip = require('gulp-zip')
  , pkg = require('./package.json');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('prettify', function() {
  gulp.src('./colorainbow.js')
      .pipe(header(banner, { pkg: pkg }))
      .pipe(prettify())
      .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function() {
  gulp.src('./colorainbow.js')
      .pipe(rename({ extname: '.min.js' }))
      .pipe(uglify())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('./dist'));
});

gulp.task('release', function() {
  gulp.src('./dist/**/*')
      .pipe(zip(pkg.name + '-' + pkg.version + '.zip'))
      .pipe(gulp.dest('./release'));
});

gulp.task('default', ['prettify', 'uglify']);
