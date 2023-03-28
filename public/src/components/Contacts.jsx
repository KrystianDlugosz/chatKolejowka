import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";

export default function Contacts({ contacts, currentUser }) {
  const [currentUserName, setCurrentUsername] = useState(undefined);
  const [currentUserImage, setCurrentImage] = useState(undefined);
  const [currrentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
   
    if (currentUser) {
      setCurrentImage(currentUser.avatarImage);
      setCurrentUsername(currentUser.username);
    }
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {};
  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="Logo"></img>
            <h3>Czat</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currrentSelected ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="avatar">
                    <img src={contact.avatarImage} alt="avatarImage" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img src={currentUserImage} alt="avatarImage" />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 10% 75% 15%;
    overflow: hidden;
    background-color: #080420;
    .brand{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            height: 2rem;
        }
        h3{
            color: white;
            text-transform: uppercase;
        }
    }
    .contacts{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        gap: 0.8rem;
        .contact{
            background-color: #ffffff39;
        }
    }
`;
