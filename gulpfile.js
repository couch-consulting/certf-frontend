var gulp = require('gulp');
var del = require('del');
var tslint = require("gulp-tslint");
var ts = require("gulp-typescript");
var typedoc = require("gulp-typedoc");
var ngBuild = require('gulp-ng-build');

var tsProject = ts.createProject("tsconfig.json");

// Configuration

var files = {
  projectSources: [
    'src/**/*.ts',
  ],
  projectTestSources: [
   '**/*spec.ts',
  ],
  projectAssets: [],
  vendorAssets: [],
};

var targetDirectory = 'dist/';

// Cleanup

function clean() {
  return del(['build']);
}

// Code validation

function validateSources() {
  return gulp.src(files.projectSources)
    .pipe(tslint({
      formatter: 'verbose',
      configuration: 'tslint.json',
    }))
    .pipe(tslint.report());
}

var codeValidation = gulp.parallel(validateSources);

// Uglify code

function compileCode(done) {
  return gulp.task('build', ngBuild, function(done) {
    done();
  });
}

var codeCompilation = gulp.parallel(compileCode);

// Code documentation

function generateDocumentation(done) {
  return gulp.src(files.projectSources)
    .pipe(typedoc({
      out: './dist/documentation',
      module: 'commonjs',
      target: "es2015",
      experimentalDecorators: true,
    }));
}

var codeDocumentation = gulp.series(generateDocumentation);

// Common task definition
gulp.task('build', gulp.series(clean, gulp.parallel(codeDocumentation)));
gulp.task('default', gulp.series('build'));
