import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('https://blog-backend-pt7b.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://blog-backend-pt7b.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  const isAdmin = userInfo?.isAdmin;

  return (
    <header>
      <Link to="/blogs" className="logo">E-Cell Blog</Link>
      <nav>
        {username && (
          <>
            {isAdmin && <Link to="create">Create new post</Link> }
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
      </nav>
    </header>
  );
}
