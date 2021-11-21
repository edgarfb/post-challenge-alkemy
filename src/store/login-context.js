import React from "react";

const LogInContext = React.createContext(false);

export function LogInProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [tokenInLocalStorage, setTokenInLocalStorage] = React.useState(
    localStorage.getItem("userPostToken") || ""
  );

  React.useEffect(
    () => (tokenInLocalStorage ? setIsLoggedIn(true) : setIsLoggedIn(false)),
    [tokenInLocalStorage]
  );

  // Remove the user Token to logOut
  const logOutHandler = () => {
    localStorage.removeItem("userPostToken");
    setTokenInLocalStorage("");
  };

  return (
    <LogInContext.Provider
      value={{
        isLoggedIn,
        setTokenInLocalStorage,
        logOutHandler,
      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
}

export default LogInContext;
