// import logo2 from './assets/Sum2.png';
// import './App.css';
// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import logo from './assets/Sum.ai-logo.png'; // Adjust the path based on your project structure
// import './Nav.css';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SummaryPage from './components/SummaryPage';
import About from './components/About';
import Nav from './components/Nav';
import Loading from './components/Loading';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/about" element={<About /> } />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
// function App() {

//   const [text, setText] = useState('')
//   const [summary, setSummary] = useState('')


//   const summarize = async (e) => {
//   e.preventDefault(); // Prevent the form from submitting

//   const apiUrl = 'https://api.openai.com/v1/chat/completions';
//   const apiKey =  process.env.REACT_APP_OPENAI_API_KEY;
//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiKey}`,
//   };

//   const data = {
//     model: 'gpt-3.5-turbo',
//     messages: [
//       { role: 'system', content: 'You are an AI trained to summarize text. Your task is to provide concise and accurate summaries of the text provided by the user. Do not answer questions unrelated to summarizing text, such as math problems or general inquiries.' },
//       { role: 'user', content: text },
//     ],
//   };

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok.');
//     }

//     const result = await response.json();
//     const summary = result.choices[0].message.content;

//     setSummary(summary);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     // Handle error state, e.g., display a message to the user
//   }
// };
//   return (
//     <>
//     {/* Navigation bar outside of home-container */}
//     <nav className="nav">
//       <Link to="/">
//         <img src={logo} alt="Logo" />
//       </Link>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//       </ul>
//     </nav>

//     {/* Main content inside home-container */}
//     <div className="home-container">
//       <div className="image-container">
//         <img src={logo2} alt="Logo2" className="logo-image" />
//       </div>
//       <form onSubmit={summarize}>
//         <textarea
//           value={text}
//           rows={10}
//           cols={80}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Submit Prompt Here...."
//         />
//         <button type="submit" onClick={summarize}>Summarize</button>
//       </form>
//       <hr />
//       <p>{summary}</p>
//     </div>
//   </>
//   );
// }


// export default App;
