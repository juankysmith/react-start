import * as React from 'react';
import './Footer.css';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div className="footer" >
        <div className="footer-overfooter" />
        <div className="footer-footer" />
      </div>
    );
  }
}

export default Footer;