import "./laundryservice.css";
const LaundryService = () => {
  return (
    <section className="laundry_container">
      <div className="laundry_width">
        <div className="laundry-img-text">
          <div className="laundry_img">
            <img
              src="/images/Rectangle 321.png"
              className="laundry_img-content"
              alt=""
            />

            <div className="laundry_overlay-img">
              <img
                src="/images/component 79.png"
                className="laundry_overlay-img_content"
                alt=""
              />
            </div>
          </div>
          <div className="laundry_text-content">
            <ul className="laundry_text-ul">
              <li className="laundry_text-li">Laundry</li>
            </ul>
            <div className="laundry_img-text">
              <img
                src="/images/Frame 2611540 (3).png"
                className="laundry_img-text_content"
                alt=""
              />
            </div>
            <a href="/" className="laundry_signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LaundryService;
