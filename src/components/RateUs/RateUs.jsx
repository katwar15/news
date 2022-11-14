// import { Container } from "./RateUsStyle";
import iconStar from "./icon-star.svg";
import { useState } from "react";
import { Card } from "@mui/material";

const RateUs = (prop) => {
  const [rateUs, setRateUs] = useState(0);

  return (
    <Card>
      <img src={iconStar} alt="" />
      <p className="title">How did we do?</p>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <fieldset>
          <div>
            <label htmlFor="rating-1">
              1
              <input
                onClick={() => setRateUs(1)}
                type="radio"
                name="ratings"
                id="rating-1"
                value="1"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-2">
              2
              <input
                onClick={() => setRateUs(2)}
                type="radio"
                name="ratings"
                id="rating-2"
                value="2"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-3">
              3
              <input
                onClick={() => setRateUs(3)}
                type="radio"
                name="ratings"
                id="rating-3"
                value="3"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-4">
              4
              <input
                onClick={() => setRateUs(4)}
                type="radio"
                name="ratings"
                id="rating-4"
                value="4"
              />
            </label>
          </div>
          <div>
            <label htmlFor="rating-5">
              5
              <input
                onClick={() => setRateUs(5)}
                type="radio"
                name="ratings"
                id="rating-5"
                value="5"
              />
            </label>
          </div>
        </fieldset>
        <button onClick={() => prop.submitHandler(rateUs)} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
};

export default RateUs;
