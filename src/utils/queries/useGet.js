import { useQuery } from "react-query";
import {Instance} from "./axios";

const useGET = (keys, url, options = []) => {
  return useQuery({
    queryKey: keys,
    queryFn: () => Instance.get(url, ...options).then((res) => res.data),
  });
};

export default useGET;
