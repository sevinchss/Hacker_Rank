import { useMutation } from "react-query";
import {Instance} from "./axios";

const useDelete = (urlPath) => {
  return useMutation({
    mutationFn: (id) => Instance.delete(`${urlPath}/${id}`),
  });
};

export default useDelete;
