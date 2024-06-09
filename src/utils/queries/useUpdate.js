import { useMutation } from "react-query";
import {Instance} from "./axios";

const useUpdate = (url) => {
  return useMutation({
    mutationFn: (data) => Instance.patch(url, data),
  });
};

export default useUpdate;
