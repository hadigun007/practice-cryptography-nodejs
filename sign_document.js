const crypto = require('crypto');
const fs = require('fs');


const document = 'document/document.pdf';
const private = 'key/private_key.pem'

// Baca kunci pribadi dari file
const privateKeyPem = fs.readFileSync(private, 'utf8');
const documentToSign = fs.readFileSync(document);

// Buat objek kunci pribadi dari pem
const privateKey = crypto.createPrivateKey(privateKeyPem);

// Buat objek tanda tangan
const sign = crypto.createSign('RSA-SHA256');

// Update objek tanda tangan dengan dokumen yang akan ditandatangani
sign.update(documentToSign);

// Tandatangani dokumen dengan kunci pribadi
const signature = sign.sign(privateKey, 'base64');

// Simpan tanda tangan digital ini dengan dokumen atau terpisah sebagai file terpisah.
console.log(signature)







fs.writeFileSync(`sign/sign_${document.toLowerCase().split('/')[1].split('.')[0].replaceAll(' ','_')}.dat`, signature);

// document.pdf 
// AvMuF7fjea63RM1Y/PEG8z+eBYTMdkndhEW0oT3XmvMq/nvm3Ii6Msa7nyyLblTpk2OHF67zuG4CJjCx/qCWykV7xKU4VHzqAg1sripJRYseefDUbGPGa1dewDVbZjVwWo+8tXVOn+HaOmyYCaK/CUyQ0pjGTggxZm35E++/zhwexEKwL4xeZrzz6RZp9Kh1jBXLa6DyV3Q4xqLwU/Gumic5q4wFNfKmOK4KG+KBk6i6aTl9xv3KaxZl4szWYB1OEjxjuJj9cdT5tYXn9ACcsOUeHjCqkwFqk1LQfRNOE0rtxfS8Yxu+uMcs22+eEuB8jm/qT9gPjlExL2z6puIESQ==
//
// document2.pdf
// MO+7/VrhkDpSLGDnymKp44wnwHulrSuDAqOmoOEp+3MRssKEFSplknbbRBAIYTtow8QwY95NGoUwXIot3VF248OTZ0VvDPJsIORXH8j6URD4zV0ypZGYiTDG6S78BQPhDxXsa4rPeM8akVc53oSogty+5oRJbCDEpaoT39XG/2CTGIxun2xY922Xinki2sY3VDZeY0wIYOc0I91UZJVETjSCDyCg56dEtOunc4ShGjcBBRdRTZXhp5RvAmDrcu5mqipdEwROptI38P0got9gK8rBGGsMT0B1RYdbSpLKxer0VCFm/eyNyqt6fGte7/DxLG58aVnG5ye8firf7drVbw==
//
// Panduan Set up Ledger Nano X.pdf
// rMqsEXdSKyl28WibjMv2V4vhtVQEbs4nZMmFZU4qqwplnVVpcn84V9OM8S0uwB6JdI84u1wF3z2t+3ax4wL/3qDOxh88UnipTwm9+ARk+4jO8p0Zt7TUY6/VmRdgUs5YOzb+WYUL4upsIYKajTtQPRVwcTee+hGd59BX3CteINIxn1t5v1UkCPIYNOAnA3UbuHmxx2DlD/SKHlhNKeO2psyUnYccdMecfi4hzq7T+GMa+/w/cNa9oaex2/eITniJvjmw7wRIvaDyqYt6LQWOVniHih/TshD3P8dr1OvdjQKlnNDKZRZcehao/cAF0i4FGdMuAhyDVtbytMiKHfluNw==
