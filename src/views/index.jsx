import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../components/Auth';
import Posts from '../components/Posts';

const Home = () => {
  const {isLoggedIn} = useSelector((state)=>state.auth)
  return (
    <div>
      <Auth />
      {isLoggedIn && <Posts />}
      
    </div>
  );
};

export default Home;
