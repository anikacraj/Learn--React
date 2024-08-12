import React from 'react';
import './App.css'; // Import your CSS file
import Card from './Components/Card.jsx';
import Header from './Components/Menubar.jsx';
import data from './data.json';
import List from './Components/unique/uniqueList.jsx';

const App = () => {
    const todos = [
        {
            id: '1',
            header: "Green Card",
            title: "This is a green card"
            
        },
        {
            id: '2',
            header: "Blue Card",
            title: "This is a blue card"

        },
        {
            id: '3',
            header: "Orange Card",
            title: "This is an orange card"
        },
        {
            id: '3',
            header: "skyBlue Card",
            title: "This is an orange card"
        }
    ];
    const details = [
        {
            name: "Anik",
            age: 21,
            phones: [{ home: "019329372" }, { office: "018239302" }]
        },
        {
            name: "Anik chy",
            age: 21,
            phones: [{ home: "019329372" }, { office: "0182930" }]
        }
    ];
    
    return (
        <div>
            <Header />
            <h1 className='header'>Welcome to our App</h1>
            <div className='cardDesign'>
                {data.map((item, index) => (
                    <Card key={index} header={item.header} title={item.title} />
                ))}
                <Card />
            </div>
            <p>Thank you for visiting!</p>
            <List todos={todos} />
    
            <h2> Nested mapping :</h2>
            <div>
                {details.map((detail, index) => (
                    <article key={index}>
                        <h3>FullName: {detail.name}</h3>
                        <h3>Age: {detail.age}</h3>
                        {detail.phones.map((phone, phoneIndex) => (
                            <p key={phoneIndex}>
                                Home Phone Number: {phone.home} <br />
                                Office Phone Number: {phone.office}
                            </p>
                        ))}
                    </article>
                ))}
            </div>
        </div>
    );
}
    export default App;
    