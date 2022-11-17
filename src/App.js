import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [scrollVisible, setScrollVisible] = useState(true);

  const deleteAll = () => {
    setTasks([]);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setScrollVisible(false);
      console.log("BOTTOM");
    }
  };

  return (
    <>
      <motion.div
        onScroll={handleScroll}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        animate={{
          y: tasks.length > 5 ? "-30vh" : 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animate={{
            y: tasks.length > 0 ? -57 : 0,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <AddTask tasks={tasks} setTasks={setTasks} />
        </motion.div>

        <motion.div>
          <TaskList tasks={tasks} setTasks={setTasks} />
        </motion.div>

        <AnimatePresence>
          {tasks.length > 0 && (
            <motion.button
              style={{
                y: "40px",
              }}
              initial={{
                x: "80px",
                opacity: "0%",
              }}
              animate={{
                x: "7px",
                opacity: "100%",
                y: "-21px",
              }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
              }}
              exit={{
                x: "80px",
                opacity: "0%",
                y: "40px",
              }}
              onClick={deleteAll}
              className="delete-all-btn"
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
      {tasks.length > 6 && scrollVisible && (
        <div className="gradient-bottom"></div>
      )}
      <div className="gradient-bottom-fill"></div>
    </>
  );
};

export default App;
