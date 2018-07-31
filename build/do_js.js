var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var js_map = [
    'src/js/modernizr-custom.js',
    'src/components/page/page.js',
    'src/js/scripts.js'
];

function do_js()
{
    gulp.src(js_map)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./www/assets/js/'))

}

gulp.task('do_js', do_js);

module.exports = do_js;
