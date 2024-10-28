import Comment_Interface from "../../../../types";
import "./ModalFiltered.css";

interface Props {
  slicedComments: Comment_Interface[];
  isVisible: boolean;
  handleChoosen: () => void;
}

const ModalFiltered = ({ slicedComments, isVisible, handleChoosen }: Props) => {
  let filteredCommentsLength = slicedComments.length;

  return (
    <>
      {filteredCommentsLength === 0 ? (
        <div className="modal__container__empty">Sorry, no post for search</div>
      ) : (
        <div
          className={isVisible ? "modal__container" : "modal__container__invis"}
        >
          <div className="modal__wrapper">
            {filteredCommentsLength > 10 ? (
              <ol className="modal__list">
                {slicedComments.slice(0, 11).map(({ body, id }) => (
                  <li className="modal__items" key={id}>
                    {body.length > 45 ? `${body.slice(0, 45)}...` : body}
                  </li>
                ))}
                <li className="modal__help">
                  <button
                    className="modal__btn"
                    onClick={() => handleChoosen()}
                  >
                    View more than: {filteredCommentsLength - 10} variants
                  </button>
                </li>
              </ol>
            ) : (
              <ol className="modal__list">
                {slicedComments.map(({ body, id }) => (
                  <li className="modal__items" key={id}>
                    {body.length > 45 ? `${body.slice(0, 45)}...` : body}
                  </li>
                ))}
                <li className="modal__help" onClick={() => handleChoosen()}>
                  <button className="modal__btn">View all variants</button>
                </li>
              </ol>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default ModalFiltered;
