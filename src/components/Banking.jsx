import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as bkActions from '../actions/bankingActions';

const Banking = () => {
  const [amount,setAmount] = useState("");
  const dispatch = useDispatch();
  const handleDeposit = ()=>{
    dispatch(bkActions.deposit(parseInt(amount)));
  }
  const handleWithdraw = ()=>{
    dispatch(bkActions.withdraw(parseInt(amount)));
  }
  const handleInterest = ()=>{
    dispatch(bkActions.collectInterest());
  }
  const handleDelete = ()=>{
    dispatch(bkActions.deleteAccount());
  }
  const handleChangeAcc = ()=>{
    dispatch(bkActions.changeAccType());
  }

  return (
    <div className="form-group">
      <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="text" className="form-control"/>
      <button className="btn btn-success m-2" onClick={handleDeposit} >Deposit</button>
      <button className="btn btn-primary m-2" onClick={handleWithdraw} >Withdraw</button>
      <button className="btn btn-warning m-2" onClick={handleInterest} >Collect interest</button>
      <button className="btn btn-danger m-2" onClick={handleDelete} >Delete Account</button>
      <button className="btn btn-secondary m-2" onClick={handleChangeAcc}>Change account type</button>
    </div>
  )
}

export default Banking
