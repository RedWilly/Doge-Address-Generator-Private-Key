const dogecore = require('dogecore-lib');
const fs = require('fs');
const axios = require("axios");

// Function to check the balance of a Dogecoin address using the API
async function checkBalance(address) {
    const options = {
      method: 'GET',
      url: `https://community-dogechain.p.rapidapi.com/addressbalance/${address}`,
      headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
        'X-RapidAPI-Host': 'community-dogechain.p.rapidapi.com' //the information can be obtain from rapidapi.com
      }
    };
  
    try {
      const response = await axios.request(options);
      return response.data.balance || 0;
    } catch (error) {
      console.error(error);
      return 0;
    }
  }
  

// Function to generate a new Dogecoin address and private key
async function generateAddress() {
  const wallet = dogecore.PrivateKey.fromRandom();
  const address = wallet.toAddress().toString();
  const privateKey = wallet.toWIF();

  return { address, privateKey };
}

async function run() {
  // Continuously generate addresses and check their balance
  while (true) {
    // Generate a new address and private key
    const { address, privateKey } = await generateAddress();

    console.log(`Checking balance for address: ${address}`);

    // Check the balance of the address using the API
    const balance = await checkBalance(address);

    console.log(`Balance for address ${address}: ${balance}`);

    // If the address has a non-zero balance, save it to the rock.txt file
    if (balance > 0) {
      fs.appendFileSync('rock.txt', `${address} ${privateKey}\n`);
      console.log(`Saved address with balance to rock.txt: ${address} ${privateKey}`);
    }

    // Delay for 2 seconds before checking the next address
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

// Call the async function
run();
