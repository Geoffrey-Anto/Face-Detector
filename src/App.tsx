import { Routes, Route } from "react-router-dom";
import Detector from './Detector';
import Welcome from './Welcome';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/detector" element={<Detector />} />
      </Routes>
    </div>
  );
}

export default App;
