import React from 'react';
import './Hodinfoc.css';

function Hodinfoc() {
  return (
    <div className="hod-portal">
      <div className="profilee-photo">
        {/* Placeholder for passport size photo */}
        <img src="path_to_mentor_photo.jpg" alt="Profile" />
      </div>

      <h1>John Dae</h1>

      <section className="basicc-details">
        <h2>Basic Details</h2>
        <p>Name: John Doe</p>
        <p>Mentor ID: M2022CS101</p>
        <p>Department: Computer Science</p>
        <p>Role: Associate Professor</p>
      </section>

      <section className="timetablee">
        <h2>Timetable</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>09:00 - 10:00</th>
              <th>10:00 - 11:00</th>
              <th>11:00 - 12:00</th>
              <th>12:00 - 01:00</th>
              <th>01:00 - 02:00</th>
              <th>02:00 - 03:00</th>
              <th>03:00 - 04:00</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Class A</td>
              <td>Class B</td>
              <td>Research</td>
              <td>Lunch</td>
              <td>Class C</td>
              <td>Office Hours</td>
              <td>Meeting</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Class B</td>
              <td>Class C</td>
              <td>Class A</td>
              <td>Lunch</td>
              <td>Research</td>
              <td>Office Hours</td>
              <td>Meeting</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Hodinfoc;
