const dogecore = require('dogecore-lib');
const fs = require('fs');

// Generate 1000 wallet addresses and private keys
const wallets = [];
for (let i = 0; i < 1000; i++) {
  const wallet = dogecore.PrivateKey.fromRandom();
  wallets.push({
    address: wallet.toAddress().toString(),
    privateKey: wallet.toWIF()
  });
}

// Save the wallet addresses to a file
const addrLines = wallets.map(w => w.address).join('\n');
fs.writeFileSync('addr.txt', addrLines);

// Save the private keys to a file
const privLines = wallets.map(w => w.privateKey).join('\n');
fs.writeFileSync('priv.txt', privLines);
