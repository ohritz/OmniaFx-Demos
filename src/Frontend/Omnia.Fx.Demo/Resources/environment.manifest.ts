import {ensureCertificate} from '@microsoft/gulp-core-build-serve/lib/certificates';
import { Composer, DevelopmentEnvironment} from '@omnia/fx/tooling';
import {Configuration} from 'webpack';
import {PFX_PASSWORD} from '../tools/configs.consts';

DevelopmentEnvironment.hosting
    .use({
        portNumber: 569,
        https: true,
        pfxPath: './tools/certificate.pfx',
        pfxPassphrase: PFX_PASSWORD,
    });
