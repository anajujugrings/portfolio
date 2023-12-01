// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav style={{ backgroundColor: '#231952', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/">Inicial</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/typescript">TypeScript</Link>
        </li>
        <li style={{ display: 'inline-block', margin: '0 15px' }}>
          <Link to="/reactt">React</Link>
        </li>
      </ul>
    </nav>
  );
}
