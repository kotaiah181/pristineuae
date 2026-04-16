import "../CSS/topbar.css";
const TopBar = () => {
    

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="tb-left">
          <a href="tel:+971509341410">📞 +971 509341410</a>
          <a href="mailto:contact@pristineuae.com"> 
            ✉ contact@pristineuae.com
          </a>
            <a href="">24/7 Emergency Response</a>
            <a href=""> Client Portal </a>
        </div>

        <div className="tb-right">
          <div className="tb-cert">ISO 27001:2013 Certified</div>
          <div className="tb-cert">ISO 9001:2015 </div>
          <div className="tb-cert">NASSCOM Member</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;