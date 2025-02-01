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
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [selectedRows, setSelectedRows] = useState([]);
  const allSelected =
    selectedRows.length === sortedData.length && sortedData.length > 0;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < sortedData.length;

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (column) => {
    if (!sortableColumns.includes(column)) return;

    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key: column, direction });
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sortedData.map((item) => item.id));
    }
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <Stack mt={0} color={"#000000CC"}>
      <Table.ScrollArea>
        <Table.Root size="sm" variant="line" stickyHeader>
          <Table.Header>
            <Table.Row bg={"#fff"} borderBottom="1px solid #EAECF0">
              <Table.ColumnHeader border="none" px={4}>
                <Checkbox
                  isChecked={allSelected}
                  isIndeterminate={isIndeterminate}
                  onChange={handleSelectAll}
                />
              </Table.ColumnHeader>
              {tableHeadRow.map((item, index) => (
                <Table.ColumnHeader
                  color="#667085"
                  fontSize={"xs"}
                  fontWeight={600}
                  px={4}
                  textAlign="center"
                  // textAlign={
                  //   index === tableHeadRow.length - 1 ? "center" : "left"
                  // }
                  key={index}
                  border={"none"}
                  onClick={() => handleSort(item)}
                  cursor={
                    sortableColumns.includes(item) ? "pointer" : "default"
                  }
                  _hover={
                    sortableColumns.includes(item)
                      ? { textDecoration: "underline" }
                      : {}
                  }
                >
                  <HStack>
                    {item}
                    {sortableColumns.includes(item) &&
                      sortConfig?.key === item && (
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
            {sortedData.map((item, index) => (
              <Table.Row
                key={item.id}
                bg={index % 2 === 0 ? "#fff" : "#fff"}

              >
                <Table.Cell  border="none" px={4}>
                  <Checkbox
                    isChecked={selectedRows.includes(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </Table.Cell>
                {tableHeadRow.map((heading, colIndex) => (
                  <Table.Cell
                    px={4}
                    key={`${index}-${colIndex}`}
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
        count={20}
        pageSize={2}
        defaultPage={1}
        mb={4}
      >
        <HStack justifyContent="flex-end">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
  );
};

export default DataTable;
