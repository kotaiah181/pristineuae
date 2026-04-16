import "../CSS/cta.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-inner">
        
        <h2 className="cta-title">
          Secure Your Network Infrastructure Today
        </h2>

        <p className="cta-desc">
          Speak with a Pristine network security specialist about your assessment,
          hardening, or monitoring requirements. Proposals delivered within 24
          hours. All engagements under strict NDA.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">
            🛡 Request Network Assessment
          </button>

          <button className="btn-outline">
            📞 +971 509341410
          </button>

          <button className="btn-outline">
            💬 WhatsApp Us Now
          </button>
        </div>

        <p className="cta-footer">
          ISO 27001 Certified · NIST SP 800-115 · CIS Benchmarks · UAE NESA &
          CBUAE Aligned · Free Retest Included
        </p>

      </div>
    </section>
  );
};

export default CTA;