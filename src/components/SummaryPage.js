import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SummaryPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const summary = location.state?.summary || "No summary available";
    const [copy, setCopy] = useState('');

    const handleGoBack = () => {
        // Clear the summary from local storage
        localStorage.removeItem('summary');
        // Navigate to the Home page
        navigate('/');
    };


    const handleCopy = () => {
        navigator.clipboard.writeText(summary);
        setCopy('Text copied to clipboard!');
        setTimeout(() => setCopy(''), 2000); // Hide message after 2 seconds
    };
    
    return (
        <div className="summary-container">
            <div className="summary-box">
            <h1 className="summary_title">Summary</h1>
            <textarea
                value={summary}
                readOnly
                rows={10}
                cols={80}
            />
            <button onClick={handleCopy}>Copy Summary</button>
            <button onClick={handleGoBack}>Go Back</button>
            {copy && <p className="copy-message">{copy}</p>}
            </div>
           

        </div>
    );
}

export default SummaryPage;