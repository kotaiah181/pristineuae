import "../CSS/navbarbelow.css";
const Navbarbelow = () => {
    

  return (
    <>
    
    <div className="navbarbelow">
      <div className="navbarbelow-inner">
        <div className="nb-left">
          <a href=" ">Home</a>
            <a href=" ">Services</a>
            <a href=" ">Infomation Security</a>
            <a href=" ">Network Security</a>
        </div>

        
      </div>
    </div>


 <section className="hero">
      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-tag">
            ----NETWORK SECURITY • INFRASTRUCTURE PROTECTION • UAE & GLOBAL
          </p>

          <h1 className="hero-title">
            Your Network Is <br />
            Your <span>First</span> & Last <br />
            Line of Defence
          </h1>

          <p className="hero-desc">
            Pristine InfoSolutions UAE delivers comprehensive enterprise network security —
            from deep-dive network VAPT and firewall hardening, to wireless security audits,
            zero trust architecture, and 24/7  network threat monitoring — protecting your 
            entire infrastructure across on-premise, cloud, and hybrid environments.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Secure My Network →</button>
            <button className="btn-outline">Explore Services</button>
          </div>
        </div>
         

        {/* RIGHT CARD */}
        <div className="hero-right">
          <div className="monitor-card">
            <p className="card-title">● LIVE NETWORK SECURITY MONITOR</p>

            <div className="card-section">
              <p>PERIMETER / DMZ</p>
              <div className="tags">
                <span className="yellow">● Firewall-01</span>
                <span className="green">● WAF-01</span>
                <span className="green">● IPS Cluster</span>
              </div>
            </div>

            <div className="card-section">
              <p>CORE NETWORK</p>
              <div className="tags">
                <span className="red">● Core-SW-01</span>
                <span className="green">● Router-02</span>
                <span className="yellow">● VLAN-Seg</span>
              </div>
            </div>
            <div className="card-section">
              <p>Wireless Infrastructure</p>
              <div className="tags">
                <span className="green">● AP-Floor1</span>
                <span className="yellow">● AP-Floor3</span>
                <span className="green">● WLC-01</span>
              </div>
            </div>
            <div className="stats">
        <div>
          <span>Active threats detected</span>
          <b className="red-text">3 Critical</b>
        </div>
        <div>
          <span>Anomalous traffic flows</span>
          <b className="red-text">7 flagged</b>
        </div>
        <div>
          <span>Firewall policy violations</span>
          <b className="blue-text">12 today</b>
        </div>
        <div>
          <span>Patch compliance</span>
          <b className="green-text">84%</b>
        </div>
        <div>
          <span>Network segmentation score</span>
          <b className="blue-text">6.2 / 10</b>
        </div>
      </div>
      </div>

          </div>
        </div>
    </section>
        <div className="hero1">
        <div className="stats-container">

        <div className="stat-box">
          <h2>500<span>+</span></h2>
          <p>Network assessments completed</p>
        </div>

        <div className="stat-box">
          <h2>14<span>+</span></h2>
          <p>Years network security expertise</p>
        </div>

        <div className="stat-box">
          <h2>99<span>%</span></h2>
          <p>Critical findings resolved post-assessment</p>
        </div>

        <div className="stat-box">
          <h2>24<span>/7</span></h2>
          <p>Network threat monitoring capability</p>
        </div>
        </div>
        
        </div>
       
      <div className="cert-container">

      <div className="cert-row">
        <span> ISO 27001:2013 Certified</span>
        <span> NIST SP 800-115 Methodology</span>
        <span> CIS Benchmarks Aligned</span>
        <span> NESA / UAE NIA Compliant</span>
        <span> MITRE ATT&CK (Enterprise)</span>
      </div>

      <div className="cert-row center">
        <span>✔ Zero Trust Architecture (NIST 800-207)</span>
        <span>✔ CBUAE Regulatory Aligned</span>
      </div>

    </div>
    

     
    </>
  );
};

export default Navbarbelow;