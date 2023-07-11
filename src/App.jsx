import { useState } from "react";
import Counter from "./components/Counter";
import { styled } from "styled-components";
import Light from "./components/Light";

function App() {
  const [counters, setCounters] = useState({
    rows: 0,
    columns: 0,
  });

  const handleCounterChange = (label, value) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [label]: value,
    }));
  };

  return (
    <AppStyle>
      <h1>{counters.rows + counters.columns} bulbs</h1>
      <Counter
        value={counters.rows}
        onChange={handleCounterChange}
        label="rows"
      />
      <Counter
        value={counters.columns}
        onChange={handleCounterChange}
        label="columns"
      />
      <Light />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  > *:last-child {
    margin-left: 30px;
  }
`;

export default App;
