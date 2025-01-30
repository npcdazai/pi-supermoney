
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export const DateRangePicker = ({ dateRange, onDateChange }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (item) => {
    onDateChange([item.selection]);
    setTimeout(() => setShowCalendar(false), 500);
  };

  return (
    showCalendar && (
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
        <style>{`
          .rdrCalendarWrapper {
            font-family: Arial, sans-serif;
          }
          .rdrSelected {
            background-color: #e8def8 !important;
          }
          .rdrStartEdge,
          .rdrEndEdge {
            background-color: #65558F !important;
            border-radius: 50%;
          }
          .rdrInRange {
            background-color: #c2a8ff !important;
          }
        `}</style>
      </div>
    )
  );
}