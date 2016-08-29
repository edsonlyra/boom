var gulp = require('gulp'),
	clean = require('gulp-clean'),
	less = require('gulp-less'),
	connect = require('gulp-connect');
	// clean = require('gulp-clean');


gulp.task('clean', function() {
 return gulp.src('src/css/**/*')
   .pipe(clean());
});

gulp.task('connect', function(){
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('less', function(){
    return gulp.src('less/styles.less')
    .pipe(less({ errLogToConsole: true}))
    .pipe(gulp.dest('src/css'));

});

gulp.task('livereload', function(){
    gulp.src('src/**/*')
    .pipe(connect.reload());
})

// gulp.task('clean', function() {
//     return gulp.src('css')
//         .pipe(clean());
// });
gulp.task('watch', function(){
    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('src/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'less']);


