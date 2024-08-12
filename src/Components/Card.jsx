import React from 'react';



const cardTitle = "This is a Blue Card";

// function Card() {
//     return (
//         <div className="card">
//             Green Card 
//             <div className="card-title">{cardTitle}</div>
//         </div>
//     );
// }


function Card(props) {
    const{header,title} =props;
    return (
        <div className="card">
          {header} 
            <div className="card-title">{title}</div>
        </div>
    );
}

 export default Card;
