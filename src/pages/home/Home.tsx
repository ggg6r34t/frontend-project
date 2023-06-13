import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Paper } from "@mui/material";

export default function Home() {
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    const calculateSliderHeight = () => {
      const windowHeight = window.innerHeight;
      const maxHeight = windowHeight > 970 ? windowHeight : 970; // Set a minimum height of 600px
      setSliderHeight(maxHeight);
    };

    calculateSliderHeight();
    window.addEventListener("resize", calculateSliderHeight);

    return () => {
      window.removeEventListener("resize", calculateSliderHeight);
    };
  }, []);

  return (
    <Paper style={{ height: sliderHeight }}>
      <AwesomeSlider bullets={false} startup={true}>
        <div>
          <video
            style={{ objectFit: "contain", height: "100%" }}
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
            style={{ objectFit: "contain", height: "100%" }}
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
            style={{ objectFit: "contain", height: "100%" }}
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
