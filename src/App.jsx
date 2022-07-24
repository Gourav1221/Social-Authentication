
import './App.css'
import {useEffect} from "react"
import { ContextHolder } from '@frontegg/rest-api';
import { useAuth, useLoginWithRedirect } from "@frontegg/react";

function App() {

  const {user, isAuthenticated} = useAuth();
  console.log('user:', user)

    const loginWithRedirect = useLoginWithRedirect()

    useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);


  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  console.log(user)

  return (
   <>
   
   {isAuthenticated ? (
      <div style={{
        width: "200px",
        margin: "auto",
        padding: "20px",
        border: "1px solid black",
        textAlign: "center"

      }}>
      <img src={user ?.profilePictureUrl}/>
      <h1>{user?.name}</h1>
      <button onClick={logout}>logout</button>
      </div>
    ): (
      <div>
        <button onClick={()=>loginWithRedirect()}>login</button>
      </div>
    )}
    
   
   </>
  )
}

export default App
