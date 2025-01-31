import {
    Box,
    HStack,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";
import pilogo from "../assets/icons/pi-logo.png";
import topSectionImg from "../assets/images/topSection.png";
import DateRng from "../components/DateRangePicker";
import MainFrame from "../components/MainFrame";
import { UserInfo } from "../components/UserInfo";
import AssetData from "../components/AssetData";

const DashBoard = () => {

  return (
    <MainFrame>
      <Box bgColor="#fff" h="100vh" p={0}>
        <HStack
          backgroundImage={`url(${topSectionImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          w="100vw"
          p={4}
          h="170px"
        >
          <VStack gap={4} w="100%" p={0}>
            <HStack w="100%" justifyContent="space-between">
              <Image src={pilogo} alt="Pi-Logo" h="24px" />
              <UserInfo />
            </HStack>
            <HStack w="100%" justifyContent="space-between">
              <VStack lineHeight={1} alignItems="flex-start">
                <Text color="#fff" fontWeight={700} fontSize="32px">
                  Welcome Back, Abhijit
                </Text>
                <Text color="#fff" as="span" fontSize="16px" fontWeight={400}>
                  Track & Resolve User Queries & much more at one place
                </Text>
              </VStack>
              <DateRng />
            </HStack>
          </VStack>
        </HStack>

        <AssetData/>
      </Box>
    </MainFrame>
  );
};

export default DashBoard;
