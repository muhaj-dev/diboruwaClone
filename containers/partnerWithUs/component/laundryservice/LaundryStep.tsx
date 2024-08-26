
import { IoIosCheckmark } from "react-icons/io";
const LaundryStep = () => {
  return (
    <div className="LaundryStep-content">
      <ul className="LaundryStep-ul">
        <span className="LaundryStep_cicle"></span>
        <li className="LaundryStep-li">Food vendors</li>
      </ul>
      <div className="laundry_img-text">
        <div className="LaundryStep_get_started_container">
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Sign Up
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Create your account and provider basic information.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Menu Setup
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Customize you menu with dishes and prices.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
              <div className="careers_line__N8bur">
                <span className="foodvendor_line"></span>
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="Foodvendor_get_started_icon_div">
                {" "}
                Set Location
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Specify your business location and hours.
              </p>
            </div>
          </div>
          <div className="LaundryStep_get_started_content">
            <div className="LaundryStep_get_started_icon_div">
              <div className="round_progress_line">
                <IoIosCheckmark className="careers_interview-item-left-tags__u0bD1" />
              </div>
            </div>
            <div className="LaundryStep_get_started_text_div">
              <small className="LaundryStep_get_started_icon_div">
                {" "}
                Launch Store
              </small>
              <p className="LaundryStep_get_started_icon_div">
                Start accepting orders and reaching hungry customers.
              </p>
            </div>
          </div>
        </div>
        <a href="/" className="vendor_signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default LaundryStep;
