import React from 'react';

const Text = (props) => {
    console.log(props);
    return(
        <div>
            <p>{props.text}</p>
        </div>
    )
};


export default Text;