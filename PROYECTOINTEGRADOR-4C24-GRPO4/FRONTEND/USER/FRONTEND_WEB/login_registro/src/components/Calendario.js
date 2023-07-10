import React from 'react';
import '../assets/css/Calendar.css';
import Menu from './Menu';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    const numDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysOfMonth = Array.from({ length: numDays }, (_, index) => index + 1);

    return (
      <Menu>
      <div className="calendar" style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
        <h2 className="calendar__heading" style={{ fontWeight: 'bold' }}>Calendario</h2>
        <div className="calendar__nav">
          <button className="calendar__nav-btn" onClick={this.prevMonth}>
            <FaChevronLeft />
            Anterior
          </button>
          
          <span className="calendar__current-date">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </span>
          
          <button className="calendar__nav-btn" onClick={this.nextMonth}>
            Siguiente
            <FaChevronRight />
          </button>
        </div>
        <table className="calendar__table">
          <thead>
            <tr>
              <th>D</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, weekIndex) => (
              <tr key={weekIndex}>
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const dayNumber = weekIndex * 7 + dayIndex + 1 - firstDay;
                  const isCurrentMonth = dayNumber > 0 && dayNumber <= numDays;
    
                  return (
                    <td
                      key={dayIndex}
                      className={`calendar__day ${isCurrentMonth ? 'current-month' : 'other-month'}`}
                    >
                      {isCurrentMonth ? dayNumber : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Menu>
    
    );
  }

  prevMonth = () => {
    this.setState((prevState) => ({
      currentDate: new Date(
        prevState.currentDate.getFullYear(),
        prevState.currentDate.getMonth() - 1
      ),
    }));
  };

  nextMonth = () => {
    this.setState((prevState) => ({
      currentDate: new Date(
        prevState.currentDate.getFullYear(),
        prevState.currentDate.getMonth() + 1
      ),
    }));
  };
}


export default Calendar;
