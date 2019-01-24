import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import CrystalBall from  '../containers/CrystalBall';

const App = () =>{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={CrystalBall} />
                </div>
            </BrowserRouter>
        </div>
    );
};


export default App;