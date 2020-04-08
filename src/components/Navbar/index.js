import React from 'react';
import { Link } from 'react-router-dom'

// Components
import Logo from '../Logo'

import api from '../../services/api'
// Styles
import {
     Nav,
     Input
    } from './styles';

export default function Navbar({ user, onSearch }) {

  function handleSearchFile(name) {
   api.get(`/files/search?name=${name}`, { headers: { 
     Authorization: `Bearer ${localStorage.getItem('@u_id')}`
    } }).then((response) => {
     onSearch(response.data)
   }) 
  }

  return (
    <>
        <Nav>
            <Logo />
            <Input type="search" placeholder="Search for file..." onChange={ (e) => handleSearchFile(e.target.value) }/>
            <Link to="/profile">
              <img style={{
                  borderRadius: "50%"
              }} src={ user.picture_url } alt="circle" width="50" height="50"/>
            </Link>
        </Nav>
    </>
  );
}
