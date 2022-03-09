import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import Preloader from './components/General/Preloader';
import AOS from 'aos';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Application = lazy(() => import('./App'))

window.addEventListener('load', () => {
  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: -150,
  })
});

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Application />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
