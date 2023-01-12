import "./modal.css";
import PropTypes from "prop-types";
import AddCarForm from "../AddCarForm/AddCarForm"

export default function Modal({showModal, show, handleSubmit}) {
  console.log(showModal);
  // const onClose = (e) => {
  //   onClose(e);
  // };
  return (
    <div className={show ? "modal" : "modalOff"} id="modal">
      <h2>Add new Car to your fleet</h2>
      <div className="content"> 
        <AddCarForm handleSubmit={handleSubmit}/>
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={showModal}>
          close
        </button>
      </div>
    </div>
  );
}
Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,

};
