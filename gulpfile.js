var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var embedTemplates = require('gulp-angular-embed-templates');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
    gulp.src('src/ld-table.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./dist'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init())
            .pipe(uglify({ mangle: false }))
        .pipe(sourcemaps.write('./', { includeContent: false }))
        .pipe(gulp.dest('./dist'));
});
