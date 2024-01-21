import React from 'react';
import Card from '../Components/Card';
import Calendar from '../Components/Calendar';
import "../Styles/HRDashBoard.css"


function HRDashBoard() {
  return (
    <div className="dashboard-container">
      <div className="item-1">Admin Section</div>
      <div className="item-2">
        Dashboard
        <hr/>
      </div>
      <div className="item-3">
        9.00 A.M
      </div> 
      <div className="item-4">
        <Card/>
        <Card/>
        <Card/>
      <Card/>
      </div>

      <div className="item-5">
        <Calendar/>
      </div>
      <div className="item-6">
        Pending Leaves
      </div> 
      <div className="item-7">
        Leave Status
      </div>
    </div>
    );
  }

export default HRDashBoard;
