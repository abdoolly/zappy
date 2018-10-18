import * as uuid from 'uuid/v1';

export class generalUtils {
    getUUID() {
        return Buffer.from(uuid(), 'utf8').toString('base64');
    }
}