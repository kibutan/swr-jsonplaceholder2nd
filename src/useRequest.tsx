import useSWR from "swr";
import axios from "axios";
const fetcher = (url: string) => axios(url).then((res) => res.data);
const baseUrl: string = "https://jsonplaceholder.typicode.com";

export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("path is required");
  }
  const { data: posts, error } = useSWR(`${baseUrl}${path}`, fetcher);
  return { posts, error };
};
