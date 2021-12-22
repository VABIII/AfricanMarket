import React from "react";
import styled from "styled-components";
import Footer from "./Footer"

const TitlePage = styled.h1`
  text-align: center;
  margin-top: 3%;
`;
const MapImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: 10% 75%;
`;
const InfoStuff = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border-style: solid;
  background-color: #5DB0F1; 
`;
const InfoStuff2 = styled.div`
border-style: solid;
margin: 5% 20%;
padding: 0 20%;
background-color: #AC9A1F;
`;

const Home = () => {
  return (
    <div>
      <div>
        <TitlePage>African Marketplace</TitlePage>
        <MapImg
          src="https://www.gregdutoit.com/wp-content/uploads/2020/07/amboseli_elephant_parade-copy-1.jpg"
          alt="Elephants"
        />
      </div>
      <InfoStuff>
        <InfoStuff2>
          <h2> Who we are? </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </InfoStuff2>
        <InfoStuff2>
          <h2> Where we are? </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </InfoStuff2>
        <InfoStuff2>
          <h2> How to contact us? </h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </InfoStuff2>
      </InfoStuff>
      <div>
          <Footer/>
      </div>
    </div>
  );
};

export default Home;
