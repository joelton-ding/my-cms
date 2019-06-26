import React from 'react';

const getYear = () => {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      Copyright &copy; {getYear()}  XXXXX. All rights reserved.
    </footer>
  );
};

export default Footer;