import { Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { OPACITY_ON_LOAD } from "../layouts/animation";

// ✅ Wrap Chakra components with Framer Motion
const MotionVStack = motion(VStack);

const MainFrame = ({ children }) => {
  return (
    <MotionVStack
      {...OPACITY_ON_LOAD}
      w="100%"
      h="100%"
    
    >
      <Box
        w="100%"
        h="auto"
        bg="#fff"
        color={"#000000"}
        rounded="md"
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        {children}
      </Box>
    </MotionVStack>
  );
};

export default MainFrame;
