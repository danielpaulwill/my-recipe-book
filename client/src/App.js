import './App.css';
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  const login = <Login />
  const signUp = <SignUp />
  

  return (
    <div>
      <Navbar />
      <MainContainer />

    </div>
  );
}

export default App;
