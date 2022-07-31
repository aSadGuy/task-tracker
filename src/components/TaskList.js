import Task from "./Task";
import { motion, AnimatePresence } from "framer-motion";

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      <div className="tasks-container">
        {tasks.map((task) => (
          <motion.div key={task.id}>
            <div>
              <Task
                task={task}
                key={task.id}
                text={task.text}
                tasks={tasks}
                setTasks={setTasks}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
