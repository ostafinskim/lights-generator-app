import PropTypes from "prop-types";
import { IconDecrement } from "./IconDecrement";
import { IconIcrement } from "./IconIcrement";
import { styled } from "styled-components";

const Counter = ({ value, label, onChange }) => {
  const handleIncrement = () => {
    if (label === "columns" && value >= 9) return;
    onChange(label, value + 1);
  };

  const handleDecrement = () => {
    if (value <= 0) return;
    onChange(label, value - 1);
  };

  return (
    <CounterStyle>
      <h2>
        {value} {label}
      </h2>
      <div>
        <IconDecrement onClick={handleDecrement} />
        <IconIcrement onClick={handleIncrement} />
      </div>
    </CounterStyle>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

const CounterStyle = styled.div`
  display: flex;
  div {
    display: flex;
    margin-left: 0.5rem;
  }
  button {
    display: block;
    margin-left: 0.3rem;
  }
`;

export default Counter;
