import React, { useState } from 'react';
import './Mentinfo.css';
import video from './mentivid.mp4';
import { useNavigate } from 'react-router-dom';

function Mentinfo() {
  const [mentor, setMentor] = useState({
    fullName: '',
    aadharNo: '',
    department: '',
    subject: '',
    year: '',
    dob: '',
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setMentor({ ...mentor, [name]: files[0] });
    } else {
      setMentor({ ...mentor, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(mentor);
    // Navigate to the success page
    navigate('/success');
  };

  return (
    <div className="containerrrx">
      <div className="videooox">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mentor-form">
        <form onSubmit={handleSubmit}>
          <h2>MENTOR INFO</h2>
          <div className="mentform-group">
            <label>Photo:</label>
            <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" value={mentor.fullName} onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Aadhar No:</label>
            <input type="text" name="aadharNo" value={mentor.aadharNo} onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Department:</label>
            <input type="text" name="department" value={mentor.department} onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Subject:</label>
            <input type="text" name="subject" value={mentor.subject} onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Year:</label>
            <input type="text" name="year" value={mentor.year} onChange={handleChange} required />
          </div>
          <div className="mentform-group">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={mentor.dob} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Mentinfo;
