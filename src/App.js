import React from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {

  const isAuth = useSelector((state) => state.auth.isAuth)
  return (
    <React.Fragment>
    <Header></Header>
    {!isAuth && <Auth></Auth>}
    {isAuth && <UserProfile></UserProfile>}
    <Counter />
    </React.Fragment>
  );
}

export default App;
