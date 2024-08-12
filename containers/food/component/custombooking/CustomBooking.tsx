import "./custombooking.css";
const CustomBooking = () => {
  return (
    <div className="custombooking_container">
      <div className="custombooking_frame">
        <div className="custombooking_search-min">
        <div className="min-buttons">
          <button className="min-button">All</button>
          <button className="min-button">30 Mins</button>
          <button className="min-button">45 Mins</button>
          <button className="min-button">1 Hr</button>
          <button className="min-button">2 Hr</button>
        </div>
        <div className="custombooking-search_box">
          <input
            type="text"
            placeholder="Search here"
            required
            className="custombooking-search_input"
          />
          <img
            src="/images/search-normal.svg"
            alt="search-normal"
            className="custombooking-search_img"
          />
        </div>

        </div>
        <button type="submit" className="custombooking-btn">
          Custom Booking
        </button>
      </div>
    </div>
  );
};
export default CustomBooking;
