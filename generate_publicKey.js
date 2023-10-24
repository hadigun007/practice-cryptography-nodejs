const crypto = require("crypto");
const fs = require('fs');

// Load the private key
const privateKey = fs.readFileSync("key/private_key.pem");

// Get the public key
const publicKey = crypto.createPublicKey(privateKey).export({format:'pem', type:"spki"});

// Save the public key to file
fs.writeFileSync('key/public_key.pem', publicKey);

