import "./StarRating.css";
import StarSVG from "../StarSVG/StarSVG";
import StarEmptySVG from "../StarSVG/StarEmptySVG";
//import StarHalfSVG from "..StarSVG/StarHalfSVG";

const useRating = (ratingItem) => {
  let starArray = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= ratingItem) {
      starArray.push(<StarSVG />);
    } else {
      starArray.push(<StarEmptySVG />);
    }
  }
  return starArray;
};
console.log(useRating);

const StarRating = (props) => {
  return <div className="stars">{useRating(props.rating)}</div>;
};

export default StarRating;
