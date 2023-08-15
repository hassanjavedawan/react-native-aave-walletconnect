

# React Native Aave Integration with Metamask via WalletConnect

This repository contains a basic example of how to integrate Metamask functionality into a React Native app using WalletConnect and interact with the Aave smart contracts to borrow funds.

## Getting Started

Follow these steps to set up the project and test the integration.

### Prerequisites

- Node.js and npm installed on your system
- Basic understanding of React Native development
- Metamask mobile app (for scanning QR code)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/react-native-aave-walletconnect.git
cd react-native-aave-walletconnect
```
Install dependencies: 
```sh
npm install
```
1. Create a env.js file in the project root and add your Infura project ID:

```sh
const INFURA_PROJECT_ID = ''
export default {
  INFURA_PROJECT_ID,
};
```

Modify the contract addresses and ABIs in the source code:

- Replace `LendingPoolAddressesProviderAddress` with the actual address of the `LendingPoolAddressesProvider` contract.
- Replace InterestRateModelAddress with the actual address of the desired interest rate model.
- Make sure to include the correct ABIs for `LendingPoolAddressesProviderABI.json` and `LendingPoolABI.json`.


1. Start the React Native development server:

```bash
npx react-native start
```

1. Run the app on an Android or iOS emulator/device:

```bash
npx react-native run-android
# or
npx react-native run-ios
```

# Usage

1. Open the app on your emulator/device.
2. Click on the "`Connect Wallet`" button to initiate the WalletConnect connection.
3. Once connected, you can use the "`Borrow from Aave`" button to execute a borrowing transaction on Aave.

Remember to handle gas prices, gas limits, and potential errors properly in a production environment.


# Notes

- This example provides a basic setup for educational purposes. In a real-world scenario, you would need to implement - additional security measures and error handling.
- WalletConnect is used as a bridge between React Native and Metamask because Metamask doesn't natively support React Native. WalletConnect supports both Metamask mobile app and extension.
- Ensure you have a stable internet connection while testing the WalletConnect connection.
- Make sure to replace placeholders in the code with actual values.