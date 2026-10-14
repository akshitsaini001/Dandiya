import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="text-white pt-5 pb-4 mt-auto"
      style={{
        backgroundColor: '#1E1022', // Deep midnight plum tone matching the Navratri theme
        borderTop: '3px solid #D81B60'
      }}
    >
      <div className="container mt-5">
        <div className="row g-4 justify-content-between">
          
          {/* Brand Info & Mission */}
          <div className="col-12 col-md-5 col-lg-4">
            <h4 className="fw-bold d-flex align-items-center gap-2 mb-2" style={{ color: '#F59E0B' }}>
              <i className="bi bi-stars"></i>
              <span>DandiyaMatch</span>
            </h4>
            <p className="text-white-50 small mb-3">
              Helping girls find trusted, enthusiastic dance partners for Navratri & Garba nights. Dance the night away with rhythm and confidence!
            </p>
           
          </div>

          {/* Quick Nav Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold text-uppercase mb-3 small" style={{ letterSpacing: '1px', color: '#D81B60' }}>
              Explore
            </h6>
            <ul className="list-unstyled text-white-50 small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" style={{textDecoration:'none', color:'#fff'}}>Home </Link>
              </li>
            </ul>
          </div>

          {/* Safety & Community Note */}
          <div className="col-6 col-md-4 col-lg-4">
            <h6 className="fw-bold text-uppercase mb-3 small" style={{ letterSpacing: '1px', color: '#D81B60' }}>
              Safety First
            </h6>
            <div className="p-3 rounded-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p className="small text-white-50 mb-0">
                <i className="bi bi-shield-check text-success me-2"></i>
                Always meet partners directly at well-lit, public festival venues or with a group of friends.
              </p>
            </div>
          </div>

        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-white-50 small gap-2">
          <p className="mb-0">
            &copy; {currentYear} DandiyaMatch. Made with <i className="bi bi-heart-fill text-danger mx-1"></i> for Navratri.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;