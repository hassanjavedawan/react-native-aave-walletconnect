/** @format */

import Web3 from 'web3';
import BLOCKLOAN_ABI from '../../abi/blockLoanABI.json';

import {YOUR_PROVIDER_LINK} from '../../../env';

const web3 = new Web3(new Web3.providers.HttpProvider(YOUR_PROVIDER_LINK));

const toWei = (value, unit = 'ether') => {
  return web3.utils.toWei(value.toString(), unit);
};

const lpAddressProviderAddress = '0xF575B36985f4077Ca4a61295F7e3474a673118DA'; // Replace with the actual address
const lpAddressProviderContract = new web3.eth.Contract(
  BLOCKLOAN_ABI,
  lpAddressProviderAddress,
);

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             Deposit
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
export const handleDeposit = ({connector, amount, payable}) => {
  if (!amount) throw Error('Amount is required');
  console.log(connector.accounts[0], amount);
  return dispatch => {
    dispatch({
      type: 'ERROR',
      payload: {errorText: ''},
    });
    dispatch({
      type: 'SUCCESS',
      payload: {errorText: ''},
    });
    try {
      const contractData = lpAddressProviderContract.methods
        .deposit(toWei(amount))
        .encodeABI(); //  sometimes you need to convert to string()
      const tx = {
        from: connector.accounts[0], // Required  /* '₺{}' */
        to: lpAddressProviderAddress, // Required /* '₺{}' */
        data: contractData, // Required /* '₺{}' */
      };

      connector.sendTransaction(tx);
      then(res => {
        dispatch({
          type: 'SUCCESS',
          payload: {errorText: 'Operation Successful'},
        });

        // dispatch({ type: "BUY", payload: { buyAmount: e } });
      }).catch(err => {
        console.error('Operation Failed');
        dispatch({
          type: 'ERROR',
          payload: {errorText: 'Operation Failed'},
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};

// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                              Borrow
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
export const handleBorrow = ({connector, account}) => {
  if (!account) throw Error('Account is required');
  console.log(connector.accounts[0], account);
  return dispatch => {
    dispatch({
      type: 'ERROR',
      payload: {errorText: ''},
    });
    dispatch({
      type: 'SUCCESS',
      payload: {errorText: ''},
    });
    try {
      const contractData = lpAddressProviderContract.methods
        .deposit(account)
        .encodeABI(); //  sometimes you need to convert to string()
      const tx = {
        from: connector.accounts[0], // Required  /* '₺{}' */
        to: lpAddressProviderAddress, // Required /* '₺{}' */
        data: contractData, // Required /* '₺{}' */
      };

      connector.sendTransaction(tx);
      then(res => {
        dispatch({
          type: 'SUCCESS',
          payload: {errorText: 'Operation Successful'},
        });

        // dispatch({ type: "BUY", payload: { buyAmount: e } });
      }).catch(err => {
        console.error('Operation Failed');
        dispatch({
          type: 'ERROR',
          payload: {errorText: 'Operation Failed'},
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};
