import Comment_Interface from "../../../types";
import "./Input.css";
import ModalFiltered from "./ModalFiltered/ModalFiltered";

interface Props {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  slicedComments: Comment_Interface[];
  isVisible: boolean;
  handleChoosen: () => void;
}

const Input = ({
  handleFilter,
  slicedComments,
  isVisible,
  handleChoosen,
}: Props) => {
  return (
    <div className="input__container">
      <label htmlFor="comment">
        <span>Search:</span>
        <input
          type="text"
          id="comment"
          name="comment"
          className="input"
          onChange={(e) => handleFilter(e)}
        />
      </label>
      <ModalFiltered
        slicedComments={slicedComments}
        isVisible={isVisible}
        handleChoosen={handleChoosen}
      />
    </div>
  );
};
export default Input;
