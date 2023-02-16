import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./App.css";
import Chat from "./chat/Chat";

function App() {
  return (
    <div className="App">
      <div className="appfiles">
        <Navbar />
        <Body />
      </div>
      <div className="chat">
        <Chat />
      </div>
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
