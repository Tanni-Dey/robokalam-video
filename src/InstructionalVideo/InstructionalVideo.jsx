import { BsFillMicMuteFill, BsCameraVideo } from "react-icons/bs";
import { MdOutlineFrontHand } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { MdOutlineCallEnd } from "react-icons/md";

const InstructionalVideo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-photo/freelance-asian-girl-sitting-home-working-with-laptop-smiling-camera-young-woman-using-com_1258-84156.jpg?w=2000"
            alt="img"
          />
        </div>
        <div className="col-md-3">
          <img
            className="img-fluid mb-3"
            src="https://img.freepik.com/free-photo/freelance-asian-girl-sitting-home-working-with-laptop-smiling-camera-young-woman-using-com_1258-84156.jpg?w=2000"
            alt=""
          />
          <img
            className="img-fluid mb-3"
            src="https://img.freepik.com/free-photo/freelance-asian-girl-sitting-home-working-with-laptop-smiling-camera-young-woman-using-com_1258-84156.jpg?w=2000"
            alt=""
          />
          <img
            className="img-fluid"
            src="https://img.freepik.com/free-photo/freelance-asian-girl-sitting-home-working-with-laptop-smiling-camera-young-woman-using-com_1258-84156.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="m-2 d-flex align-items-center justify-content-center">
          <a href="#0" className="text-black-50 fs-3 me-3">
            <BsFillMicMuteFill />
          </a>
          <a href="#0" className="text-black-50 fs-3 me-3">
            <BsCameraVideo />
          </a>
          <a href="#0" className="text-black-50 fs-3 me-3">
            <MdOutlineFrontHand />
          </a>
          <a href="#0" className="text-black-50 fs-3 me-3">
            <FiShare />
          </a>
          <a href="#0" className="fs-1">
            {/* <span className="text-white bg-danger p-2 rounded-pill  fs-3"> */}
            <MdOutlineCallEnd className="text-white bg-danger p-2 rounded-pill" />
            {/* </span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructionalVideo;
