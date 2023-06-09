// const heading = React.createElement('h1',{}, "Jai Mahakal!!!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

import React from "react";
import  ReactDOM from "react-dom/client";

// const heading1 = React.createElement('h1',{
//     id: "title",
//     key: "id1"
// },"Jai Mahakal!!");


// Assignment Question of Chapter 03
// const header = React.createElement('div', {
//     className: "title"
// },[
//     React.createElement('h1',{
//         key : "h1"
//     },"This is h1 tag"),
//     React.createElement('h2',{
//         key : "h2"
//     },"This is h2 tag"),
//     React.createElement('h3',{
//         key : "h3"
//     },"This is h3 tag")
// ])




// Below all codes are using JSX


// The below code is called React Element
const heading = (
    <div className="title">
        <h1>This is also a h1 tag</h1>
        <h2>This is also a h2 tag</h2>
        <h3>This is also a h3 tag</h3>
    </div>
    );

console.log(heading);

// Now the below is the Functional Component in react
const Title = () => (
    <div className="title">
        <h1>This is also a h1 tag</h1>
        <h2>This is also a h2 tag</h2>
        <h3>This is also a h3 tag</h3>
    </div>
    )

// We can call the functional component just like a javascript function like showing below {Title()} or we can write it like <Title />
const HeadingComponent = function(){
    return (
        <div>
            {heading}
            <h1>This is the heading component</h1>
            {Title()} 
            <p>Hellooooo</p>
        </div>
    );
}

// We cannot use {HeadingComponent()} like this in the root.render only HeadingComponent()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Title/>);

