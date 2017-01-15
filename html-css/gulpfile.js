var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', () => {
    return gulp.src('./styles/**/*.scss',{base:'.'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./styles/**/*.scss', ['css']);
});

gulp.task('default', ['sass:watch']);