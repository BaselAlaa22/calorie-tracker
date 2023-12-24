import styles from "./CalorieRecordDate.module.css";
import StyledContainer from "../common/StyledContainer";
function CalorieRecordDate(props) {
  let day = props.date.getDate();
  let month = props.date.toLocaleString("default", { month: "long" });
  let year = props.date.getFullYear();

  return (
    <StyledContainer>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day"]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyledContainer>
  );
}

export default CalorieRecordDate;
