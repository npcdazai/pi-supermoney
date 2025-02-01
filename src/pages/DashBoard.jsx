import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import pilogo from "../assets/icons/pi-logo.png";
import topSectionImg from "../assets/images/topSection.png";
import DateRng from "../components/DateRangePicker";
import MainFrame from "../components/MainFrame";
import { UserInfo } from "../components/UserInfo";
import AssetData from "../components/AssetData";
import UiDataTable from "../components/UiDataTable";

const DashBoard = () => {
  return (
    <MainFrame>
      <Box bgColor="#fff">
        {/* Header Section */}
        <HStack
          backgroundImage={`url(${topSectionImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          w="100%"
          p={4}
          h="170px"
          position="relative"
        >
          <VStack gap={4} w="100%">
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

        <Box position="relative" top="-60px" zIndex={1}>
          <AssetData />
        </Box>

        <Box h="100%" bgColor="#fff" px={8} pt={4}>
          <UiDataTable />
        </Box>
      </Box>
    </MainFrame>
  );
};

export default DashBoard;
