import {
  Box,
  Button,
  Circle,
  HStack,
  Image,
  Text
} from "@chakra-ui/react";
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

  const usersData = Array.from({ length: 100 }, (_, i) => ({
    "Session ID": i + 6767283728,
    "User ID": `88738${i + 1}`,
    "Full Name": "Abhijit Kumar",
    "Phone Number": "+91-7250064535",
    "No of Queries": i + 1,
    "Query Type":
      i === 0 ? (
        <HStack w="70px" justifyContent="center" bgColor="#FFFAEB" borderRadius="md">
          <Circle bgColor="#B54708" h="5px" w="5px" />
          <Text color="#B54708" fontSize="xs" fontWeight={500}>
            Urgent
          </Text>
        </HStack>
      ) : (
        <HStack justifyContent="center" w="70px" bgColor="#ECFDF3" borderRadius="md">
          <Circle bgColor="#027A48" h="5px" w="5px" />
          <Text color="#027A48" fontSize="xs" fontWeight={500}>
            Normal
          </Text>
        </HStack>
      ),
    "Session Channel": <Text color="#000" fontSize="xs" fontWeight={500}>App</Text>,
    "Invested Amount": <Text color="#000" fontSize="xs" fontWeight={500}>₹1,40,000</Text>,
  }));

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
            <Text fontSize="xs" color="#344054" fontWeight={600}>Export data</Text>
            <Image src={excel} h="20px" />
          </Button>


          <FilterDrawers />
        </HStack>
      </HStack>

      <DataTable
        sortableColumns={["Session ID",
          "User ID",
          "Full Name",
          "Phone Number",
          "No of Queries",
          "Query Type",
          "Session Channel",
          "Invested Amount",]}
        tableHeadRow={tableHeadRow}
        data={usersData}
      />
    </Box>
  );
};

export default UiDataTable;
