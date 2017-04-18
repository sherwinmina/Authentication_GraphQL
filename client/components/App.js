import React from 'react';
import Header from './Header';

const App = () => {
    return (
        <div> 
            <Header />
            {props.children}
        </div>    
    );
}
export default App;