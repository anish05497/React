import React from 'react';
import ReactDOM  from 'react-dom/client';
import logo from './logo.jpg';
import user from './user.jpg'
import './index.css';

const Header = () => {
    return (
     <>
        <header className='header'>
            <div className='left'>
                <img src={logo} alt='Logo' />
            </div>
            <div className='center'>
                <input
                type='text'
                placeholder='Search anything'
                className='input'/>
                <button type='submit'>
                    Search
                </button>
            </div>
            <div className='right'>
                <img src={user} alt='User' />
            </div>
        </header>
     </>   
    );
}

// const root = React.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);
