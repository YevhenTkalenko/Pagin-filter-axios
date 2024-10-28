import React, { useEffect, useState } from "react";
import { useFetch } from "./Components/Api/useFetch";

import "./App.css";
import Comment_Interface from "../types";
import CommentsList from "./Components/CommentsList/CommentsList";
import Input from "./Components/Input/Input";
import Pagination from "./Components/Pagination/Pagination";

interface Props {}

function App(props: Props) {
  const { allComments, isLoading, isError } = useFetch();
  const [filteredComments, setFilterdComments] = useState<Comment_Interface[]>(
    []
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isChoosen, setIsChosen] = useState<boolean>(false);
  const [commentsPerPage] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastPageIndex = currentPage * commentsPerPage;
  const firstPageIndex = lastPageIndex - commentsPerPage;
  const slicedComments = filteredComments.slice(firstPageIndex, lastPageIndex);

  useEffect(() => {
    setFilterdComments(allComments);
  }, [allComments]);

  if (isError) {
    return <div>Error!!</div>;
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChosen(false);
    const value = e.target.value;

    if (!value) {
      setIsVisible(false);
      return;
    }

    let localFilter = [...allComments];

    setIsVisible(true);
    //prettier-ignore
    return setFilterdComments(localFilter.filter((el) => el.body.includes(value)));
  };

  const handleChoosen = () => {
    setIsVisible(false);
    setIsChosen(true);
  };

  const handlePagination = (chosenPage: number) => {
    setCurrentPage(chosenPage);
  };

  return (
    <div className="app">
      <Input
        handleFilter={handleFilter}
        slicedComments={slicedComments}
        isVisible={isVisible}
        handleChoosen={handleChoosen}
      />
      <div>
        <Pagination
          isChoosen={isChoosen}
          totalComments={filteredComments.length}
          commentsPerPage={commentsPerPage}
          handlePagination={handlePagination}
        />
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <CommentsList slicedComments={slicedComments} isChoosen={isChoosen} />
      )}
    </div>
  );
}

export default App;
