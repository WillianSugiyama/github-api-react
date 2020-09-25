import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: violet;
  width: 500px;
  height: 400px;
  border: 1px solid fuchsia;
  margin: 5px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;

const Button = styled.button`
  color: violet;
  border: 1px solid magenta;
  background-color: white;
  border-radius: 3px;
  margin: 10px;
  padding: 5px 10px;

  &:hover {
    border: 1px solid darkmagenta;
    color: darkmagenta;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid magenta;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;

const User = (props) => {
  const { id, node_id, html_url, avatar_url, login } = props.info;

  return (
    <div>
      <Card>
        <Avatar src={avatar_url} />
        <p> {login} </p>
        <p> UserID: {id} </p>
        <p> NodeId: {node_id} </p>
        <Button onClick={() => props.removeUser(props.userIndex)}>
          Remove User
        </Button>
        <Button>
          <a href={html_url} target="_blank">
            Go To GitHub
          </a>
        </Button>
      </Card>
    </div>
  );
};

export default User;
