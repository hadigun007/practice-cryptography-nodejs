const crypto = require('crypto');
const fs = require('fs');

const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const privatePem = privateKey.export({
  type: 'pkcs1',
  format: 'pem',
});

fs.writeFileSync('key/private_key.pem', privatePem);

console.log('Kunci pribadi RSA telah dibuat dan disimpan dalam private_key.pem');
