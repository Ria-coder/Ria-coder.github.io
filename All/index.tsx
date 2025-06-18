import {createRoot} from "react-dom/client"
import React from 'react';
import HomePage from "./pages/HomePage";
import './style.css'

const rootHtmlElement = document.getElementById('root')
if (rootHtmlElement) {
    const root = createRoot(rootHtmlElement);
    root.render(<HomePage />);
}