import React from "react";

const Persona = (props) =>{
    let {firstName,lastName,age,hairColor} = props;
    return(
        <div className="person-card">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default Persona;