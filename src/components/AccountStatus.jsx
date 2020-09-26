import React from 'react'
import { useSelector } from 'react-redux';

const AccountStatus = () => {
  const {isSavings} = useSelector(state => state.banking)
  return (
    <div>
      <h2>
      {isSavings?'Savings Account':'Checkings Account'}
      </h2>
    </div>
  )
}

export default AccountStatus
