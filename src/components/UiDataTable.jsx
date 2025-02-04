import { Box, Button, Circle, HStack, Image, Text } from "@chakra-ui/react";
import { BiExport } from "react-icons/bi";
import * as XLSX from "xlsx";
import excel from "../assets/icons/excel.png";
import DataTable from "./DataTable";
import FilterDrawers from "./FilterDrawers";

const UiDataTable = () => {
  const tableHeadRow = [
    "Session ID",
    "User ID",
    "Full Name",
    "Phone Number",
    "No of Queries",
    "Query Type",
    "Session Channel",
    "Invested Amount",
  ];

  const userNames = [
    "Abhijit Kumar",
    "Rahul Sharma",
    "Priya Verma",
    "Amit Joshi",
    "Neha Singh",
  ];

  const usersData = Array.from({ length: 100 }, (_, i) => {
    const isUrgent = Math.random() < 0.3; // 30% chance to be "Urgent"
    const randomAmount = (Math.floor(Math.random() * 10) + 1) * 50000; // Random amounts between ₹50,000 - ₹5,00,000
    const sessionChannels = ["App", "Web", "Call"];

    return {
      "Session ID": i + 6767283728,
      "User ID": `88738${i + 1}`,
      "Full Name": userNames[i % userNames.length],
      "Phone Number": `+91-72${Math.floor(10000000 + Math.random() * 9000000)}`,
      "No of Queries": i + 1,
      "Query Type": (
        <HStack
          w="70px"
          justifyContent="center"
          bgColor={isUrgent ? "#FFFAEB" : "#ECFDF3"}
          borderRadius="md"
        >
          <Circle bgColor={isUrgent ? "#B54708" : "#027A48"} h="5px" w="5px" />
          <Text
            color={isUrgent ? "#B54708" : "#027A48"}
            fontSize="xs"
            fontWeight={500}
          >
            {isUrgent ? "Urgent" : "Normal"}
          </Text>
        </HStack>
      ),
      "Session Channel": (
        <Text color="#000" fontSize="xs" fontWeight={500}>
          {sessionChannels[i % sessionChannels.length]}
        </Text>
      ),
      "Invested Amount": (
        <Text color="#000" fontSize="xs" fontWeight={500}>
          ₹{randomAmount.toLocaleString()}
        </Text>
      ),
    };
  });

  // Function to export data as an Excel file
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(usersData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Queries");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "UserQueries.xlsx");
  };

  return (
    <Box h="100%">
      <HStack w="100%" justifyContent="space-between" mb={4} p={3}>
        <Text fontSize="lg" fontWeight="bold" color="#000">
          User Queries
        </Text>

        <HStack>
          <Button
            onClick={exportToExcel}
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
            <Text fontSize="xs" color="#344054" fontWeight={600}>
              Export data
            </Text>
            <Image src={excel} h="20px" />
          </Button>

          <FilterDrawers />
        </HStack>
      </HStack>

      <DataTable
        sortableColumns={[
          "Session ID",
          "User ID",
          "Full Name",
          "Phone Number",
          "No of Queries",
          "Query Type",
          "Session Channel",
          "Invested Amount",
        ]}
        tableHeadRow={tableHeadRow}
        data={usersData}
      />
    </Box>
  );
};

export default UiDataTable;
