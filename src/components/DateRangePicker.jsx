import React, { useState } from "react";
import { HStack, Box, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import { FaCheck } from "react-icons/fa";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Toaster, toaster } from "../components/ui/toaster"

const dateOptions = [
  "Last 7 days",
  "Last Month",
  "Last 3 Months",
  "Last Year",
  "Last 2 Years",
  "Custom Dates",
];

const DateRangeMenu = () => {
  const [selectedOption, setSelectedOption] = useState("Last 7 days");
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === "Custom Dates") {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  };


  const handleDateChange = (ranges) => {
    const { startDate, endDate } = ranges.selection;

    
    
    if (startDate.toDateString() === endDate.toDateString()) {
        toaster.create({
            title: `Toast status is Y`,
          })
    } else {
      setDateRange([ranges.selection]);
      setShowCalendar(false);
    }
  };

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger border="none">
          <HStack border="none" color="#fff">
            {selectedOption === "Custom Dates"
              ? `${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`
              : selectedOption}
            <IoIosArrowDown color="#fff" />
          </HStack>
        </MenuTrigger>
        <MenuContent>
          {dateOptions.map((option) => (
            <MenuItem key={option} onClick={() => handleOptionSelect(option)}>
              {option}
              {selectedOption === option && <FaCheck color="#fff" />}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>

      {showCalendar && (
        <Box position="relative" mt={2} p={3} borderRadius="md">
          <VStack zIndex={100} position="absolute" right="0">
            <Text color="white">Select Date Range:</Text>
            <DateRangePicker  ranges={dateRange}  rangeColors={["#black"]} onChange={handleDateChange} />
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default DateRangeMenu;
