import {
  Box,
  HStack,
  Image,
  Text,
  useCheckboxGroup,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HiCog } from "react-icons/hi";
import pilogo from "../assets/icons/pi-logo.png";
import topSectionImg from "../assets/images/topSection.png";
import DateRng from "../components/DateRangePicker";
import MainFrame from "../components/MainFrame";
import {
  MenuCheckboxItem,
  MenuContent,
  MenuItemGroup,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";
import { UserInfo } from "../components/UserInfo";
import { dateItems } from "../constants";
import { IoIosArrowDown } from "react-icons/io";

const DashBoard = () => {
  const group = useCheckboxGroup({ defaultValue: ["bar"] });
  const [selectedItem, setSelectedItem] = useState("Last year");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //   const handleItemClick = (value) => {
  //     if (value === "customDates") {
  //       setShowCalendar(true);
  //     } else {
  //       setShowCalendar(false);
  //     }
  //     setSelectedItems((prev) =>
  //       prev.includes(value)
  //         ? prev.filter((item) => item !== value)
  //         : [...prev, value]
  //     );
  //   };

  const handleItemClick = (value) => {
    setSelectedItem(value);
  };

  const selectedTitle = dateItems
    .filter((item) => item.value === selectedItem)
    .map((item) => item.title)
    .join(", ");

  return (
    <MainFrame>
      <Box p={0}>
        <HStack
          backgroundImage={`url(${topSectionImg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          w="100vw"
          p={4}
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
      </Box>
    </MainFrame>
  );
};

export default DashBoard;
