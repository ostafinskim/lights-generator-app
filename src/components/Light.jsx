import { useState } from "react";
import { colorRandomizer } from "../lib/colorRandomizer";
import { styled } from "styled-components";

const Light = () => {
  const [status, setStatus] = useState(true);
  const lightColors = ["blue", "green", "orange", "pink", "red", "yellow"];

  const handleLight = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  const randomColor = colorRandomizer(lightColors);

  return (
    <BulbStyles onClick={handleLight}>
      {status ? (
        <img
          src={`./images/light-${randomColor}.svg`}
          alt="bulb"
          className="on"
        />
      ) : (
        <img src={`./images/off.svg`} alt="bulb" className="off" />
      )}
    </BulbStyles>
  );
};

const BulbStyles = styled.div`
  img {
    max-width: 70px;
    width: 100%;
  }
  img.off {
    filter: grayscale(100%);
    opacity: 0.7;
  }
  img.on {
    filter: grayscale(0);
  }
`;

export default Light;
