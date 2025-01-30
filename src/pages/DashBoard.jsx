import {
  Box,
  Circle,
  HStack,
  Icon,
  Image,
  Text,
  useCheckboxGroup,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FiLogOut } from "react-icons/fi";
import { HiCog } from "react-icons/hi";
import pilogo from "../assets/icons/pi-logo.png";
import avtar from "../assets/images/avtar.png";
import topSectionImg from "../assets/images/topSection.png";
import MainFrame from "../components/MainFrame";
import {
  MenuCheckboxItem,
  MenuContent,
  MenuItemGroup,
  MenuRoot,
  MenuTrigger,
} from "../components/ui/menu";

const dateItems = [
  { title: "Legal Month", value: "legalMonth" },
  { title: "Last 3 Months", value: "last3Months" },
  { title: "Last Year", value: "lastYear" },
  { title: "Legal 2 Years", value: "legal2Years" },
  { title: "Custom Dates", value: "customDates" },
];

const DashBoard = () => {
  const group = useCheckboxGroup({ defaultValue: ["bar"] });
  const [selectedItems, setSelectedItems] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleItemClick = (value) => {
    if (value === "customDates") {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }

    setSelectedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleDateChange = (item) => {
    setDateRange([item.selection]);

    // Automatically close the calendar after selecting a date range
    setTimeout(() => {
      setShowCalendar(false);
    }, 500); // Small delay for smooth UX
  };

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
              <MenuRoot>
                <MenuTrigger asChild>
                  <HStack
                    cursor="pointer"
                    color="#fff"
                    border="none"
                    variant="none"
                    size="sm"
                  >
                    <HiCog />
                    <span>Features</span>
                  </HStack>
                </MenuTrigger>

                <MenuContent>
                  <MenuItemGroup title="Features">
                    {dateItems.map(({ title, value }) => (
                      <MenuCheckboxItem
                        key={value}
                        value={value}
                        isChecked={selectedItems.includes(value)}
                        onClick={() => handleItemClick(value)}
                      >
                        {title}
                      </MenuCheckboxItem>
                    ))}
                  </MenuItemGroup>
                </MenuContent>
              </MenuRoot>

              {showCalendar && (
                <div
                  style={{
                    position: "absolute",
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    zIndex: 10,
                    bottom: "100px",
                    right: "12px",
                  }}
                >
                  <DateRange
                    ranges={dateRange}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                  />
                  {/* <button onClick={() => setShowCalendar(false)}>
                    Confirm
                  </button> */}
                </div>
              )}
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </MainFrame>
  );
};

export default DashBoard;
