import React, { useState } from "react";
import "./center.css";
const Center = () => {
  const object = [
    "Touch-Screen Based Point-Of-Sale System",
    "Sales and Inventory Monitoring System with SMS",
    "Weather Forecast Application using Android",
    "Computer-Aided Instruction with Voice Recognition system",
    "Cemetery Mapping and Information System",
    "Computer-Aided Instruction with Voice Recognition system",
    "Holistic Computerized Faculty Evaluation System",
    "Book Catalog Application using Android",
    "Hotel Reservation Application with Mobile Compatibility in Android",
    "SMS-Based Grade Inquiry System",
    "Mobile Voting System using Android",
    "Grade Viewer Application in Android",
    "SSG Management System with SMS Notification",
    "Payroll System with Biometric and Barcode Technology",
    "School Event Attendance Monitoring System with Biometric and Barcode Technology",
    "Face Recognition System",
    "Android – Controlled Car",
    "Motorcycle Tracking with GPS using Android",
    "Mobile Educational Application for Elementary Student using Android",
    "Class Time Table in Android",
    "Online Grade Inquiry",
    "WEB-BASED TRACKING SYSTEM",
    "Online Grading System",
    "Airline Reservation System",
    "Video Library Management System",
    "Internet Cafe System",
    "Billing System",
    "Electronic Police Clearance System",
    "Salon System",
    "Human Resource Management System",
    "Online billing system",
    "Online membership and billing system",
    "Online class scheduling system",
    "Online POS(Point of Sale)",
    "E-voting system",
    "Online management system",
    "Online Product Reservation System",
    "Lending Management system",
    "Mobile Reservation for Banquet Halls",
    "E-Learning System",
  ];

  const [thesisTitle, setThesisTitle] = useState("Thesis title generator");

  const handleClick = () => {
    let title = Math.floor(Math.random() * 40);
    setThesisTitle(object[title]);
  };
  return (
    <div className="Center">
      <div className="box">
        <p className="thesis">{thesisTitle}</p>
        <button onClick={handleClick}>Click Here</button>
      </div>
      <p className="descrip">
        This tool randomly generates research title ideas for your reference or
        inspiration. Currently, the generated titles are for computer-related
        majors.
      </p>
    </div>
  );
};

export default Center;
