# Dogecoin Address Generator

This script generates random Dogecoin addresses and private keys, and checks the balance of each address using the Dogechain API. Any addresses with a non-zero balance are saved to a file called `rock.txt`(index.js).

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
