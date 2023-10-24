# Cara Sign Dokumen Digital
---

## Persiapan

```sh
# Clone Repository
git clone git@github.com:hadigun007/practice-cryptography-nodejs.git

# Clone Repository
cd practice-cryptography-nodejs

# Create Folder
mkdir document key sign

# Instal npm package
npm install
```
---

## Step by step

- [Generate Private Key](#1-generate-private-key) 
- [Generate Public Key](#2-generate-publik-key) 
- [Generate Dokumen Pdf(Opsional)](#3-generate-pdf-file---optional) 
- [Sign Dokumen](#4-sign-dokumen) 
- [Verify Sign](#4-verify-sign) 

---


### 1. Generate Private Key
Generate private key dan akan men-generate file baru ```private_key.pem```. Isinya adalah string private key.
```sh
node generate_privateKey.js
```

### 2. Generate Publik Key
Generate private key dan akan men-generate file baru ```publik_key.pem```. Isinya adalah string public key.
```sh
node generate_publicKey.js
```

### 3. Generate Pdf file - Optional
Selanjutnya siapkan dokumen untuk di sign, contoh dokumen yang akan di sign adalah dokumen pdf. Untuk generate dokumen pdf bisa dilakukan dengan menjalankan perintah.

Untuk custom text pada file pdf nya bisa di atur di file ```create_pdf.js```. dan untuk men-generate file pdf nya bisa menggunakan command.
```sh
node create_pdf.js 
```

### 4. Sign Dokumen
Untuk sign dokumen maka tentukan dulu private key dan dokumen yang mau di sign, bisa di sign diupdate di file ```sign_document.js```, di file ini tentukan private key dan dokumen yang mau di sign.

Setelahnya, untuk sign dokumen dapat dilakukan dengan command dibawah ini.
```sh
node sign_document.js
```

### 4. Verify Sign
Untuk melakukan verify dokumen yang di sign, pertama siapkan dokumen yang mau di verify dan signature di file ```verify_sign.js```.
```sh
node verify_sign.js
```
