import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const SummaryPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { summary } = location.state || { summary: ''};

    const handleCopy = () => {
        navigator.clipboard.writeText(summary);
        alert('Summary Copied');

    };

    return (
        <div className="summary-container">
      <h2>Summary</h2>
      <textarea
        readOnly
        value={summary}
        rows={10}
        cols={80}
      />
      <div>
        <button onClick={handleCopy}>Copy Summary</button>
        <button onClick={() => navigate('/')}>Go Back Home</button>
      </div>
    </div>
  );
    
};


export default SummaryPage;