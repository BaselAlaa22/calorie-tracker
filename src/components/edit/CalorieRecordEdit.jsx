import { useState } from "react";
import styles from "./CalorieRecordEdit.module.css";

function CalorieRecordEdit(props) {
  const [mealRecord, setMealRecord] = useState({
    date: "",
    mealType: "Breakfast",
    meal: "",
    calories: 0,
  });

  function onDateChangeHandler(event) {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  }

  function onMealTypeChangeHandler(event) {
    setMealRecord({
      ...mealRecord,
      mealType: event.target.value,
    });
  }

  function onMealChangeHandler(event) {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  }

  function onCaloriesChangeHandler(event) {
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.formSubmitHandler(mealRecord);
  }

  function handleCancel() {
    setMealRecord({});
    props.onCancel();
  }

  return (
    <form
      className={styles.form}
      calories={mealRecord.calories}
      onSubmit={handleSubmit}
    >
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onDateChangeHandler}
        required
      />
      <label htmlFor="mealType">Meal</label>
      <select
        className={styles["form-select"]}
        id="mealType"
        value={mealRecord.mealType}
        onChange={onMealTypeChangeHandler}
        required
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <label htmlFor="meal">Content</label>
      <input
        type="text"
        id="meal"
        value={mealRecord.meal}
        onChange={onMealChangeHandler}
        required
      />
      <label htmlFor="calories">Calories</label>
      <input
        id="calories"
        type="number"
        value={mealRecord.calories}
        className={`${styles.calories} + ${
          mealRecord.calories < 0 ? styles.error : ""
        }`}
        onChange={onCaloriesChangeHandler}
        required
      />
      <div className={styles.footer}>
        <button>Add Record</button>
        <button
          type="button"
          className={styles["secondary"]}
          onClick={handleCancel}
        >
          cancel
        </button>
      </div>
    </form>
  );
}

export default CalorieRecordEdit;
