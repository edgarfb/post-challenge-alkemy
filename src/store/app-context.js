import React from "react";

const AppContext = React.createContext(null);

export function AppContextProvider(props) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <AppContext.Provider value={{ posts }}>
      {props.children}
    </AppContext.Provider>
  );
}
export default AppContext;
