import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScenarioOne from './pages/ScenarioOne';
import ScenarioTwo from './pages/ScenarioTwo';
import NoPage from './pages/NoPage';
import ScenarioThree from './pages/ScenarioThree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        <Routes>
          <Route path='ScenarioOne' element={<ScenarioOne />} />
          <Route path="ScenarioTwo" element={<ScenarioTwo />} />
          <Route path="ScenarioThree" element={<ScenarioThree />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
