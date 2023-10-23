const crypto = require('crypto');
const fs = require('fs');


const public = 'public_key.pem'
const document = 'document.pdf'
const sign = ''

// Baca kunci publik dari file
const publicKeyPem = fs.readFileSync(public, 'utf8');
const documentToVerify = fs.readFileSync(document);
const signatureToVerify = `-AvMuF7fjea63RM1Y/PEG8z+eBYTMdkndhEW0oT3XmvMq/nvm3Ii6Msa7nyyLblTpk2OHF67zuG4CJjCx/qCWykV7xKU4VHzqAg1sripJRYseefDUbGPGa1dewDVbZjVwWo+8tXVOn+HaOmyYCaK/CUyQ0pjGTggxZm35E++/zhwexEKwL4xeZrzz6RZp9Kh1jBXLa6DyV3Q4xqLwU/Gumic5q4wFNfKmOK4KG+KBk6i6aTl9xv3KaxZl4szWYB1OEjxjuJj9cdT5tYXn9ACcsOUeHjCqkwFqk1LQfRNOE0rtxfS8Yxu+uMcs22+eEuB8jm/qT9gPjlExL2z6puIESQ==`; // Gantilah dengan tanda tangan yang ada pada dokumen

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
