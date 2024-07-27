import "./restcontent.css";
export default function Resturant() {
  return (
    <section className="resturant-content">
      <div className="rest-title">
        <h1 className="rest-title-h1">Our Services</h1>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <p>Food</p>
      <div className="resturant-image">
        <img
          src="/images/Frame 2610228.png"
          className="desktop-image"
          alt="resturant guys"
        />
        <div className="mobile-image">
          <img
            src="/images/image 159.png"
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
        <button className="resturant-btn_text">Resturant</button>
        <h4 className="rest-subtitle">
          Over 100 food vendors are waiting for your order!
        </h4>
        <p className="rest-des">
          Explore our mouthwatering menu featuring dishes from top restaurants.
          Each item lists preparation time, so you'll know when to expect your
          meal. Discover new favorites today!
        </p>
        <a href="/" className="Check-Out_Vendors">
          Check Out Vendors
        </a>
      </div>
    </section>
  );
}
