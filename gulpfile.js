// Gulp Flie Nov 5th 2022
const { src } = require("gulp");

const { series, parallel, dest } = require("gulp");

const del = require("del");
const gulp = require("gulp");
const autoPrefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const cache = require("gulp-cache");
const cleanv = require("gulp-clean");
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const dartSass = require("gulp-dart-sass");
const debug = require('gulp-debug');
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const zip = require("gulp-zip");

// notifier.defaults({
//   messages: {
//     sass: "CSS was successfully compiled!",
//     js: "Javascript is ready!",
//     kit: "HTML was delivered!"
//   },
//   prefix: "=====",
//   suffix: "=====",
//   exclusions: ".map"
// });

filesPath = {
    sass: "./src/sass/**/*.scss",
    css: "./src/sass/**/*.scss",
    html: "./src/sass/**/*.html",
    js: "./src/js/**/*.js",
    images: "./src/img/**/*.+(png|jpg|gif|svg)"
  }

  // Sass
  function sassTask(done){
    gulp
    .src(filesPath.sass)
    .pipe(plumber({errorHandler: notify.error}))
    .pipe(sourcemaps.init())
    .pipe(autoPrefixer())
    .pipe(sass())
    .pipe(sourcemaps.write("."))
    .pipe(plumber.stop())
    .pipe(gulp.dest("./dist/css"));
    done();
}

// cssnano
function cssTask(done){
  gulp
  .src(filesPath.sass)
  .pipe(plumber({errorHandler: notify.error}))
  .pipe(autoPrefixer())
  .pipe(sass())
  .pipe(cssnano())
  .pipe(plumber.stop())
  .pipe(rename("./styles.min.css"))
  .pipe(gulp.dest("./dist/css"));
  done();
}

// Javascript
function jsTask(done) {
  gulp
  .src(["./src/js/alert.js", "./src/js/project.js"])
  .pipe(plumber({errorHandler: notify.error}))
  .pipe(babel({
    presets: ["@babel/env"]
  }))
  .pipe(concat("project.js"))
  .pipe(uglify())
  .pipe(
    rename({
      suffix: ".min"
    })
  )
  .pipe(dest("./dist/js"));
  done();
}

// Images optimization
function imagesTask(done) {
  gulp.src(filesPath.images)
    .pipe(cache(imagemin()))
    .pipe(dest("./dist/img/"));
  done();
}

// htmlmin
function htmlTask(done) {
  gulp.src(filesPath.html)
  .pipe(plumber({errorHandler: notify.error}))
  .pipe(htmlmin({
    collapseWhitespace: true}))
  .pipe(plumber.stop())
  .pipe(dest("./dist"));
  done();
}

// Watch task with BrowserSync
function watch() {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
    browser: "chrome"
  });

  gulp
    .watch(
      [
        filesPath.sass,
        filesPath.css,
        filesPath.html,
        filesPath.js,
        filesPath.images
      ],
      parallel(sassTask, cssTask, jsTask, imagesTask, htmlTask)
    )
    .on("change", browserSync.reload);
}

// Clear cache
function clearCache(done) {
  return cache.clearAll(done);
}

// Zip project
function zipTask(done) {
  gulp
  .src(["./**/*", "!./node_modules/**/*"])
  .pipe(zip("This_Is_Gulp.zip"))
  .pipe(dest("./"));
  done();
}

gulp.task('clean', function() {
  del.sync(['./dist/*', './dist/fonts/**/*']);
});

// Clean "dist" folder
function clean(done) {
  del(["./dist/**/*", "!./dist/fonts/*"]);
  done();
}

// Gulp individual tasks
exports.sassTask = sassTask;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imagesTask = imagesTask;
exports.htmlTask = htmlTask;
exports.watch = watch;
exports.clearCache = clearCache;
exports.zipTask = zipTask;
exports.clean = clean;

// Gulp serve
exports.build = parallel(sassTask, cssTask, jsTask, imagesTask, htmlTask);

// Gulp default command
exports.default = series(exports.build, watch);