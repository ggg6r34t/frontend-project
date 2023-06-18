import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Paper } from "@mui/material";

export default function Home() {
  return (
    <Paper>
      <AwesomeSlider bullets={false} startup={true} fillParent={true}>
        <div>
          <video
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/mixkit-old-fashioned-couple-portrait-in-a-vintage-room-41517.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/pexels-cottonbro-studio-4727645-3840x2160-50fps.mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        <div>
          <video
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/mixkit-mafia-man-and-woman-in-a-dark-playroom-41911.mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        <div>
          <video
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/pexels-cottonbro-studio-7969938-4096x2160-25fps.mp4")}
              type="video/mp4"
            />
          </video>
        </div>

        <div>
          <video
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            autoPlay
            loop
            muted
          >
            <source
              src={require("../../assets/pexels-maksim-goncharenok-5642529-1920x1080-25fps.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </AwesomeSlider>
    </Paper>
  );
}
