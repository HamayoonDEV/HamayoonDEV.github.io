import ReactPlayer from "react-player";
import "./Body.css";

const Body = () => {
  const setDate = {
    date: new Date().toLocaleString(),
  };
  return (
    <div className="body">
      <h1>Toopak Sports Live</h1>
      <h4>{setDate.date}</h4>
      <div className="video">
        <ReactPlayer
          url="https://www.ptvsportstv.com.pk/live/#brid_cp_Brid_66042447
          "
          playing={false}
          controls
          volume={1}
        />
      </div>
    </div>
  );
};

export default Body;
