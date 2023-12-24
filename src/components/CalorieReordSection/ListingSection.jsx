import RecordList from "./RecordList.jsx";
import styles from "./ListingSection.module.css";
import { useState } from "react";
function ListingSection(props) {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  function handleDateChange(event) {
    setCurrentDate(new Date(event.target.value));
  }

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };
  return (
    <>
      <label htmlFor="listingDate" className={styles["listing-picker-label"]}>
        Select Date
      </label>
      <input
        type="date"
        id="listingDate"
        className={styles["listing-picker-input"]}
        value={currentDate.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
}

export default ListingSection;
