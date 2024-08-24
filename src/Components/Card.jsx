import React from 'react';




// function Card() {
//     return (
//         <div className="card">
//             Green Card 
//             <div className="card-title">{cardTitle}</div>
//         </div>
//     );
// }


function Card(props) {
    const{name,title} =props;
    return (
        <div className="card">
         {name}
            <div className="card-title">{title}</div>
        </div>
    );
}

 export default Card;
