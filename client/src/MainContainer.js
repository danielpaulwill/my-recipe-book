import { useState } from 'react'
import Login from "./Login";
import SignUp from "./SignUp";

function MainContainer() {
  const [errors, setErrors] = useState()
  
  const login = <Login />
  const signUp = <SignUp handleSignupClick={handleSignupClick} errors={errors} handleLoginClick={handleLoginClick} />

  const [currentPage, setCurrentPage] = useState(signUp)
  const [user, setUser] = useState()


  function handleSignupClick(username, password) {
    fetch('/users', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })})
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => setUser(data));
          // navigate('/game/setup')
          // window.scrollTo(0, 0);
        } else {
          res.json().then((err) => setErrors(err.errors))
        }})
      };

      function handleLoginClick() {
        setCurrentPage(login)
      }


  return (
    <div id='mainContainer'>
      {/* <h1>MainContainer</h1> */}
      {currentPage}
    </div>
  );
}

export default MainContainer;
