import React from "react";

const Notification = ({ show_notification }) => (
  <div className={`Notification-container ${show_notification ? "Show" : ""}`}>
    <p>You have already entered this letter!</p>
  </div>
);

export default Notification;
