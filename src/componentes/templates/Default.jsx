import React, { useState } from 'react';
import logo from '../../images/logo.svg';

import Footer from '../organisms/Footer';
import DrawerMenu from '../molecules/DrawerMenu';
import { Link } from 'react-router-dom';
// import Head from '../organisms/Head';

export default function Default(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className='wrapper'>
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className='app-header'>
        <div className='app-header__logo'>
          <Link to='/'>
            <img src={logo} className='responsive' alt='' />
          </Link>
        </div>

        <div className='app-header__menu'>
          <i onClick={() => setOpen(true)} className='fa fa-bars'></i>
        </div>
      </div>
      {props.children}
      <Footer />
    </div>
  );
}

/* Depois pesquisar sobre props e chlidren props*/
/*Caso queira colocar dois elementos embaixo do return usar uma div ou <></>*/
