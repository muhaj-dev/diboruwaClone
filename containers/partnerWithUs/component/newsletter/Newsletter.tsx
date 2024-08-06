import "./newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter_container">
      <div className="newsletter_width">
        <div className="newsletter_content">
          <p className="newsletter-text">Subscribed to Our Newsletter</p>
          <div className="newsletter-box">
            <input
              type="text"
              placeholder="Chikeziekelvin24@gmail.com"
              required
              className="newsletter_input"
            />
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </div>
        </div>
        <div className="newsletter-back-to-top">
          <p>Back to Top</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
