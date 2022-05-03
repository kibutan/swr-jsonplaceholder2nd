import { Box, Stack } from "@chakra-ui/react";

function Post({ post }): JSX.Element {
  const { title, body, id } = post;
  return (
    <Stack w="70vw" bgColor="gray.700">
      <h1>
        {id},{title}
      </h1>
      <p>{body}</p>
    </Stack>
  );
}

export default Post;
