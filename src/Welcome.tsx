import './Welcome.css'
import { Link } from "react-router-dom";

function Welcome() {
  
  return (
    <div className="Main__container">
      <h1>Face Detector</h1>
      <p>
        This is a simple demo of the face detection API BlazeFace
      </p>
      <Link to='/detector' className='button__App'>Detect</Link>
    </div>
  );
}

export default Welcome;