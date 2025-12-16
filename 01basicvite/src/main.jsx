import Youtube from './youtube.jsx'; 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function MyApp(){ 
    return (
        <div>
            <h1>Custom function</h1>
        </div>
    )
}

const AnotherEl = (
    <a href="https://google.com" target='_blank'>Google</a>
)

const ReactEL = React.createElement('a', 
    {
        href: 'https://google.com', 
        target: '_blank'
    }, 
    'Click to go !!' 
)
createRoot(document.getElementById('root')).render(
    <>
    <App />
    </>
)
