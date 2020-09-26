import React from 'react';
import { useSelector } from 'react-redux';
import AccountStatus from '../components/AccountStatus';
import Auth from '../components/Auth';
import Balance from '../components/Balance';
import Banking from '../components/Banking';

const Home = () => {
  const {isLoggedIn} = useSelector((state)=>state.auth)
  return (
    <div>
      <h1>Welcome to Banking</h1>
      <Auth />

      {isLoggedIn&&
        <>
      <Balance />
      <Banking />
      <AccountStatus />
      </>}
      
    </div>
  );
};

export default Home;
