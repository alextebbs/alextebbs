var gulp        = require('gulp');
var requireDir  = require('require-dir');
var runSequence  = require('run-sequence');
var browserSync = require('browser-sync').create();

requireDir('./build', { recurse: true })

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www/"
        }
    });

    gulp.watch("src/sass/**/*.{sass,scss}", ['do_sass']).on('change',  browserSync.reload);
    gulp.watch("src/html/**/*.{html,ejs}", ['do_html']).on('change',  browserSync.reload);
    gulp.watch("src/js/**/*.js", ['do_js']).on('change',  browserSync.reload);
    gulp.watch("src/img/**/*", ['do_images']).on('change',  browserSync.reload);
    gulp.watch("src/fonts/**/*", ['do_fonts']).on('change',  browserSync.reload);
});

gulp.task('bsreload', function(cb) {
    browserSync.reload();
    cb();
});

gulp.task('build', function(cb){
    runSequence('do_js','do_images','do_html', 'do_sass', 'do_fonts', cb)
});
gulp.task('run', function(cb){
    runSequence('build', 'browser-sync', cb)
});

gulp.task('default', ['run']);

