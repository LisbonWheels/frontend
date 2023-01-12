/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from "react";

const UserContext = createContext();
export default UserContext;

export function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        userNotFound,
        setUserNotFound
      }}
    >
      {children}
    </UserContext.Provider>
  );
}