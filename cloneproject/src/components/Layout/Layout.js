import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <footer className="footer">© 2025 Task Manager</footer>
    </div>
  );
};

export default Layout;
