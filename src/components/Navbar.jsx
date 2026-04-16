import "../CSS/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <div className="logo">
          <div className="logo-box">🛡</div>
          <div className="logo-text">
            <div className="logo-main">Pristine InfoSolutions</div>
            <div className="logo-sub">UAE · GLOBAL CYBERSECURITY</div>
          </div>
        </div>

        {/* MENU */}
        <div className="nav-links">
          <a href="#">Services</a>
          <a href="#" className="active">Network Security</a>
          <a href="#">Advisory & GRC</a>
          <a href="#">Industries</a>
          <a href="#">Research</a>
          <a href="#">Company</a>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="nav-buttons">
          <button className="btn-outline">Client Portal</button>
          <button className="btn-primary">Request Assessment</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;