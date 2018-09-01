const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const pump = require('pump');
const del = require('del');
const babel = require('gulp-babel');

gulp.task('default', ['styles', 'scripts', 'copy']);

// task to minify all css files and create source map in dist foler
gulp.task('styles', () => {
    del(['./dist/**/*.+(css|map)']);

    return gulp.src('./src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'));
});

// task to minify all JS files and create source map in dist folder
gulp.task('scripts', (cb) => {
    del(['./dist/js/*.+(js|map)']);

    // plug-in to identify the error occured while minifying JS
    pump([
     gulp.src('./src/js/**/*.js'),
        babel({
            presets: ['env']
        }),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('.'),
        gulp.dest('./dist/js/')
    ],
    cb
  );
});

// task to all other necessary files that do not need to be minified to dist folder
// including image formats, php, json data and html
gulp.task('copy', () => {
    return gulp.src('./src/**/*.+(php|svg|json|png|jpg|pdf|html)')
        .pipe(gulp.dest('./dist/'));
});