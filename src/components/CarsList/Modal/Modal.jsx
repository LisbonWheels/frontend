import "./modal.css";
import PropTypes from "prop-types";
import AddCarForm from "../AddCarForm/AddCarForm"

export default function Modal({showModal, show, handleSubmit}) {

  return (
    <div className="modal-container">
      <div className={show ? "modal" : "modalOff"} id="modal">
        {/* <h2>Add a new car to your fleet</h2> */}
        <div className="content"> 
          <AddCarForm handleSubmit={handleSubmit}/>
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={showModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,

};
