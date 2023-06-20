import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { Footer } from './components/Footer';


{
    /*
    App Layout
    Header
        Logo
        Nav Items
    Body
        Search
        Restaurant List
        Restaurant Cards
            Image
            Food Name
            Restaurant's Name
            Rating or Something
    
    Footer 
        Links 
        Copyright
    */

}


const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);