import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import DataTable from "./DataTable";
import { BiExport } from "react-icons/bi";
import MainFrame from "./MainFrame";
import excel from "../assets/icons/excel.png";
import { IoFilterOutline } from "react-icons/io5";

const UiDataTable = () => {
  const tableHeadRow = [
    "Session ID",
    "User ID",
    "Full Name",
    "Phone Number",
    "Gender",
    "City",
    "Registration Date",
    "Action",
  ];

  const usersData = Array.from({ length: 13 }, (_, i) => ({
    "Session ID": i + 6767283728,
    "User ID": `User_${i + 1}`,
    "Full Name": "Abhijit Kumar",
    "Phone Number": "+91-7250064535",
    Gender: "Male",
    City: "Mumbai",
    "Registration Date": "23/03/2023",
    Action: (
      <HStack justifyContent="center">
        <Icon
          as={MdOutlineRemoveRedEye}
          cursor="pointer"
          p={0.5}
          _hover={{ bg: "#00000015" }}
          rounded="md"
          boxSize={5}
        />
      </HStack>
    ),
  }));

  return (
    <Box h="100%">
      <HStack w="100%" justifyContent="space-between" mb={4} p={3}>
        <Text fontSize="lg" fontWeight="bold" color="#000">
          User Queries
        </Text>

        <HStack>
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
            <BiExport />
            <Text fontSize="xs" color="#344054" fontWeight={600} >Export data</Text>
            <Image src={excel} h="20px" />
          </Button>

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
            <Text fontSize="xs" color="#344054" fontWeight={600} >Filter</Text>
          </Button>

        </HStack>
      </HStack>

      <DataTable
        sortableColumns={["Full Name", "Registration Date"]}
        tableHeadRow={tableHeadRow}
        data={usersData}
      />
    </Box>
  );
};

export default UiDataTable;
