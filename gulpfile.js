var requireDir = require('require-dir');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./build/tasks', { recurse: true })

var gulp         = require('gulp');
var runSequence  = require('run-sequence');
var fileinclude = require('gulp-file-include');

// Static server
gulp.task('browser-sync', function() {
    var browserSync  = require('browser-sync').create();
    browserSync.init({
        server: {
            baseDir: "./www/"
        },
        startPath: '/'
    });
    gulp.watch("src/sass/**/*.{scss,sass}", ['do_sass']).on('change',  browserSync.reload);
    gulp.watch("src/html/**/*.html", ['create_html']).on('change',  browserSync.reload);
    gulp.watch("src/html/*.html", ['create_html']).on('change',  browserSync.reload);
    gulp.watch("src/js/*.js", ['create_js']).on('change',  browserSync.reload);
    gulp.watch("src/img/*/**", ['copy_images']).on('change',  browserSync.reload);
});

gulp.task('copy_images', function(){
    return gulp.src('src/img/**')
        .pipe(gulp.dest('www/img/'))
});

gulp.task('copy_fonts', function(){
    return gulp.src('src/fonts/**')
        .pipe(gulp.dest('www/fonts/'))
});

gulp.task('build', function(){
    runSequence('create_html', 'copy_images', 'copy_fonts', 'do_sass', 'create_js', 'browser-sync');
});

gulp.task('default',['build']);

