import CalorieRecord from "./CalorieRecord";
import styles from "./RecordList.module.css";

function RecordList(props) {
  if (props.records.length !== 0) {
    return (
      <ul className={styles["record-list"]}>
        {props.records.map((record) => {
          return (
            <li className={styles["list-item"]}>
              <CalorieRecord
                key={record.id}
                date={record.date}
                mealType={record.mealType}
                meal={record.meal}
                calories={record.calories}
              />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return (
      <div className={styles["container"]}>
        <p> No entries on selected day</p>
      </div>
    );
  }
}

export default RecordList;
