import { Composer, DevelopmentEnvironment} from '@omnia/fx/tooling';
import {pfxPassphrase, pfxPath} from '../tools/configs.consts';

const pfxPath = './tools/certs/certificate.pfx';

DevelopmentEnvironment.hosting
    .use({
        portNumber: 569,
        https: true,
        pfxPath,
        pfxPassphrase,
    });
