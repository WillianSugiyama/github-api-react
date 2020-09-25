import React, { useEffect, useState } from "react";
import List from "./components/users/listUsers";
import Loading from "./components/loading";
function App() {
  const ListLoading = Loading(List);
  const [appState, setAppState] = useState({
    loading: false,
    githubUsers: null,
  });
  const paginationNumber = 10;

  useEffect(() => {
    setAppState({ loading: true });

    const apiUrl = `https://api.github.com/users?per_page=${paginationNumber}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((githubUsers) => {
        setAppState({ loading: false, githubUsers });
      });
  }, [setAppState]);

  return (
    <div>
      <ListLoading
        isLoading={appState.loading}
        githubUsers={appState.githubUsers}
        setAppState={setAppState}
      />
    </div>
  );
}

export default App;
