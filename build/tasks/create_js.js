var gulp         = require('gulp');
var concat      = require('gulp-concat');
var uglify       = require('gulp-uglify');

var js_map = [
    'src/components/page/page.js',
    'src/js/**',
];

function create_js()
{
    return gulp.src(js_map)
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('www/js/'))
}

gulp.task('create_js', create_js);
module.exports = create_js;
