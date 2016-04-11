var gulp = require("gulp"),
    webserver = require('gulp-webserver'),
    ecstatic = require('ecstatic'),
    lint = {
        html: require("gulp-htmlhint"),
        css: require("gulp-csslint")
    };

gulp.task('lint-css', function () {
    gulp.src('./public/css/custom.css')
        .pipe(lint.css())
        .pipe(lint.css.reporter());
});

gulp.task('lint-html', function () {
    gulp.src('./public/index.html')
        .pipe(lint.html())
        .pipe(lint.html.reporter());
});

gulp.task('lint', ['lint-html', 'lint-css']);


gulp.task('default', function () {
    gulp.src('./public')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});