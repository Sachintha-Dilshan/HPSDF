import React from 'react'
import "../Styles/Calendar.css"

function Calendar() {
  const [events] = React.useState([ 
    { id: 1, title: 'Meeting', date: '2024-01-31' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    { id: 2, title: 'Conference', date: '2024-02-15' },
    // Add more events as needed
  ]);

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Events</h1>
      <div className="calendar">
        {events.map((event) => (
          <div key={event.id} className="event">
            <div className="event-date">{new Date(event.date).toLocaleDateString()}</div>
            <div className="event-details">
              <div className="event-title">{event.title}</div>
              {/* Add more event details as needed */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar
