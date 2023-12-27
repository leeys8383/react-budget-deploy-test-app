import React from 'react'
import './Alert.css';
import { type } from '@testing-library/user-event/dist/type';

// Alert를 위한 컴포넌트 생성
const Alert = ({ type, text }) => {
  return (
    <div className={`alert alert-${type}`}>{text}</div>
  )
}

export default Alert