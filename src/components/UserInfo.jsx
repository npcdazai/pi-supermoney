import { Circle, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import avtar from "../assets/images/avtar.png";

export const UserInfo = () => (
  <HStack gap={6} justifyContent="space-between" color="white">
    <HStack>
      <Circle size="34px" overflow="hidden">
        <Image src={avtar} alt="Avatar" objectFit="cover" />
      </Circle>
      <VStack align="start" gap={"-4"}>
        <Text fontWeight={700} fontSize="sm">
          Abhijit Kumar
        </Text>
        <Text fontWeight={400} fontSize="xs" color="white">
          Admin Panel
        </Text>
      </VStack>
    </HStack>
    <Icon as={FiLogOut} boxSize={6} />
  </HStack>
);