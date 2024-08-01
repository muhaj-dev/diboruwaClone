import "./foodvendors.css";
function FoodVendors() {
  return (
    <section className="vendor_container">
      <div className="vendor_width">
        <div className="vendor_img">
          <img
            src="/images/Frame 2611543.png"
            className="vendor_img-content"
            alt=""
          />
        </div>
        <div className="vendor_text-content">
          <ul className="vendor_text-ul">
            <li className="vendor_text-li">Food vendors</li>
          </ul>
          <div className="vendor_img-text">
            <img
              src="/images/Frame 2611540 (1).png"
              className="vendor_img-text_content"
              alt=""
            />
          </div>
          <div className="vendor_img-transparent">
            <img
              src="/images/image 249.png"
              className="vendor_img-transparent_content"
              alt=""
            />
          </div>
          <a href="/" className="vendor_signup">Sign Up</a>
        </div>
      </div>
    </section>
  );
}

export default FoodVendors;
