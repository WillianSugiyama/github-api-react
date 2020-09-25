import React from "react";

const User = (props) => {
  const { id, node_id, html_url, avatar_url, login } = props.info;
  return (
    <div>
      <h1> UserID: {id} </h1>
      <p> {node_id} </p>
      <p> {html_url} </p>
      <p> {avatar_url} </p>
      <p> {login} </p>
    </div>
  );
};

export default User;
