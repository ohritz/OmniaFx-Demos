# OmniaFx-Demos


## Local Dev Certs
if you don't have ssl certificates for https on localhost there is a builtin tool to generate them for you.
Currently it will generate certificates cross platform, (you might need to install openssl)

But trusting the certificates only works on windows, but work is underway to support crossplatform.

run `npm run setup:trustcert` to generate and trust a localhost dev certificate.

`setup:untrustcert` will remove it.

On windows and mac you will get a popup to accept the addition of the certificate.