import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={baseUrl}>
            <App />
        </BrowserRouter>
    </I18nextProvider>,
    rootElement);

registerServiceWorker();

