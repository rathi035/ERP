import React, { useState } from 'react';
import './Studentinfo.css';
import video from './studvid.mp4';
import { useNavigate } from 'react-router-dom';

function Studentinfo() {
  const [student, setStudent] = useState({
    fullName: '',
    rollNo: '',
    regNo: '',
    aadharNo: '',
    department: '',
    section: '',
    year: '',
    dob: '',
    photo: null,
    marksheet10th: null,
    marksheet12th: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setStudent({ ...student, [name]: files[0] });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(student);
    // Navigate to the success page
    navigate('/success');
  };

  return (
    <div className="containerrr">
      <div className="videooo">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="student-form0">
        <form onSubmit={handleSubmit}>
          <h2>STUDENT INFO</h2>
          <div className="form-group0">
            <label>Photo:</label>
            <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Full Name:</label>
            <input type="text" name="fullName" value={student.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Roll No:</label>
            <input type="text" name="rollNo" value={student.rollNo} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Reg No:</label>
            <input type="text" name="regNo" value={student.regNo} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Aadhar No:</label>
            <input type="text" name="aadharNo" value={student.aadharNo} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Department:</label>
            <input type="text" name="department" value={student.department} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Section:</label>
            <input type="text" name="section" value={student.section} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Year:</label>
            <input type="text" name="year" value={student.year} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={student.dob} onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>10th Marksheet:</label>
            <input type="file" name="marksheet10th" accept="application/pdf" onChange={handleChange} required />
          </div>
          <div className="form-group0">
            <label>12th Marksheet:</label>
            <input type="file" name="marksheet12th" accept="application/pdf" onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Studentinfo;
