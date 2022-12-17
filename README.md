# Dogecoin Address Generator

(**1.Index.js**) script generates random Dogecoin addresses and private keys, and checks the balance of each address using the Dogechain API. Any addresses with a non-zero balance are saved to a file called `rock.txt`.

(**2.doge.js**) is generates 1000 Dogecoin wallet addresses and private keys using the dogecore-lib library.

It starts by requiring the dogecore-lib and fs libraries. The dogecore-lib library provides functions for generating and manipulating Dogecoin addresses and private keys, while the fs (file system) library provides functions for reading and writing files.

Next, it uses a for loop to generate 1000 wallet addresses and private keys using the dogecore.PrivateKey.fromRandom() function. This function generates a new random private key and returns a PrivateKey object.

For each PrivateKey object, it then calls the toAddress() function to get the corresponding wallet address and the toWIF() function to get the private key in the Wallet Import Format (WIF). These are added to an object, which is then pushed onto the wallet's array.

Finally, it writes the wallet addresses and private keys to two separate files, addr.txt and priv.txt, using the writeFileSync function from the fs library. The wallet addresses are written to addr.txt and the private keys are written to priv.txt. The map function is used to extract the relevant data from each object in the wallets array, and the join function is used to concatenate the resulting arrays into strings with newline characters between each item.

(**3.Bulk.js**) a javascript file that bulk checks the balance of  Dogecoin wallet addresses.

First, it imports the dogecore-lib and fs (file system) modules and the axios library, which is used for making HTTP requests.

It then reads in a list of wallet addresses from a file called addr.txt and stores them in the addresses array.

The script defines an async function called checkBalance which takes a wallet address as its argument. This function makes an HTTP GET request to the Dogechain API to retrieve the balance of the wallet address. The API request is made using the axios library, and the API key and host are provided in the request headers. The response from the API, which contains the balance of the wallet address, is logged to the console. If an error occurs while making the request, it is caught and an error message is logged to the console.

The script also defines an async function called main which iterates over the wallet addresses in the addresses array. For each address, it calls the checkBalance function to check the balance of the wallet address. After each request, it waits for 3 seconds before making the next request using await new Promise(resolve => setTimeout(resolve, 1000)).

Finally, the script calls the main function to run the script. This causes the script to iterate over the wallet addresses, check the balance of each address, and log the results to the console.

## Prerequisites

- Node.js and npm
- An API key for the Dogechain API (https://rapidapi.com/community/api/dogechain) Free API key

## Installation

1. Clone or download the repository
2. Run `npm install` to install the required dependencies

## Usage

1. Set your Dogechain API key as the value of the `X-RapidAPI-Key` header in the `options` object in the `checkBalance()` function.
2. Run `node index.js` to start the script

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
