import * as React from "react";
import { ethers } from "ethers";
import './App.css';
import abiObj from './utils/WavePortal.json'

export default function App() {
    // Just a state variable we use to store our user's public wallet address
    const [currAccount, setCurrentAccount] = React.useState("");
    const contractAddress = "0x6e630dF205522C9A3F694BF053a4588f5FB8cCaF"
    const contractABI = abiObj.abi;

  const checkIfWalletIsConnected = () => {
    // First make sure we have access to window.ethereum 
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum)
    }

    // Check if we're authorized to access the user's wallet
    ethereum.request({ method: 'eth_accounts' })
    .then(accounts => {
    // We could have multiple accounts. Check for one.
    if (accounts.length !== 0) {
      // Grab the first account we have access to.
      const account = accounts[0];
      console.log("Found an authorized account: ", account)

      // Store the users public wallet address for later!
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found")
    }
  })

  }

  const connectWallet = () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get metamask!");
    }

    ethereum.request({ method: 'eth_requestAccounts'})
    .then(accounts => {
      console.log("Connected", accounts[0])
      setCurrentAccount(accounts[0])
    })
    .catch(err => console.log(err));
  }

  // This runs our function when the page loads.
  React.useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const wave = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const waveportalContract = new ethers.Contract(contractAddress, contractABI, signer);

    let count = await waveportalContract.getTotalWaves();
    console.log("Retrieved total wave count...", count.toNumber());

    const waveTxn = await waveportalContract.wave()
    console.log("Mining...", waveTxn.hash)
    await waveTxn.wait()
    console.log("Mined -- ", waveTxn.hash)

    count = await waveportalContract.getTotalWaves()
    console.log("Retrieved total wave count...", count.toNumber())
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Welcome to Wave Place!
        </div>

        <div className="bio">
        Each wave is stored on the Ethereum blockchain.
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>

        {currAccount ? null : (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}
