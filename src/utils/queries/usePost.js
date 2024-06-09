import { useMutation } from "react-query";
import {Instance} from "./axios";

const usePost = (url) => {
  return useMutation({
    mutationFn: (data) => Instance.post(url, data).then((res) => res?.data),
  });
};

export default usePost;
