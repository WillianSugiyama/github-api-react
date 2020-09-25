import React from "react";

const List = (props) => {
  const { githubUsers } = props;
  console.log(props);
  if (!githubUsers || githubUsers.length === 0)
    return <p> No github users found today, sorry ! </p>;

  const removeUser = (userIndex) => {
    delete githubUsers[userIndex];
    props.setAppState({ loading: false, githubUsers });
  };

  return (
    <div className="list">
      <h2> Github Users! </h2>
      {githubUsers.map((user, index) => {
        return <div key={index}>{user.login}</div>;
      })}
    </div>
  );
};

export default List;