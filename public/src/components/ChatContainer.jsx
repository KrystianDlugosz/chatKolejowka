import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ChatContainer({ currentChat }) {
  const [currentUserName, setCurrentUsername] = useState(undefined);
  const [currentUserImage, setCurrentImage] = useState(undefined);

  useEffect(() => {
    if (currentChat) {
        setCurrentImage(currentChat.avatarImage);
      setCurrentUsername(currentChat.username);
    }
  }, [currentChat]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img src={currentUserImage} alt="avatarImage" />
          </div>
          <div className="username">
            <h3>{currentUserName}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages"></div>
      <div className="chat-input"></div>
    </Container>
  );
}

const Container = styled.div`
    padding-top: 1rem;
    .chat-header{
        display: flex;
        justify-content: space-between;
        aling-items: center;
        padding: 0.2rem;
        .user-details{
            display: flex;
            align-items: center;
            gap: 1rem;
            .avatar{
                img{
                    height: 3rem;
                }
            }
        }
        .username{
            h3{
                color: white;
            }
        }
    }
`;
