import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>);

/*import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


//just practicing :)
//using React
/*const firstElem = React.createElement('span', { children: 'evening' });
const secondElem = React.createElement('span', { children: 'midnight' });
const element = React.createElement('div', {
  fee: 100,
  children: [firstElem, ' ', secondElem],
});
console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//using JSX
const jsxOption1 = <span>Prices</span>;
const jsxOption2 = <span>Organizators</span>;
const jsxMenu = <div>
  {jsxOption1} {jsxOption2}
</div>;
console.log(jsxMenu);
root.render(jsxMenu);
*/
