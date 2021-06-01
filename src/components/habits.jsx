import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  hadleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  hadleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  hadleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <ul className="habits">
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.hadleIncrement}
            onDecrement={this.hadleDecrement}
            onDelete={this.hadleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
