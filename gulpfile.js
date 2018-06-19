const gulp = require('gulp');
const fs = require('fs');
const gzip = require('gulp-gzip');
const minifyCss = require('gulp-minify-css');
const minifyHTML = require('gulp-minify-html');
const awspublish = require('gulp-awspublish');

aws = JSON.parse(fs.readFileSync('./aws.json'));
const publisher = awspublish.create(aws);

gulp.task('deploy', () => {
  gulp.src('./client/**').pipe(gulp.dest('./client/dist'))

  //minify html
  gulp.src('/client/dist')
    .pipe(minifyHTML({ conditionals: true, spare: true }))
    .pipe(gulp.dest('/client/dist'));

  const headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

  // gulp.src()
})
