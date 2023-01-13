/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
 

const UserContext = createContext();
export default UserContext;

export function UserContextProvider({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  const [username, setUsername] = useState(localStorage.getItem("CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.LastAuthUser"));
  const [userNotFound, setUserNotFound] = useState(false);
  const getUserJwt = localStorage.getItem('CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.' + username + '.accessToken')
  console.log(getUserJwt)
  
  useEffect(() => {
    console.log(username)
      if (localStorage.getItem(`CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.${username}.accessToken`) !== null) {
        let parsed_token = jwt_decode(localStorage.getItem(`CognitoIdentityServiceProvider.7pb8nac8533lbhkikqn27dmpge.${username}.accessToken`));
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