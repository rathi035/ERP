import React from 'react';
import './Studact.css';  // Ensure this path is correct

// If the image is in the public folder:
import profilePhoto from './shreyas.jpeg';  // Adjust the path according to your structure

function Studact() {
  return (
    <div className="student-portal">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <h1>SHREYA .R</h1>
      
      <section className="basic-details">
        <h2>Basic Details</h2>
        <p>Name: Shreya R</p>
        <p>Roll number: 2022PECCB175</p>
        <p>Reg number: 211422244195</p>
        <p>Year: III</p>
        <p>Section: B</p>
      </section>

      <section className="personal-details">
        <h2>Personal Details</h2>
        <p>Aadhar number: 8341 1111 2222</p>
        <p>PAN: 1234567890</p>
        <p>Father's contact: Ravichandiran - 9940512345</p>
        <p>Mother's contact: Sudha - 9940567890</p>
        <p>Address: XXX</p>
        <p>Contact: 73582 81377</p>
      </section>

      <section className="other-details">
        <h2>Other Details</h2>
        <p>Mentor: Saranaya</p>
        <div>
          <p>Certification:</p>
          <input type="file" />
        </div>
        <div>
          <p>Internships:</p>
          <input type="file" />
        </div>
        <div>
          <p>Papers:</p>
          <input type="file" />
        </div>
        <p>Attendance: [Attendance Information]</p>
        <p>CGPA: 8.87</p>
        <div className="gpa-graph">
          {/* Placeholder for GPA graph */}
        </div>
        <div>
          <p>10th and 12th marksheet:</p>
          <input type="file" />
        </div>
      </section>

      <section className="other-info">
        <h2>Other Information</h2>
        <div>
          <p>Review from staffs to students:</p>
          <textarea placeholder="Enter reviews here"></textarea>
        </div>
        <div>
          <p>Parent SMS from staff:</p>
          <textarea placeholder="Enter SMS details here"></textarea>
        </div>
        <div>
          <p>Survey Google Form:</p>
          <a href="link_to_survey_form" target="_blank" rel="noopener noreferrer">Survey Form</a>
        </div>
        <div>
          <p>Student Exit Google Form:</p>
          <a href="link_to_exit_form" target="_blank" rel="noopener noreferrer">Exit Form</a>
        </div>
        <div>
          <p>Semester Feedback Google Form:</p>
          <a href="link_to_feedback_form" target="_blank" rel="noopener noreferrer">Feedback Form</a>
        </div>
      </section>
    </div>
  );
}

export default Studact;
