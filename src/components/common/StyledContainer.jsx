import styles from "./StyledContainer.module.css";
function StyledContainer(props) {
  return <div className={styles["styled-container"]}>{props.children}</div>;
}

export default StyledContainer;
