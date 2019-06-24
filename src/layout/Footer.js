import React from 'react';

const getYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      Copyright &copy; {getYear()}  Big Bang Design. All rights reserved.
    </footer>
  );
};

export default Footer;