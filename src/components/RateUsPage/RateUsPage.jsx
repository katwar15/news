import { useState } from "react";
import { Card } from "@mui/material";
import ThankYou from "../ThankYou/ThankYou";
import RateUs from "../RateUs/RateUs";

const RateUsPage = () => {
  const [selectedInput, setSelectedInput] = useState(0);

  const submitHandler = (rat) => {
    setSelectedInput(rat);
  };

  return (
    <div>
      <Card />
      {selectedInput ? (
        <ThankYou selectedInput={selectedInput} />
      ) : (
        <RateUs submitHandler={submitHandler} />
      )}
    </div>
  );
};

export default RateUsPage;
