
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Routing from "./Routes/Routing";


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="mx-5 my-2">
          <Routing />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
