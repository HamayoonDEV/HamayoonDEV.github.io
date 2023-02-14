import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />;
      <div className="appfooter">
        <Link to="https://www.youtube.com/@ToopakExtra/streams">
          <Footer Icon={YouTubeIcon} color="white" />
        </Link>
        <Link to="https://www.instagram.com/ig_toopak/">
          <Footer Icon={InstagramIcon} color="white" />
        </Link>
        <Link to="https://www.facebook.com/officialtoopakyt">
          <Footer Icon={FacebookIcon} color="white" />
        </Link>
      </div>
    </div>
  );
}

export default App;
