import styled from "styled-components";

export const Heading = styled.h2`
  margin-top: 20px;
  text-align: center;
  color: black;
`;


export const Body=styled.body`
 background-color:orange;
`; 


export const Section = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:40px
`;


export const MainCard = styled.div`
  width:35vw;
  height:70vh;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  text-align: center;
  background-color: #212121;
  border-radius: 20px;
  // filter: drop-shadow(5mm 5mm 5rem #212121);
`;

export const CardItem = styled.div`
  border: 2px solid #414141;
  width: 90%;
  border-radius: 20px;
`;

export const ConnectButton = styled.button`
  background-color: #35a9df;
  padding: 20px 50px 15px 50px;
  border-radius: 40px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`;
