import "./barbingservice.css";
const BarbingService = () => {
  return (
    <section className="barbingservice_container">
      <div className="barbingservice_width">
        <div className="barbingservice-img-text">
          <div className="barbingservice_img">
            <img
              src="/images/Rectangle 319.png"
              className="barbingservice_img-content"
              alt=""
            />

            <div className="barbingservice_overlay-img">
              <img
                src="/images/Frame 2609849.png"
                className="barbingservice_overlay-img_content"
                alt=""
              />
            </div>
          </div>
          <div className="barbingservice_text-content">
            <ul className="barbingservice_text-ul">
              <li className="barbingservice_text-li">Grooming</li>
            </ul>
            <div className="barbingservice_img-text">
              <img
                src="/images/Frame 2611540.png"
                className="barbingservice_img-text_content"
                alt=""
              />
            </div>
            <div className="barbingservice_img-transparent">
              <img
                src="/images/Ellipse 108.png"
                className="barbingservice_img-transparent_content"
                alt=""
              />
            </div>
            <a href="/" className="barbingservice_signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BarbingService;
