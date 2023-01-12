/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
 

const UserContext = createContext();
export default UserContext;

export function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [userNotFound, setUserNotFound] = useState(false);
  
  useEffect(() => {
      if (localStorage.getItem('CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.10ff4fdd-f5b3-4f6c-9a46-6e19c29be8fe.accessToken') !== null) {
        let parsed_token = jwt_decode(localStorage.getItem('CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.10ff4fdd-f5b3-4f6c-9a46-6e19c29be8fe.accessToken'));
        console.log(parsed_token)

        setUserDetails({
          username: parsed_token.username,
          role: parsed_token["cognito:groups"][0],
          email: 'something@' + parsed_token["cognito:groups"][0] + '.com'
        });
        }
      }, [])
      
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