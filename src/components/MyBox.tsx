import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MyBox(): JSX.Element {
  return (
    <Box
      as={motion.div}
      w="40px"
      h="40px"
      bgColor="whiteAlpha.100"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    />
  );
}

export default MyBox;
