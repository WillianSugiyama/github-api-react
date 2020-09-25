import React, { useState } from "react";
import User from "./user";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ContainerCard = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 40%;
  height: 40px;
  color: violet;
  font-size: 22px;
  border: 1px solid magenta;
  background-color: white;
  border-radius: 1px;
  padding: 5px 10px;

  &::placeholder {
    color: violet;
  }
`;

const Select = styled.select`
  width: 10%;
  height: 45px;
  background: white;
  color: violet;
  font-size: 22px;
  border: 1px solid magenta;
  background-color: white;
  border-radius: 1px;
  margin-right: 10px;
  padding: 0px 5px;
`;

const Button = styled.button`
  color: red;
  border: 1px solid red;
  background-color: white;
  border-radius: 3px;
  margin: 10px;
  padding: 5px 10px;

  &:hover {
    border: 1px solid darkmagenta;
    color: darkmagenta;
  }
`;

const List = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchKey, setSearchKey] = useState("id");

  const { githubUsers } = props;

  const optionsSearch = ["id", "login"];

  let users;

  const searchForKey = (key) => {
    setSearchKey(key);
  };

  const searchUser = (value) => {
    const results = githubUsers.filter((user) =>
      String(user[searchKey]).includes(value)
    );

    setSearchResult(results);
  };

  if (searchResult.length === 0) {
    users = githubUsers;
  } else {
    users = searchResult;
  }

  if (!githubUsers || githubUsers.length === 0)
    return <p> No github users found today, sorry ! </p>;

  const removeUser = (userIndex) => {
    const removedUser = githubUsers[userIndex];
    const removedArray = props.githubUsersRemoved;
    removedArray.push(removedUser);
    delete githubUsers[userIndex];
    props.setAppState({
      loading: false,
      githubUsers: githubUsers,
      githubUsersRemoved: removedArray,
    });
  };

  const listRemovedUsers = () => {
    const githubUsers = props.githubUsers;
    const githubUsersRemoved = props.githubUsersRemoved;
    if (githubUsersRemoved.length === 0) {
      alert("Don't have users removed yet.");
    } else {
      props.setAppState({
        loading: false,
        githubUsers: githubUsersRemoved,
        githubUsersRemoved: githubUsers,
      });
    }
  };

  return (
    <Container>
      <h2> Github Users! </h2>
      <Button onClick={() => listRemovedUsers()}>
        List Removed/Unremoved Users
      </Button>
      <ContainerSearch>
        <Select onChange={(e) => searchForKey(e.target.value)}>
          {optionsSearch.map((option, index) => {
            return <option key={index}> {option} </option>;
          })}
        </Select>
        <Input
          placeholder="Digite o que deseja buscar"
          onChange={(e) => searchUser(e.target.value)}
        ></Input>
      </ContainerSearch>
      <ContainerCard>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <User
                info={user}
                userIndex={index}
                setAppState={props.setAppState}
                removeUser={removeUser}
              />
            </div>
          );
        })}
      </ContainerCard>
    </Container>
  );
};

export default List;
