import React from 'react'
import "../Styles/DateTimeWidget.css";

function DateTimeWidget() {

  const [currentDate, setCurrentDate] = React.useState(new Date());

  React.useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Format the time as "HH:mm"
  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
  });
  const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfMonth = currentDate.toLocaleDateString('en-US', { day: 'numeric' });
  const month = currentDate.toLocaleDateString('en-US', { month: 'long' });

  return (
    <div className="widget">
      <dic className="clock-container">
            <h3 className="time">{formattedTime}</h3>
      </dic>
      <div className="date-container">
            <h3 className="day">{dayOfWeek}</h3> 
            <h3 className="date">{dayOfMonth}</h3> 
            <h3 className="month">{month}</h3>
      </div>
    </div>
  )
}

export default DateTimeWidget
