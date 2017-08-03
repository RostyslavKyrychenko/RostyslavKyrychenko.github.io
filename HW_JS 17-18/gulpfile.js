var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');
var server = require('gulp-server-livereload');

gulp.task('scripts', function() {
    return gulp.src(['src/js/*.js'])
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest('src'));
});

gulp.task('babel', function() {
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return sass('src/components/main.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('dist/css'));
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('default', function () {
    gulp.start('scripts', 'babel', 'sass', 'webserver', 'pages');
    gulp.watch('src/**/*.js', ['scripts']);
    gulp.watch('src/components/**/*.scss', ['sass']);
});
