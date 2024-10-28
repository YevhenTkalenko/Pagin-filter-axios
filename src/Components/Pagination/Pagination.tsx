import "./Pagination.css";

interface Props {
  totalComments: number;
  commentsPerPage: number;
  handlePagination: (chosenPage: number) => void;
  isChoosen: boolean;
}

const Pagination = ({
  totalComments,
  commentsPerPage,
  handlePagination,
  isChoosen,
}: Props) => {
  let buttonsGenerator: number[] = [];

  for (let i = 1; i < totalComments / commentsPerPage; i++) {
    buttonsGenerator.push(i);
  }

  return (
    <>
      {isChoosen &&
        buttonsGenerator.map((el) => (
          <button key={el} onClick={() => handlePagination(el)}>
            {el}
          </button>
        ))}
    </>
  );
};
export default Pagination;
