// const heading = React.createElement('h1',{}, "Jai Mahakal!!!");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const heading1 = React.createElement('h1',{
    id: "title"
},"Jai Mahakal!!");

const heading2 = React.createElement('h2',{
    id: "title2"
},"Namaste-React");

const container = React.createElement('div',{
    id:"container"
},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
