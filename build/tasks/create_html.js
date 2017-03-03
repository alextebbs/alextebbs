var gulp         = require('gulp');
var fileinclude = require('gulp-file-include');

function create_html()
{
    return gulp.src('src/html/index.html')
        .pipe(fileinclude({
          prefix: '@',
          basepath: 'src/html/includes/'
        }))
        .pipe(gulp.dest('./www/'))
}

gulp.task('create_html', create_html);
module.exports = create_html;
