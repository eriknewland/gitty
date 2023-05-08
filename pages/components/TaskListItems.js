import { useState } from 'react';

const TaskListItem = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} />
      <span>{children}</span>
    </div>
  );
};

export default TaskListItem;
