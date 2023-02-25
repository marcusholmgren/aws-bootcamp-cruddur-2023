import './JoinSection.css';
import { Link } from 'react-router-dom';
import React from 'react';

export default function JoinSection() {
  return (
    <div className='join'>
      <div className='join-title'>Join The Party!</div>
      <div className='join-content'>
        <p>Have something you want to say?</p>
        <p>Don&apos;t think about it, just crud it!</p>
        <p>Regret it? No worries, We&apos;ll forget it...</p>
        <Link to='/signup' className='action'>
          Join Now!
        </Link>
        <Link to='/signin' className='subaction'>
          Sign In
        </Link>
      </div>
    </div>
  );
}
