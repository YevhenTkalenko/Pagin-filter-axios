import Comment_Interface from "../../../types";

interface Props {
  slicedComments: Comment_Interface[];
  isChoosen: boolean;
}

const CommentsList = ({ slicedComments, isChoosen }: Props) => {
  return (
    <>
      <div className="container">
        {isChoosen &&
          slicedComments.map(({ body, id, email, name }) => (
            <div key={id} className="items">
              <div>
                <b>Name:</b> {name}
              </div>
              <div>
                <b>Email:</b> {email}
              </div>
              <div>
                <b>Comment:</b> {body}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default CommentsList;
