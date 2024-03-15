import "./StarRating.css";
import StarSVG from "../StarSVG/StarSVG";
import StarEmptySVG from "../StarSVG/StarEmptySVG";
import StarHalfSVG from "../StarSVG/StarHalfSVG";
import { v4 as uuidv4 } from "uuid";
//import StarHalfSVG from "..StarSVG/StarHalfSVG";

const useRating = (ratingItem) => {
  let starArray = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= ratingItem) {
      starArray.push(<StarSVG key={uuidv4()} />);
    } else if (i - ratingItem < 1 && i - ratingItem > 0) {
      starArray.push(<StarHalfSVG key={uuidv4()} />);
    } else {
      starArray.push(<StarEmptySVG key={uuidv4()} />);
    }
  }
  return starArray;
};

const StarRating = (props) => {
  return <div className="stars">{useRating(Number(props.rating))}</div>;
};

export default StarRating;
