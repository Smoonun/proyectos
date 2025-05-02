import React from 'react';
import './gafete.css';

export default function Gafete({ name, position, employeeId, photo }) {
  return (
    <div className="employee-card">
      <div className="employee-photo">
        <img src={photo} alt={`${name}`} />
      </div>
      <div className="employee-info">
        <h2>{name}</h2>
        <p>{position}</p>
        <p>ID: {employeeId}</p>
      </div>
    </div>
  );
}

