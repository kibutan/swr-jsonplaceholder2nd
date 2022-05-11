// import Post from "./Post";
import { useGetPosts } from "../useRequest";
import { Box, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
function Posts() {
  const [count, setCount] = useState(1);
  const { posts, error } = useGetPosts("/posts");
  if (error) return <div>failed to load in Posts.tsx</div>;
  if (!posts) return <div>loading Now...</div>;
  return (
    <div>
      {/* {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))} */}
      <Stack
        w="70vw"
        onClick={() => {
          setCount((prevState) => (prevState % posts.length) + 1);
          console.log(count);
        }}
      >
        {posts.map((post) =>
          post.id === count ? (
            <Box
              as={motion.div}
              // whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.98 }}
              key={post.id}
              _hover={{ bgColor: "gray.500" }}
              _active={{ bgColor: "gray.700" }}
              bgColor="gray.600"
              rounded="20px"
            >
              {/* <HStack m={3} p={2}> */}
              <Box m={3} fontSize="medium" color="gray.200">
                {post.id}
              </Box>
              <Box m={3} fontWeight="black" fontSize="4xl" color="gray.50">
                {post.title}
              </Box>
              {/* </HStack> */}

              <Box m={3} fontSize="lg" color="gray.400">
                {post.body}
              </Box>
            </Box>
          ) : (
            ""
          )
        )}
      </Stack>
    </div>
  );
}

export default Posts;
