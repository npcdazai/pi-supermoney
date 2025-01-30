import React, { useState } from "react";
import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
// import { CheckIcon } from "@chakra-ui/icons";

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

  return (
    <MenuRoot>
      <MenuTrigger>
        <HStack border="none" color="#fff" rightIcon={<IoIosArrowDown />}>
          {selectedOption}
        </HStack>
      </MenuTrigger>
      <MenuContent>
        {dateOptions.map((option) => (
          <MenuItem key={option} onClick={() => setSelectedOption(option)}>
            {option}
            {selectedOption === option && <Text>Hello</Text>}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default DateRangeMenu;
