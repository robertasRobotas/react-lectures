import { useState } from "react";
import styles from "./portfolio.module.css";
import closeImg from "../../assests/close-img.png";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");

  const createTask = () => {
    console.log("hittt");
    setTasks([...tasks, textInput]);
  };

  const filterTask = (task) => {
    setTasks([...tasks].filter((item) => item !== task));
  };

  return (
    <div className={styles.main}>
      <div className={styles.title}>Title</div>

      <div className={styles.tasksWrapper}>
        {tasks.map((task) => {
          return (
            <div className={styles.taskWrapper}>
              <div>{task}</div>

              <button onClick={() => filterTask(task)}>
                <img src={closeImg} />
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.inputForm}>
        <input
          value={textInput}
          onChange={(event) => setTextInput(event.target.value)}
        />
        <button onClick={() => createTask()}>Submit</button>
        {textInput}
      </div>
    </div>
  );
};

export default App;
