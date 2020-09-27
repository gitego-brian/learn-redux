import React from 'react';

const style = {
  width:'fit-content',
  padding:'.5rem',
  margin:'1rem auto',
  borderRadius: '3px',
  textAlign: 'center',
  color:'whitesmoke',
  backgroundColor:'crimson'
}
const ToastError = ({ message }) => (
  <div style={style}>{message}</div>
);

export default ToastError;