import React from 'react';

const App = () => {
    return (
        <div> 
            <Header />
            {props.children}
        </div>    
    );
}