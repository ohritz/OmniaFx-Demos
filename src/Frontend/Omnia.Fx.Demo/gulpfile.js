require("./TaskRunner/Tasks/index.js");
const gulp = require('gulp');

const {
  trustDevCert,
  untrustDevCert
} = require("@microsoft/gulp-core-build-serve");

gulp.task("trust-cert", cb => trustDevCert.executeTask(gulp, cb));
gulp.task("untrust-cert", cb => untrustDevCert.executeTask(gulp, cb));
