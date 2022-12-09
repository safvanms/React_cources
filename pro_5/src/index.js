import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import boxes from '../src/boxes';
import Joke from './components/Joke';
import Top from './components/Top';
import Form from './components/Form';
import Apis from './components/Apis';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



function App() {

    return (
        <div className='page'>
            <div className='inner-page'>
                <Navbar />
                <Main />
                
            </div>
        </div>
    )
}

ReactDOM.render(<App darkMode={false} />, document.getElementById('root'));
