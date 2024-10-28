import axios from "axios";
import { useEffect, useState } from "react";
import Comment_Interface from "../../../types";

export const useFetch = () => {
  const [allComments, setAllComments] = useState<Comment_Interface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getAllComments = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setAllComments(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return { allComments, isLoading, isError };
};
