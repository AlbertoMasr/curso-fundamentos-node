const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (done) {
    console.log('Construyendo el sitio');
    setTimeout(done, 1200);
});

gulp.task('serve', function (done) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('default', gulp.series('build', 'serve'));