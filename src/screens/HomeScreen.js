import React from 'react'
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className='main'>
        <Link to="/test1">View Test 1</Link>
        <br/>
        <Link to="/test2">View Test 2</Link>
    </div>
  )
}

export default HomeScreen