import { Box, Button, Input, Text } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerRoot,
} from "../components/ui/drawer";
import { Slider } from "../components/ui/slider";
import { Field } from "../components/ui/field";
import { IoFilterOutline } from "react-icons/io5";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "../components/ui/accordion";

const filterItems = [
  { value: "a", title: "Session ID", type: "text" },
  { value: "b", title: "User ID", type: "text" },
  { value: "c", title: "Full Name", type: "text" },
  { value: "d", title: "Phone Number", type: "text" },
  { value: "e", title: "City", type: "text" },
  { value: "f", title: "Number of Queries", type: "slider", defaultValue: [30, 60] },
  { value: "g", title: "Types of Queries", type: "text" },
  { value: "h", title: "Source", type: "text", value: "Some value 3..." },
  { value: "i", title: "Session Channel", type: "text", value: "Some value 4..." },
  { value: "j", title: "Invested Amount", type: "slider", defaultValue: [10, 100] },
  { value: "k", title: "FD purchase amount", type: "slider", defaultValue: [10, 100] },
  { value: "l", title: "Stocks Tracked", type: "slider", defaultValue: [10, 100] },
  { value: "n", title: "Mutual Funds Tracked", type: "slider", defaultValue: [10, 100] },
  { value: "m", title: "Bank Balance", type: "slider", defaultValue: [10, 100] },
  { value: "o", title: "Risk Profile Status", type: "slider", defaultValue: [10, 100] },
  { value: "p", title: "Signup", type: "slider", defaultValue: [10, 100] },
];

const FilterDrawers = () => {
  return (
    <DrawerRoot className="custom-drawer">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          rounded="sm"
          gap={2}
          size="sm"
          fontWeight="400"
          px={4}
          py={3.5}
          bg="#fff"
          color="#344054"
          _hover={{ bg: "#0000001A" }}
          border="1px solid #0000001A"
        >
          <IoFilterOutline />
          <Text fontSize="xs" color="#344054">
            Filter
          </Text>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle fontWeight={700} fontSize="lg" color="#344054">
            Filter
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <AccordionRoot collapsible defaultValue={["a"]}>
            {filterItems.map((filter, index) => (
              <AccordionItem border="none" key={index} value={filter.value}>
                <AccordionItemTrigger>{filter.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  {filter.type === "text" ? (
                    <Field label={filter.title}>
                      <Input border="none" borderRadius="8px" placeholder={`Enter ${filter.title}`} />
                    </Field>
                  ) : filter.type === "slider" ? (
                    <Slider width="96%" thumbSize={{ width: 16, height: 16 }} defaultValue={filter.defaultValue} />
                  ) : (
                    <Text>{filter.value || "N/A"}</Text>
                  )}
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </DrawerBody>
        <DrawerFooter>
          {/* Action buttons can be added here */}
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default FilterDrawers;
