import React from 'react'
import {BrowserRouter as Router, 
    Routes,
    Route,
    Navigate} 
    from 'react-router-dom';
//import { Form } from '../components/Form';
import  Lista  from '../components/Lista';
import { Navbar } from '../components/Navbar';

 const AppRouter = () => {
    return (
        <div>
            <Router>
          <Navbar/> 
                <Routes>
                    <Route path="/" element={<Lista/>}/>
                   {/* <Route path="/form" element={<Form/>}/>*/}
                    <Route path="/*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </div>
    )
}
 export default AppRouter