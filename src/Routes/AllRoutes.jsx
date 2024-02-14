import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Home from '../Pages/Home'
import Posts from '../Pages/Posts'

function AllRoutes(props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/posts/:id' element={<Posts/>}/>    
            </Routes>    
        </div>

    );
}

export default AllRoutes;