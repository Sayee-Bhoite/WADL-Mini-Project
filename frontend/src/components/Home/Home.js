import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className='home-container'>
      <div>
        <span style={{ fontSize: 108, fontWeight: 500 }}>To-Do App</span>
        
      </div>
      <div className='reg-box'>
      <Link
          to='/todo'
          className='home-link'
          style={{ border: '2px black solid' }}
        >
          Add Task
        </Link>
      </div>
    </div>
  );
}

export default Home;
