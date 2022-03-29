const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');

gulp.task('sass', function(){
    return gulp.src('styles/custom-styles.scss')
        .pipe(sass())
        .pipe(cleanCss({ compatibility: 'i11' }))
        .pipe(gulp.dest('assets'))
})

gulp.task('watch', function() {
    gulp.watch('styles/**/*.scss', gulp.series('sass'))
    themeKit.command('watch', {
        env: 'development',
        'allow-live': true
    })
})