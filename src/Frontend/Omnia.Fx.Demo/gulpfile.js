require("./TaskRunner/Tasks/index.js");
const gulp = require("gulp");
const pem = require("pem");
// const path = require("path");
const { writeFileSync } = require("fs");
const {pfxPassphrase, pfxPath, certPath, keyPath} = require("./tools/configs.consts");
const CertificateStore = require("@microsoft/gulp-core-build-serve/lib/CertificateStore")
  .default;
const {
  trustDevCert,
  untrustDevCert
} = require("@microsoft/gulp-core-build-serve");

const rootPath = process.cwd();
// const pfxPath = path.join(rootPath, "tools", "certificate.pfx");
// const keyPath = path.join(rootPath, "tools", "key.pem");
// const certPath = path.join(rootPath, "tools", "cert.pem");

gulp.task("trust-cert", cb => {
  trustDevCert.executeTask(gulp, () => {
    const certStore = CertificateStore.instance;
    const { cert, key } = {
      cert: certStore.certificateData,
      key: certStore.keyData
    };
    writeFileSync(keyPath, key);
    writeFileSync(certPath, cert);

    pem.convert.PEM2PFX(
      {
        cert: certPath,
        key: keyPath
      },
      pfxPath,
      pfxPassphrase,
      (err, result) => {
        if (!err){ 
         return cb();
        }
        return console.error(err);
      }
    );
  });
});
gulp.task("untrust-cert", cb => untrustDevCert.executeTask(gulp, cb));
