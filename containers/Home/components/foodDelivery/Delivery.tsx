import "./delivery.css";

export default function Delivery() {
  return (
    <section className="resturant_container">
      <div className="hero_frame resturant-content">
        <p className="sub_food">Courier</p>
        <div className="resturant-image">
          <img
            src="/images/Frame 2610228 (1).png"
            className="desktop-image"
            alt="resturant guys"
          />
          <div className="mobile-image">
            <img
              src="/images/image 160.png"
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
          <button className="resturant-btn_text">Courier</button>
          <h4 className="rest-subtitle">Food delivery & Moving</h4>
          <p className="rest-des">
            Need to move or deliver food? We've got the wheels and the expertise
            to make it happen seamlessly. Count on us for reliable
            transportation solutions tailored to your needs.
          </p>
          <a href="/" className="Check-Out_Vendors">
            Book Service
          </a>
        </div>
      </div>
    </section>
  );
}