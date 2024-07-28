import "./groomingService.css";

export default function GroomingService() {
  return (
    <section className="resturant_container">
      <div className="hero_frame resturant-content">
        <p className="sub_food">Grooming</p>
        <div className="resturant-image">
          <img
            src="/images/Frame 2610228 (2).png"
            className="desktop-image"
            alt="resturant guys"
          />
          <div className="mobile-image">
            <img
              src="/images/image 160 (1).png"
              className="img-main"
              alt="resturant guys"
            />
            <img
              src="/images/image 158.png"
              className="mobile-img"
              alt="resturant guys"
            />
          </div>
        </div>
        <div className="resturant-text_container">
          <button className="resturant-btn_text">Grooming</button>
          <h4 className="rest-subtitle">Grooming Service</h4>
          <p className="rest-des">
            ransforming your look has never been easier. Skip the trip to the
            barbershop and indulge in the luxury of professional grooming right
            in the comfort of your own home.
          </p>
          <a href="/" className="Check-Out_Vendors">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
