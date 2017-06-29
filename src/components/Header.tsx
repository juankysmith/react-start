import * as React from 'react';
import './Header.css';

// const logo = require('../logo.svg');

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="header">
        <div className="header-overheader" />
        <div className="header-header">
          {/*<img src={logo} className="header-logo" alt="logo" />*/}
          <h2 className="header-title">Playing with React</h2>
        </div>
        <div className="header-subheader" />
      </div>
    );
  }
}

export default Header;
