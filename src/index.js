import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import register from './serviceWorker.js'


const rootEl = document.getElementById('root');
let render = () => {
    ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}


render();
register();
