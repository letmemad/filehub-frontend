import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
export default function Logo() {
  return (
      <Link to="/dashboard">
          <img src={logo} alt="filehub" width="100" />
      </Link>
  );
}
