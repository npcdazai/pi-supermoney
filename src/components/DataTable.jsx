import React, { useState, useEffect } from "react";
import { HStack, Stack, Table } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../components/ui/pagination";
import { Checkbox } from "./ui/checkbox";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const DataTable = ({ tableHeadRow, data, sortableColumns = [] }) => {
  const [sortedData, setSortedData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    setSortedData(data);
    if (data.length > 0) {
      handleSort("date"); // Default sorting by date/time
    }
  }, [data]);

  const handleSort = (column) => {
    if (!sortableColumns.includes(column)) return;

    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      const isNumber = !isNaN(parseFloat(aValue)) && isFinite(aValue);
      const isDate = !isNaN(Date.parse(aValue));

      if (isNumber) {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (isDate) {
        return direction === "asc"
          ? new Date(aValue) - new Date(bValue)
          : new Date(bValue) - new Date(aValue);
      }

      return direction === "asc"
        ? aValue.toString().localeCompare(bValue.toString())
        : bValue.toString().localeCompare(aValue.toString());
    });

    setSortedData(sortedArray);
    setSortConfig({ key: column, direction });
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / pageSize);

  return (
    <Stack mt={0} color={"#000000CC"}>
      <Table.ScrollArea>
        <Table.Root size="sm" variant="line" stickyHeader>
          <Table.Header>
            <Table.Row bg={"#fff"}>
              <Table.ColumnHeader borderBottom="1px solid #EAECF0" px={4}>
                <Checkbox isChecked={selectAll} onChange={toggleSelectAll} />
              </Table.ColumnHeader>
              {tableHeadRow.map((item, index) => (
                <Table.ColumnHeader
                  key={index}
                  color="#667085"
                  fontSize={"xs"}
                  fontWeight={600}
                  px={4}
                  textAlign="center"
                  borderBottom="1px solid #EAECF0"
                  onClick={() => handleSort(item)}
                  cursor={sortableColumns.includes(item) ? "pointer" : "default"}
                  _hover={sortableColumns.includes(item) ? { textDecoration: "underline" } : {}}
                >
                  <HStack>
                    {item}
                    {sortableColumns.includes(item) && sortConfig?.key === item && (
                      <span style={{ marginLeft: "4px" }}>
                        {sortConfig.direction === "asc" ? <FaArrowUp /> : <FaArrowDown />}
                      </span>
                    )}
                  </HStack>
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {currentData.map((item, index) => (
              <Table.Row key={item.id} bg={index % 2 === 0 ? "#fff" : "#fff"}>
                <Table.Cell border="none" px={4}>
                  <Checkbox isChecked={selectedRows.includes(item.id)} onChange={() => toggleSelectRow(item.id)} />
                </Table.Cell>
                {tableHeadRow.map((heading, colIndex) => (
                  <Table.Cell
                    color="#667085"
                    key={`${index}-${colIndex}`}
                    px={4}
                    fontSize={"sm"}
                    fontWeight={500}
                    border={"none"}
                  >
                    {item[heading]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      <PaginationRoot
        size={"xs"}
        count={totalPages}
        pageSize={1}
        defaultPage={1}
        mb={4}
        onChange={(page) => setCurrentPage(page)}
      >
        <HStack justifyContent="flex-end">
          <PaginationPrevTrigger disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
          <PaginationItems count={totalPages} />
          <PaginationNextTrigger disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
        </HStack>
      </PaginationRoot>
    </Stack>
  );
};

export default DataTable;
