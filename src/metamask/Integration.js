import React,{useState} from "react";
import * as Styles from "./Connect.Styles";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
const web3=new Web3(Web3.givenProvider);

const Integration = () => {
 
 const[balance,setBalance]=useState(0);
 const[userAddress,setUserAddresss]=useState("Currently unAvailable");
 const[chainID,setChainID]=useState("Not Available");
 

  const connectWalletHandler = async () => {
      
    const provider = await detectEthereumProvider();
    if (provider) {
      let ethereum = window.ethereum;
      const address = await ethereum.request({ method: "eth_requestAccounts" });
      setUserAddresss(address[0]);

      const chainId = await ethereum.request({ method: "eth_chainId" });
      console.log(3434, chainId);
      const chain=parseInt(chainId, 16);
       setChainID(chain);

       ethereum.on('chainChanged', handleChainChanged);

       // add = true;
      let userAddress =await address[0];
      let balance1 =await web3.eth.getBalance(userAddress);
      let mainBalance =await web3.utils.fromWei(balance1.toString(), "ether");
      setBalance(mainBalance);
       // fetchReservesFromPairContract();
    } else {
      console.error("Please install MetaMask!");
    }
  };

  function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
     alert("Network has changed");
    window.location.reload();
  }

  return(<>
        <div>
    <Styles.Heading>Your Wallet Account Details</Styles.Heading>
    <Styles.Section>
      <Styles.MainCard>
        <Styles.CardItem>
          <h3>Available Address</h3>
          <p>
            <strong>{userAddress}</strong>
          </p>
        </Styles.CardItem>
        <Styles.CardItem>
          <h3>Main Balance</h3>
          <p>
            <strong>{parseFloat(balance).toFixed(5)} ETH</strong>
          </p>
        </Styles.CardItem>
        <Styles.CardItem>
          <h3>Network Id</h3>
          <p>
            <strong>{chainID}</strong>
          </p>
        </Styles.CardItem>
        <Styles.ConnectButton onClick={connectWalletHandler}>Connect to Metamask</Styles.ConnectButton>
      </Styles.MainCard>
    </Styles.Section>
  </div>
    </>);
};

export default Integration;
