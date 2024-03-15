import "./FilterButton.css";

const FilterButton = (props) => {
  return (
    <>
      <button className="solid-button" type="button">
        {props.Title}
      </button>
    </>
  );
};

export default FilterButton;
