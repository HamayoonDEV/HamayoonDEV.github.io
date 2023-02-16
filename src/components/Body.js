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
      <div className="videos">
        <ReactPlayer
          url="https://youtu.be/bMy37-P3cCc"
          playing={false}
          controls
          volume={1}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Body;
