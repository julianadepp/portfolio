import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '150cca4a-5f01-437f-b04d-ac0f09d7dc5c',
    clientToken: 'pube36870d71eecf1cc283c3e133cfd80c3',
    site: 'datadoghq.com',
    service:'julianas-site-app',
    env:'prod',
    // Specify a version number to identify the deployed version of your application in Datadog 
    version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 50,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    trackSessionAcrossSubdomains: true,
    defaultPrivacyLevel:'allow'
});
    
datadogRum.startSessionReplayRecording();


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
