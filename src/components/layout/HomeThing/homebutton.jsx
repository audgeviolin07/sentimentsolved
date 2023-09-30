import React, { useState } from 'react';

function SampleComponent() {
  // Define a state variable to track the text
  const [displayText, setDisplayText] = useState('This is sample text.');

  // Function to handle button click and change the text
  const handleButtonClick = () => {
    setDisplayText('Text has been changed!');
  };

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={handleButtonClick}>Change Text</button>
    </div>
  );
}

export default SampleComponent;
