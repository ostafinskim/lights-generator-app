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

  const renderGrid = () => {
    const gridItems = [];

    for (let row = 0; row < counters.rows; row++) {
      for (let col = 0; col < counters.columns && col < 9; col++) {
        gridItems.push(
          <div key={`item-${row}-${col}`} className="grid-item">
            <Light />
          </div>
        );
      }
    }
    return gridItems;
  };

  return (
    <AppStyle $columns={counters.columns}>
      <div className="wrapper">
        <h1>{counters.rows * counters.columns} bulbs</h1>
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
      </div>
      <div className="container">{renderGrid()}</div>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  max-width: 981px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .wrapper {
    display: flex;
    > * {
      margin-right: 1rem;
    }
  }
  .container {
    display: grid;
    grid-template-columns: ${(props) => `repeat(${props.$columns}, 109px)`};
  }
`;

export default App;
