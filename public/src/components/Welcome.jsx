import React,  { useEffect, useState } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome({ currentUser }) {
    const [currentUserName, setCurrentUsername] = useState(undefined);

    useEffect(() => {
      if (currentUser) {
        setCurrentUsername(currentUser.username);
      }
    }, [currentUser]);
    
  return(
    <Container>
        <img src={Robot} alt="Robot" />
        <h1>
            Witaj, <span>{currentUserName}!</span>
        </h1>
        <h3>Wybierz czat żeby zacząć rozmowę.</h3>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    img{
        height:20rem;
    }
    span{
        color: #4e00ff ;
    }
`;
