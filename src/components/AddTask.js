import { useState } from "react";
import { motion } from "framer-motion";

const AddTask = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [error, setError] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleError = () => {
    if (!text) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return handleError();
    } else {
      setTasks([
        ...tasks,
        {
          id: Math.floor(Math.random() * 10000),
          text,
          complete: false,
          priority: false,
        },
      ]);
    }

    setText("");
  };

  return (
    <div>
      <motion.form onSubmit={handleSubmit} className="form-container">
        <input
          className="input"
          type="text"
          placeholder="I need to..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <motion.p
          className="add-error"
          animate={{
            translateY: error ? -62 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          Please add a task
        </motion.p>
        <motion.button
          className="submit-btn"
          style={{
            backgroundColor:
              !text && isHovering
                ? "#914441"
                : text && isHovering
                ? "#679269"
                : "",
            border: text ? "1px solid #679269" : "",
          }}
          animate={{
            rotate: text ? 135 : 0,
            x: tasks.length > 0 ? "-25px" : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p className="btn-x">×</p>
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AddTask;
