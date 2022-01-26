import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import Hamburger from 'hamburger-react';

import logo from '../asset/images/Logo.png';
import Button from './Button';

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className='bg-background min-h-screen'>
        <div className='bg-white flex justify-center'>
        <div className='w-full max-w-7xl flex relative place-items-center justify-between px-4 lg:px-24 py-2'>
          <img src={logo} alt='logo' />
          <div className='lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        </div>
        {isOpen ? (
          <div className='h-screen w-full px-14 py-6 bg-white fixed z-20'>
            <Button type='outline' className='w-full' onClick={() => {}}>
              Create NEAR Wallet
            </Button>
          </div>
        ) : null}
        <div className='flex justify-center'>{props.children}</div>
      </div>
    </>
  );
};

export default Navbar;
