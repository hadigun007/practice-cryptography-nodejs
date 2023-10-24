const crypto = require('crypto');
const fs = require('fs');


const publicKeyPath = 'key/public_key.pem'
const documentPath = 'document/document.pdf'
const signaturePath = 'sign/sign_document.dat'


// Baca kunci publik dari file
const publicKeyPem = fs.readFileSync(publicKeyPath, 'utf8');
const documentToVerify = fs.readFileSync(documentPath);
const signatureToVerify = fs.readFileSync(signaturePath, 'utf-8');
console.log(signatureToVerify)

// Buat objek kunci publik dari pem
const publicKey = crypto.createPublicKey(publicKeyPem);

// Buat objek verifikasi
const verify = crypto.createVerify('RSA-SHA256');

// Update objek verifikasi dengan dokumen yang akan diverifikasi
verify.update(documentToVerify);

// Verifikasi tanda tangan dengan kunci publik
const isVerified = verify.verify(publicKey, signatureToVerify, 'base64');

if (isVerified) {
  console.log('Tanda Tangan Digital Valid.');
} else {
  console.log('Tanda Tangan Digital Tidak Valid.');
}

