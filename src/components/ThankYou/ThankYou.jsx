import thankYouImg from "./illustration-thank-you.svg";
import { Card } from "@mui/material";

const ThankYou = ({ selectedInput }) => {
  return (
    <Card>
      <img src={thankYouImg} alt="Thank you" />
      <div className="rating-output">
        <p>You selected {selectedInput} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <button></button>
    </Card>
  );
};

export default ThankYou;
