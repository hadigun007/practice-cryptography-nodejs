const crypto = require('crypto');
const fs = require('fs');

// Baca kunci pribadi dari file atau sumber lain
const privateKey = fs.readFileSync('private_key.pem', 'utf8');

// Data yang akan ditandatangani
const dataToSign = 'Data yang akan ditandatangani';

// Buat objek pemilihan kunci pribadi
const sign = crypto.createSign('RSA-SHA256');
sign.update(dataToSign);

// Tandatangani data dengan kunci pribadi
const signature = sign.sign(privateKey, 'base64');

console.log('Tanda Tangan Digital:');
console.log(signature);
