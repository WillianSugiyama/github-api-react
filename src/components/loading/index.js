import React from "react";

function loading(Component) {
  const loadingComponent = ({ isLoading, ...props }) => {
    if (!isLoading) return <Component {...props} />;

    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>Wait a second...</p>
    );
  };

  return loadingComponent;
}

export default loading;
