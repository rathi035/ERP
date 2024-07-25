import React, { useState } from 'react';
import './Hodinfo.css';
import video from './hodvid.mp4';
import { useNavigate } from 'react-router-dom';

function Hodinfo() {
  const [hod, setHod] = useState({
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
      setHod({ ...hod, [name]: files[0] });
    } else {
      setHod({ ...hod, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(hod);
    // Navigate to the success page
    navigate('/success');
  };

  return (
    <div className="container-hod">
      <div className="video-hod">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hod-form">
        <form onSubmit={handleSubmit}>
          <h2>HOD INFO</h2>
          <div className="form-group-hod">
            <label>Photo:</label>
            <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Full Name:</label>
            <input type="text" name="fullName" value={hod.fullName} onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Aadhar No:</label>
            <input type="text" name="aadharNo" value={hod.aadharNo} onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Department:</label>
            <input type="text" name="department" value={hod.department} onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Subject:</label>
            <input type="text" name="subject" value={hod.subject} onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Year:</label>
            <input type="text" name="year" value={hod.year} onChange={handleChange} required />
          </div>
          <div className="form-group-hod">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={hod.dob} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Hodinfo;
