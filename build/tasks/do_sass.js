var gulp        = require('gulp');
var fileinclude = require('gulp-file-include');
var sass        = require('gulp-sass');
var srcmaps     = require('gulp-sourcemaps');
var cssmin      = require('gulp-cssmin');

function do_sass()
{
  return gulp.src('src/sass/style.sass')
    .pipe(srcmaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(srcmaps.write())
    .pipe(cssmin())
    .pipe(gulp.dest('www/css'))
}

gulp.task('do_sass', do_sass);
module.exports = do_sass;
