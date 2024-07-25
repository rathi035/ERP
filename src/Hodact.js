import React from 'react';
import './Hodact.css';

function Hodact() {
  return (
    <div className="hod-portal">
      <div className="profile-photo">
        {/* Replace 'path_to_hod_photo.jpg' with the actual path to the photo */}
        <img src="path_to_hod_photo.jpg" alt="Profile" />
      </div>

      <h1>HOD DB</h1>

      <section className="basic-details">
        <h2>Basic Details</h2>
        <p>Name: [HOD Name]</p>
        <p>Dept handled: [Department]</p>
      </section>

      <section className="personal-details">
        <h2>Personal Details</h2>
        <p>Aadhar number: [Aadhar Number]</p>
        <p>PAN: [PAN Number]</p>
        <p>Degree: [Degree]</p>
        <p>Address: [Address]</p>
        <p>Contact: [Contact Number]</p>
      </section>

      <section className="other-details">
        <h2>Other Details</h2>
        <div>
          <p>Certification:</p>
          <input type="file" />
        </div>
        <div>
          <p>Past experiences:</p>
          <textarea placeholder="Enter past experiences here"></textarea>
        </div>
        <div>
          <p>Papers published:</p>
          <textarea placeholder="Enter papers published here"></textarea>
        </div>
        <p>Attendance: [Attendance Information]</p>
        <div>
          <p>10th and 12th marksheet:</p>
          <input type="file" />
        </div>
      </section>

      <section className="other-info">
        <h2>Other Information</h2>
        <div>
          <p>Review:</p>
          <textarea placeholder="Enter review here"></textarea>
        </div>
      </section>
    </div>
  );
}

export default Hodact;
