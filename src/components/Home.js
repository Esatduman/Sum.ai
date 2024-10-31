
import React, { useState } from 'react';
import logo2 from '../assets/Sum2.png'; // Adjust the path if necessary
import '../App.css'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';

function Home() {
  const [text, setText] = useState('');
//   const [summary, setSummary] = useState('');
  const navigate = useNavigate(); // Hook for navigation
  const [errorMessage, setErrorMessage] = useState('');

  const summarize = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (text.trim() === '')
        {
            setErrorMessage('Please provide a text to summarize.');


            setTimeout(() => {
                setErrorMessage('');
            }, 2000);

            return;
        }

       navigate('/loading');
       setErrorMessage('');


    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY)
    
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are an AI trained to summarize text. Your task is to provide concise and accurate summaries of the text provided by the user. Do not answer questions unrelated to summarizing text, such as math problems or general inquiries.' },
        { role: 'user', content: text },
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.json();
      const summary = result.choices[0].message.content;


      navigate('/summary', { state: { summary } }); // Navigate to SummaryPage with summary as state
  } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state, e.g., display a message to the user
  }

    //   setSummary(summary);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   // Handle error state, e.g., display a message to the user
    // }
  };

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <img src={logo2} alt="Logo2" className="logo-image" />
        </div>
        <form onSubmit={summarize}>
          <textarea
            value={text}
            rows={10}
            cols={80}
            onChange={(e) => setText(e.target.value)}
            placeholder="Submit Prompt Here...."
          />
          <button type="submit" onClick={summarize}>Summarize</button>
        </form>

        {/* {loading && <Loading />} */}
        {/* for the error message to display  */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}  
       
        {/* <hr />
        <p>{summary}</p> */}
      </div>

    </>
  );
}

export default Home;