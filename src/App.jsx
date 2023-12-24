import { useState } from "react";
import CalorieRecordEdit from "./components/edit/CalorieRecordEdit";
import ListingSection from "./components/CalorieReordSection/ListingSection";
import Modal from "react-modal";
import styles from "./App.module.css";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    borderRadius: "var(--theme-border-radius-smooth)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
const initial_records = [
  {
    id: 1,
    date: new Date(20, 7, 2023),
    mealType: "Breakfast",
    meal: "Eggs",
    calories: "200",
  },
  {
    id: 2,
    date: new Date(20, 7, 2023),
    mealType: "Lunch",
    meal: "Chicken",
    calories: "300",
  },
  {
    id: 3,
    date: new Date(20, 7, 2023),
    mealType: "Dinner",
    meal: "Yogurt",
    calories: "150",
  },
  {
    id: 4,
    date: new Date(21, 7, 2023),
    mealType: "Breakfast",
    meal: "Eggs",
    calories: "200",
  },
  {
    id: 5,
    date: new Date(21, 7, 2023),
    mealType: "Lunch",
    meal: "Chicken",
    calories: "300",
  },
  {
    id: 6,
    date: new Date(21, 7, 2023),
    mealType: "Dinner",
    meal: "Yogurt",
    calories: "150",
  },
];
function App() {
  const [records, setRecords] = useState(initial_records);
  const [nextId, setNextId] = useState(7);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function formSubmitHandler(record) {
    const formatedRecord = {
      ...record,
      date: new Date(record.date),
      id: nextId,
    };
    setNextId((prevId) => prevId + 1);
    setRecords((prevRecords) => [formatedRecord, ...prevRecords]);
    closeModal();
  }
  return (
    <>
      <div>
        <h1 className={styles.title}>Calorie Tracker</h1>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyle}
        >
          <CalorieRecordEdit
            formSubmitHandler={formSubmitHandler}
            onCancel={closeModal}
          />
        </Modal>

        <ListingSection allRecords={records} />
        <button className={styles["add-btn"]} onClick={openModal}>
          Add A Meal
        </button>
      </div>
    </>
  );
}

export default App;
