import React from 'react'
import { useEffect } from 'react';

const Alert = ({msg, type, removeAlert, list}) => {
  useEffect(() => {
    const timeoutValue = setTimeout(() => {
      removeAlert(false, '', '')
    }, 3000)
    return () => clearTimeout(timeoutValue);
  }, [list])
  return (
   <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert
