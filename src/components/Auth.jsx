import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../actions/authActions';

const Auth = () => {
  const {isLoggedIn} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const handleLogin=()=>{
    dispatch(authActions.toggleAuth())
  }
  return (
    <div>
      <button className="btn btn-info" onClick={handleLogin}>{isLoggedIn?'Log Out':'Log In'}</button>
    </div>
  )
}

export default Auth
