import React from 'react';
import Card from '../../Components/Card';
import DateTimeWidget from '../../Components/DateTimeWidget';
import Calendar from '../../Components/Calendar';
//import "../Styles/HRDashBoard.css"


function HRDashBoard() {
  return (
    <div className="dashboard-container">
      <div className="section">Admin Section</div>
      <div className="row-1">
        <div className="dashboard">
          Dashboard
          <hr/>
        </div>
        <div className="date-time">
          <DateTimeWidget/>
        </div> 
      </div>
      
      <div className="row-2">
        <div className="inner-row-2">
          <div className="card-set">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>

          <div className="pending-leaves">
            Pending Leaves
          </div> 
          <div className="leave-status">
            Leave Status
          </div> 
        </div>
        

        <div className="calendar-box">
          <Calendar/>
        </div>
      </div>
    </div>
    );
  }

export default HRDashBoard;
