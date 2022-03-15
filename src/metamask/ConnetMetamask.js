
// import React,{useState} from "react";
// import * as Styles from "./Connect.Styles";
// import {getMainBalance,getUserAddress,checkCorrectNetwork} from '../actions/Web3Actions';
// import { useEffect } from "react/cjs/react.production.min";
// // import { web3Example } from "../web3metamaskExercise/web3file";

// // console.log("InjectMetamask",web3Example);

// const ConnetMetamask = () => {

//     const [data, setData] = useState({
//         address: "Currently Unavailable",
//         balance: 0,
//         chainId:"Not Available"
//       });
    
//       const connectButton = async () => {
//         let address = await getUserAddress();
//         let balance = await getMainBalance();
//         let chainId=await checkCorrectNetwork();
//         if(chainId!==chainId)
//         {
//           alert("network has changed");
//         }
//         setData({
//           address:address,
//           balance:balance,
//           chainId:chainId,
//         });
//       };
        
      
//   return (
//     <div>
//     <Styles.Heading>Account Details</Styles.Heading>
//     <Styles.Section>
//       <Styles.MainCard>
//         <Styles.CardItem>
//           <h3>Available Address</h3>
//           <p>
//             <strong>{data.address}</strong>
//           </p>
//         </Styles.CardItem>
//         <Styles.CardItem>
//           <h3>Main Balance</h3>
//           <p>
//             <strong>{parseFloat(data.balance).toFixed(5)} ETH</strong>
//           </p>
//         </Styles.CardItem>
//         <Styles.CardItem>
//           <h3>Network Id</h3>
//           <p>
//             <strong>{data.chainId}</strong>
//           </p>
//         </Styles.CardItem>
//         <Styles.ConnectButton onClick={connectButton}>Connect to Metamask</Styles.ConnectButton>
//       </Styles.MainCard>
//     </Styles.Section>
//   </div>
//   )
// };

// export default ConnetMetamask;
