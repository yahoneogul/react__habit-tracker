import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    //Component가 UI 상에 등록되었을때, 사용자에게 보여질때 호출
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    //Component가 사라지기 전에 호출
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }
  hadleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  hadleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  hadleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.hadleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.hadleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.hadleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
