import React, { useState } from 'react';

const AccountForm = () => {
  // State variables for form input values
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');

  // State variable to track whether the form is in edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend or perform other actions here
    // Reset the form input values if needed
    if (!editMode) {
      setName('');
      setCountry('');
      setCompanyName('');
      setCompanyEmail('');
    }
  };

  return (
    <div>
      <h1>{editMode ? 'Edit Account' : 'Create Account'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!editMode}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            disabled={!editMode}
          />
        </div>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            disabled={!editMode}
          />
        </div>
        <div>
          <label>Company Email:</label>
          <input
            type="email"
            value={companyEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            disabled={!editMode}
          />
        </div>
        <button type="submit">
          {editMode ? 'Update Account' : 'Create Account'}
        </button>
      </form>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel Edit' : 'Edit Account'}
      </button>
    </div>
  );
};

export default AccountForm;

