const dogecore = require('dogecore-lib');
const fs = require('fs');
const axios = require("axios");

// Read the wallet addresses from the addr.txt file
const addresses = fs.readFileSync('addr.txt').toString().split('\n');

// Function to check the balance of a wallet address
async function checkBalance(address) {
  // Set up the API request options
  const options = {
    method: 'GET',
    url: `https://community-dogechain.p.rapidapi.com/addressbalance/${address}`,
    headers: {
      'X-RapidAPI-Key': 'YOUR_API_KEY',
      'X-RapidAPI-Host': 'community-dogechain.p.rapidapi.com' 
    }
  };

  // Send the API request to check the balance of the wallet address
  try {
    const response = await axios.request(options);
    console.log(`Address ${address} has a balance of ${response.data} DOGE`);
  } catch (error) {
    console.error(`Error checking balance of address ${address}: ${error}`);
  }
}

// Async function to run the script
async function main() {
  // Iterate over the wallet addresses
  for (const address of addresses) {
    // Check the balance of the wallet address
    await checkBalance(address);

    // Pause for 3 seconds before making the next API request
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Run the script
main();
