
const gulp   = require('gulp');
const sass = require('gulp-sass');
const concat  = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const notify  = require('gulp-notify');
const plumber = require('gulp-plumber');
const babelify = require('babelify');
const stageTwo = require('babel-preset-stage-2');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const historyFallback = require('connect-history-api-fallback');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './',
            middleware: [
                historyFallback()
            ],
            ghostMode: false,
            notify: false
        }
    })
});

// gulp.task('html', () => {
//     return gulp.src('./src/*.html')
//     .pipe(gulp.dest('./public/'))
//     .pipe(reload({stream: true}));
// });

gulp.task('images', () => {
    return gulp.src('./src/images/*.*')
    .pipe(gulp.dest('./public/images/'))
    .pipe(reload({stream: true}));
});

gulp.task('styles', () => {
    return gulp.src('./src/CSS/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/CSS/'))
    .pipe(reload({stream: true}));
});

gulp.task('es6', () => {
    return browserify('./src/javascript/app.js', { debug: true })
    .transform('babelify', {
        sourceMaps: true,
        presets: [
            'es2015',
            'react',
            'stage-2'
            ]
    })
    .bundle()
    .on('error',notify.onError({
        message: "Error: <%= error.message %>",
        title: 'Error in JS :skull:'
    }))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('./src/CSS/**/*.scss', ['styles']);
    gulp.watch('./src/**/*.js', ['es6']);
    gulp.watch('./src/*.html', ['html']);
});

gulp.task('build', ['images', 'styles', 'es6']);

gulp.task('default', ['images', 'styles', 'es6', 'browser-sync', 'watch']);