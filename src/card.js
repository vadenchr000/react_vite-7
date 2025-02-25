import 'react';

const Card = (props) => {
    return (

        <>
            {/* eslint-disable-next-line react/prop-types */}
        <h1>{props.title}</h1>
            {/* eslint-disable-next-line react/prop-types */}
        <p>{props.store}</p>
            {/* eslint-disable-next-line no-undef */}
            <button onClick={onClick}></button>
        </>
    );
};

export default Card;