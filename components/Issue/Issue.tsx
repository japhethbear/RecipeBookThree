import React from 'react';
import DeleteIssueButton from './DeleteIssueButton';

interface IssueProps {
  id: number;
  title: string;
  description: string | null;
  status: string;
}

const Issue: React.FC<IssueProps> = ({ id, title, description, status }) => {
  return (
    <div style={{ border: '1px solid black', padding: '15px', margin: '10px 0px', display: 'flex', flexDirection: 'column' }}>
      <h3>Issue #: {id}</h3>
      <h4>Title: {title}</h4>
      <p style={{ flex: '1 0 auto' }}>Description: {description}</p>
      <p>Status: {status}</p>
      <DeleteIssueButton id={id} />
    </div>
  );
};

export default Issue;
