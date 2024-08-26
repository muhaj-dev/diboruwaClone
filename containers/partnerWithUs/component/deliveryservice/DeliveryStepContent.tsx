import { IoIosCheckmark } from "react-icons/io";

const DeliveryStepContent = () => {
  return (
    <div className="DeliveryStepContent-content">
      <ul className="DeliveryStepContent-ul">
        <span className="DeliveryStepContent_cicle"></span>
        <li className="DeliveryStepContent-li">Food vendors</li>
      </ul>
      <div className="DeliveryStepContent_get_started_container">
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Sign Up
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Create your account and provider basic information.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Menu Setup
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Customize you menu with dishes and prices.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
            <div className="careers_line__N8bur">
              <span className="foodvendor_line"></span>
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Set Location
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Specify your business location and hours.
            </p>
          </div>
        </div>
        <div className="DeliveryStepContent_get_started_content">
          <div className="DeliveryStepContent_get_started_icon_div">
            <div className="round_progress_line">
              <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
            </div>
          </div>
          <div className="DeliveryStepContent_get_started_text_div">
            <small className="DeliveryStepContent_get_started_icon_div">
              {" "}
              Launch Store
            </small>
            <p className="DeliveryStepContent_get_started_icon_div">
              Start accepting orders and reaching hungry customers.
            </p>
          </div>
        </div>
      </div>
      <a href="/" className="vendor_signup">
        Sign Up
      </a>
      <div className="deliveryservice_overlay-img">
        <img
          src="/images/Ellipse 109.png"
          className="deliveryservice_overlay-img_content"
          alt=""
        />
      </div>
    </div>
  );
};

export default DeliveryStepContent;
