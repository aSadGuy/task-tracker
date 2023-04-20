import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Task({ text, tasks, setTasks, task }) {
  const [complete, setComplete] = useState(false);
  const [priority, setPriority] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    setAnimation(true);
  };
  const handleComplete = () => {
    setComplete(!complete);
  };
  const handlePriority = () => {
    setPriority(!priority);
  };

  const taskVariants = {
    initial: {
      x: "-200px",
      y: "150px",
      opacity: "0%",
    },
    animate: {
      y: 0,
      opacity: "100%",
    },
    exit: {
      x: "100px",
      opacity: "0%",
    },
  };

  // onclick setTimeout then animation

  return (
    <div>
      <AnimatePresence>
        <motion.li
          variants={taskVariants}
          initial="initial"
          animate="animate"
          exit={animation && "exit"}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          style={{
            border: priority ? "#c2342f 1px solid" : "",
          }}
          className="taskTheme"
        >
          <div className={complete ? "completed-task" : ""}>{text}</div>

          <div onClick={handleDelete} className="delete-btn">
            ×
          </div>
          <div onClick={handleComplete} className="complete-btn">
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </div>
          <div onClick={handlePriority} className="priority-btn">
            <FontAwesomeIcon icon={faExclamation}></FontAwesomeIcon>
          </div>
        </motion.li>
      </AnimatePresence>
    </div>
  );
}

export default Task;
