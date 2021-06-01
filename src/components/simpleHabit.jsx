import React, { useEffect, useState } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    //첫번째 인자에만 값이 있는 경우 : Component가 mount 되었을 때, update 되었을 때 호출
    //첫번째 인자와 두번째 인자에 값이 있는 경우 : 첫번째 인자 => Component가 Mount 되었을 때, 두번째 인자 => Component가 Update 되었을 때
    //두번째 인자에 빈 배열이 있는 경우 : Component가 mount 되었을 때 만 호출
    console.log(`mounted  & updated! : ${count}`);
  }, [console.log('업데이트')]);
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
