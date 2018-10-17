var gulp = require("gulp");
var sass = require("gulp-sass");
var surge = require("gulp-surge");

gulp.task("deploy", [], function() {
  return surge({
    project: "./", // Path to your static build directory
    domain: "like-board.surge.sh" // Your domain or Surge subdomain
  });
});

gulp.task("sass", function() {
  return gulp
    .src("src/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("sass-ie", function() {
  return gulp
    .src("src/ie.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function() {
  gulp.watch("src/scss/*.scss", ["sass"]);
  gulp.watch("src/ie.scss", ["sass-ie"]);
});
