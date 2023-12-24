import styled from "styled-components";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledContainer from "../common/StyledContainer";
import styles from "./CalorieRecord.module.css";

function CalorieRecord(props) {
  return (
    <ul className={styles["calorie-record"]}>
      <li>
        <CalorieRecordDate date={props.date}></CalorieRecordDate>
      </li>
      <li>{props.mealType}</li>
      <li>{props.meal}</li>
      <li>
        <StyledContainer>{props.calories}</StyledContainer>{" "}
      </li>
    </ul>
  );
}

export default CalorieRecord;
