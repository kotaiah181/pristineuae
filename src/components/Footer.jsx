import "../CSS/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <h4 className="footer-brand">
          PRISTINE <span>InfoSolutions</span> UAE
        </h4>

        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Responsible Disclosure</a>
          <a href="#">Sitemap</a>
        </nav>

        <p className="footer-copy">
          © 2025 Pristine InfoSolutions FZ-LLC. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;