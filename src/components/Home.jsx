import React from 'react';
import Counter from '../counter';
import ControlledComponent from '../counterInput';

function Home(){
    return(
        <div>
            <p>Welcome to my portfolio website</p>
            <Counter />
            <ControlledComponent />
        </div>
    )
}

export default Home;