import "./deliveryservice.css";
const DeliveryService = () => {
      return (
        <section className="deliveryservice_container">
          <div className="deliveryservice_width">
            <div className="deliveryservice-img-text">
            <div className="deliveryservice_img">
              <img
                src="/images/Rectangle 318.png"
                className="deliveryservice_img-content"
                alt=""
              />
            </div>
            <div className="deliveryservice_text-content">
              <ul className="deliveryservice_text-ul">
                <li className="deliveryservice_text-li">Moving & food delivery service</li>
              </ul>
              <div className="deliveryservice_img-text">
                <img
                  src="/images/Frame 2611540 (2).png"
                  className="deliveryservice_img-text_content"
                  alt=""
                />
              </div>
              <div className="deliveryservice_img-transparent">
                <img
                  src="/images/Ellipse 109.png"
                  className="deliveryservice_img-transparent_content"
                  alt=""
                />
              </div>
              <a href="/" className="deliveryservice_signup">
                Sign Up
              </a>
            </div>
            </div>
            <div className="deliveryservice_overlay-img">
              <img
                src="/images/Frame 2609672.png"
                className="deliveryservice_overlay-img_content"
                alt=""
              />
            </div>
          </div>
        </section>
      );
    }
export default DeliveryService;