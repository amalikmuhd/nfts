import { useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spiner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div>
      <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spiner;

export const SpinerDark = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#16151a");

  return (
    <div>
      <GridLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
