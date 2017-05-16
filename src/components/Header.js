import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div>
    <header>
      <h1>Sport 365</h1>
      <Link to="/about">Главная</Link>
      <Link to="/poweredby">Клубные карты</Link>
      <Link to="/">Активности</Link>
      <Link to="/">Спортивные магазины</Link>
      <Link to='/login'>Login</Link>
    </header>
  </div>
);

export default Header;
