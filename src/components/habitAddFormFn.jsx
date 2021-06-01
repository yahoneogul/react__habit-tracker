import React, { memo } from 'react';

const HabitAddFormFn = memo((props) => {
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        className="add-input"
        type="text"
        placeholder="Habit"
        ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddFormFn;
