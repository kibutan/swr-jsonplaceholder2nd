import Post from "./Post";
import { useGetPosts } from "../useRequest";
function Posts() {
  const { posts, error } = useGetPosts("/posts");
  if (error) return <div>failed to load in Posts.tsx</div>;
  if (!posts) return <div>loading Now...</div>;
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
