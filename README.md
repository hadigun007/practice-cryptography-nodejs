# Cara Sign Dokumen Digital
---

## 1. Generate Private Key
Generate private key dan akan men-generate file baru ```private_key.pem```. Isinya adalah string private key.
```sh
node generate_privateKey.js
```

## 2. Generate Publik Key
Generate private key dan akan men-generate file baru ```publik_key.pem```. Isinya adalah string public key.
```sh
node generate_publicKey.js
```

## 3. Generate Pdf file - Optional
Selanjutnya siapkan dokumen untuk di sign, contoh dokumen yang akan di sign adalah dokumen pdf. Untuk generate dokumen pdf bisa dilakukan dengan menjalankan perintah.

Untuk custom text pada file pdf nya bisa di atur di file ```create_pdf.js```. dan untuk men-generate file pdf nya bisa menggunakan command.
```sh
node create_pdf.js 
```

## 4. Sign Dokumen
Untuk sign dokumen maka tentukan dulu private key dan dokumen yang mau di sign, bisa di sign diupdate di file ```sign_document.js```, di file ini tentukan private key dan dokumen yang mau di sign.

Setelahnya, untuk sign dokumen dapat dilakukan dengan command dibawah ini.
```sh
node sign_document.js
```

## 4. Verify Sign
Untuk melakukan verify dokumen yang di sign, pertama siapkan 
```sh
node verify_sign.js
```




1. setup workspace
2. link device
3. pembuatan multisig wallet
4. setup policy
5. transaksi