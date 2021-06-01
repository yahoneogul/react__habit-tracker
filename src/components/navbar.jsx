import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className="navbar">
        <i className="fas fa-grin-stars navbar-logo"></i>
        <strong>Habit Tracker</strong>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
